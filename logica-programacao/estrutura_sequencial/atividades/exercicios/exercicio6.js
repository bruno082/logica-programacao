let a, b, temp

a = parseInt(prompt("digite o valor de A"))
b = parseInt(prompt("digite o valor de B"))

document.write(`o valor de A: ${a} e B: ${b} <br> `)
document.write(`${a - b} <br> `)//a4 - b5 = -1

temp = a
a = b
b = temp

document.write(`o valor de A: ${a} e B: ${b} <br> `)
document.write(`${a - b} <br>`) //a5 - b4 = 1
