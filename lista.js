const input = require('readline-sync').question;

var a = parseInt(input("Quantas pessoas:"))

var lista= []

var i = 1
while(i <= a){
    var idade = parseInt(input("Idade:"))
    
    lista.push(idade)

    console.log(lista)
    i++
}

var soma = 0

for (let i = 0; i < lista.length; i++) {
    var element = lista[i];
    soma = soma + element
}

var m = soma / a

console.log(m)

if (m >= 0 && m <= 25){
    console.log("Jovem")
}

else if (m >= 26 && m <= 60){
    console.log("Adulta")
}

else if (m >= 60 && m <= 90){
    console.log("Idoso")
}

else {
    console.log ("Velhice Extrema")
}



















