const prompt = require("prompt-sync")() 
const tempo = prompt("Tempo: ")
const salario = Number(prompt("Salario"))
const calculoquadri = Math.floor(tempo/4)
const aumento = salario*(0.01*calculoquadri)
const salafinal = aumento+salario
console.log(`O funcionário tem direito a: ${calculoquadri} e o seu salario total é ${salafinal.toFixed(2)}`)

