let nome
let nota1, nota2, nota3
let media

nome = prompt("digite o seu nome")
nota1 = parseInt(prompt("digite um numero"))
nota2 = parseInt(prompt("digite um segundo numero"))
nota3 = parseInt(prompt("digite um terceiro numero"))

média = (nota1 + nota2 + nota3) / 3

document.write(` ${nome}, sua média é ${média}`)