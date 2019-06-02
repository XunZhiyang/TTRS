from flask import render_template, session, request
from app import app
import json
import client
import random


def privilege(userid):
    if not userid:
        return 0
    result = client.send("query_profile %s\n"%(userid))
    if result == "0\n" :
        return 0
    lis = data[:-1].split(' ')
    return int(data[3])

@app.route('/')
def index():
    return render_template('index.html')


def input_modify_profile(command):
    return "modify_profile {userid} {name} {password} {email} {phone}\n\0".format(**command)

def output_modify_profile(command):
    if result == "0\n":
        return "0"
    else:
        return "1"

@app.route('/action/modify_profile', methods = ['POST'])
def action_modify_profile():
    items = ("userid", "name", "password", "password2", "email", "phone")
    command = {}
    for item in items:
        value = request.form.get(item, "")
        if value :
            command[item] = value
        else :
            return "0"
    if command[password] != command[password2] :
        return "0"
    result = client.send(input_modify_profile(command))
    result = output_modify_profile(result)
    return result

def input_action_signup(command):
    return "register {name} {password} {email} {phone}\n\0".format(**command)

def output_action_signup(command):
    if result == "-1\n":
        return "0"
    else:
        return result[:-1]

@app.route('/action/signup', methods=['POST'])
def action_signup() :         #success:userid   fail:"0"
    items = ("name", "password", "email", "phone")
    command = {}
    for item in items:
        value = request.form.get(item, "")
        if value :
            command[item] = value
        else :
            return "0"
    result = client.send(input_action_signup(command))
    result = output_action_signup(result)
    return result


def input_action_login(command):
    return "login {userid} {password}\n\0".format(**command)

def output_action_login(command):
    if result == "1\n":
        return "1"
    else:
        return "0"


@app.route('/action/login', methods=['POST', 'GET'])
def action_login() :
    # print(request.getParameter())
    items = ("userid", "password")
    command = {}
    for item in items:
        print(item)
        value = request.form.get(item, "")
        print(value)
        if value :
            command[item] = value
        else :
            return "0"
    result = client.send(input_action_signup(command))
    if result == "1\n":
        session['userid'] = command[userid]
        return "1"
    else:
        return "0"


def input_query_transfer(command):
    return "query_transfer {loc1} {loc2} {date} {catalog}\n".format(**command)

def output_query_transfer(command):
    if command == "-1\n":
        result["num"] = 0
    else :
        result["num"] = 2
        trainlist = command.split("\n")
        result["ticket"] = []
        keys = ("train_id", "locfrom", "datefrom", "timefrom", "locto", "dateto", "timeto")
        for item in trainlist:
            key_list = item.split(" ")
            if (len(key_list) < len(keys)):
                continue
            info = {}
            for i in range(len(keys)):
                info[keys[i]] = key_list[i]
            info["ticket"] = {}
            key_list = filter(None, key_list)
            for i in range(len(keys), len(key_list), 3):
                info["ticket"][key_list[i]] = {"num": int(key_list[i+1]), "price":float(key_list[i+2])}
            result["ticket"].append(info)
    return result

def input_query_ticket(command):
    return "query_transfer {loc1} {loc2} {date} {catalog}\n".format(**command)

def output_query_ticket(command):
    if command == "-1\n":
        result["num"] = 0
    else :
        trainlist = command.split("\n")
        result["num"] = int(trainlist[0])
        result["ticket"] = []
        keys = ("train_id", "locfrom", "datefrom", "timefrom", "locto", "dateto", "timeto")
        for item in trainlist[1:]:
            key_list = item.split(" ")
            if (len(key_list) < len(keys)):
                continue
            info = {}
            for i in range(len(keys)):
                info[keys[i]] = key_list[i]
            info["ticket"] = {}
            key_list = filter(None, key_list)
            for i in range(len(keys), len(key_list), 3):
                info["ticket"][key_list[i]] = {"num": int(key_list[i+1]), "price":float(key_list[i+2])}
            result["ticket"].append(info)
    return result

@app.route('/action/query', methods=['POST'])
def action_query():
    items = ("loc1", "loc2", "date", "catalog", "transfer")
    command = {}
    for item in items:
        value = request.form.get(item, "")
        if value :
            command[item] = value
        else :
            return "0"
    if request.form["transfer"] == u"true":
        result = client.send(input_query_transfer(command))
        result = output_query_transfer(result)
    else:
        result = client.send(input_query_ticket(command))
        result = output_query_ticket(result)
    return result


def input_buy_ticket(command):
    return "buy_ticket {id} {num} {train_id} {loc1} {loc2} {date} {ticket_kind}\n".format(**command)

def output_buy_ticket(command):
    if command == "1\n":
        return "1"
    else:
        return "0"

@app.route('/action/buy', methods=['POST'])
def action_buy():
    user = session.get("userid", "");
    if not user:
        return "0"
    ##should be a feedback
    items = ("train_id","num","loc1", "loc2", "date", "ticket_kind")
    command = {}
    for item in items:
        value = request.form.get(item, "")
        if value :
            command[item] = value
        else :
            return "0"
    command["id"] = user;
    result = client.send(input_buy_ticket(command))
    result = output_buy_ticket(result)
    return result


def input_refund_ticket(command) :
    return "refund_ticket {id} {num} {train_id} {loc1} {loc2} {date} {ticket_kind}\n".format(**command)

def output_refund_ticket(command) :
    if command == "1\n":
        return "1"
    else:
        return "0"

@app.route('/action/refund', methods=['POST'])
def action_refund():
    user = session.get("userid", "");
    if not user:
        return "0"
    items = ("train_id","num","loc1", "loc2", "date", "ticket_kind")
    command = {}
    for item in items:
        value = request.form.get(item, "")
        if value :
            command[item] = value
        else :
            return "0"
    command["id"] = user;
    result = client.send(input_refund_ticket(command))
    result = output_refund_ticket(result)
    return result


def input_add_train(command) :
    return "add_train {train_id} NTG G 2 1 o\n{loc1} xx:xx {start_time} 00:00 ￥0.0\n{loc2} {arrive_time} xx:xx 00:00 ￥{price}\n".format(**command)

def output_add_train(command) :
    if command == "1\n":
        return "1"
    else:
        return "0"

@app.route('/action/add_train', methods=['POST'])
def action_add_train():
    user = session.get("userid", "");
    if not user:
        return "0"
    if privilege(user) < 2 :
        return "0"
    items = ("loc1", "loc2", "start_time", "arrive_time", "price")
    command = {}
    for item in items:
        value = request.form.get(item, "")
        if value :
            command[item] = value
        else :
            return "0"
    command["train_id"] = random.randint(10000, 99999)
    # command["name"] = "NTG"
    # command["num_station"] = 2
    result = client.send(input_add_train(command))
    result = output_add_train(result)
    return result


def input_modify_train(command) :
    return "add_train {train_id} NTG G 2 1 o\n{loc1} xx:xx {start_time} 00:00 ￥0.0\n{loc2} {arrive_time} xx:xx 00:00 ￥{price}".format(**command)

def output_modify_train(command) :
    if command == "1\n":
        return "1"
    else:
        return "0"

@app.route('/action/modify_train', methods=['POST'])
def action_modify_train():
    user = session.get("userid", "");
    if not user:
        return "0"
    if privilege(user) < 2 :
        return "0"
    items = ("train_id", "loc1", "loc2", "start_time", "arrive_time", "price")
    command = {}
    for item in items:
        value = request.form.get(item, "")
        if value :
            command[item] = value
        else :
            return "0"
    # command["name"] = "NTG"
    # command["num_station"] = 2
    result = client.send(input_modify_train(command))
    result = output_modify_train(result)
    return result


def input_delete_train(command) :
    return "delete_train {train_id}\n".format(**command)

def output_delete_train(command) :
    if command == "1\n":
        return "1"
    else:
        return "0"

@app.route('/action/delete_train', methods=['POST'])
def action_delete_train():
    user = session.get("userid", "");
    if not user:
        return "0"
    if privilege(user) < 2 :
        return "0"
    items = ("train_id")
    command = {}
    for item in items:
        value = request.form.get(item, "")
        if value :
            command[item] = value
        else :
            return "0"
    # command["name"] = "NTG"
    # command["num_station"] = 2
    result = client.send(input_add_train(command))
    result = output_add_train(result)
    return result
