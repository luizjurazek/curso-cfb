const div_data = document.getElementById("data")
const data = new Date()

// console.log(Date.now()) // Timestamp

console.log(data.getDate())
console.log(data.getDay())
console.log(data.getHours())
console.log(data.getFullYear())
console.log(data.getFullYear())


const hora  = data.setHours(20, 50, 10)
console.log(hora)

const dia_m = data.getDate() < 10 ? "0" + data.getDate(): data.getDate();


const data_s = dia_m +"/"+data.getMonth()+"/"+data.getFullYear();
div_data.innerHTML = data_s
console.log(data_s)
