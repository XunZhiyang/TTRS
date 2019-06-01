let  changeTime = function (data) {
  let time = new Date(data)
  return time.getFullYear()+'年' + (time.getMonth()+1) + '月' + time.getDate()+'日'+ time.getHours()+'时'+time.getMinutes()+'分'
}
export  default changeTime
