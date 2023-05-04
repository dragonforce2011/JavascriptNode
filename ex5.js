const prompt = require("prompt-sync")() 
const pesoracao = Number(prompt("peso da ração: "))
const consumogram = Number(prompt("consumo em gramas: "))
const convertpeso = pesoracao*1000
const diasdura = Math.floor(convertpeso/consumogram) 
const resto = convertpeso%consumogram
console.log(`a ração tem ${diasdura} dias de duração e o restante dela é: ${resto}`)