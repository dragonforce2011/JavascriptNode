const prompt = require("prompt-sync")() // estamos chamando o pacote aqui
const veiculo = prompt("Veiculo: ") // o prompt serve para ler os dados de entrada
const preco = Number(prompt("preco R$:"))
const entrada = preco*0.50
const parcela = (preco*0.50)/12
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada: ${entrada.toFixed(2)}`)
console.log(`Parcela de 12x: ${parcela.toFixed(2)}`)