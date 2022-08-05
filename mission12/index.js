const today = new Date()

const year = today.getFullYear()
const month = today.getMonth()+1
const day = today.getDay()
const hour = today.getHours()
const minute = today.getMinutes()
const second = today.getSeconds()

console.log(year+"년",month+"월",day+"일",hour+"시",minute+"분",second+"초")