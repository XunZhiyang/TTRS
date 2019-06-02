import socket

HOST = "localhost"
PORT = 111

def send(command):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((HOST, PORT))
    s.send(command)
    ret = ""
    d = s.recv(1024)
    while d :
        ret.append(d)
        d = s.recv(1024)
    s.close()
    return unicode(ret, "utf-8")
