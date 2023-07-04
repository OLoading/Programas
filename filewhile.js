const input = require('readline-sync').question;

// var a = 0

// while (a <= 100){
//     console.log(a)
//     a++
// }

// var nota = -1

// while(nota < 0 || nota > 10){
//     var nota = input("digite uma nota: ")

//     if (nota < 0 || nota > 10){
//         console.log("nota invalida")
//     }
// }

var controle = true

while(controle){
    var nome = input("digite o nome: ")
    var idade = input("digite a idade: ")
    var salario = input("digite a salario: ")
    var sexo = input("digite a sexo: ")
    var estado = input("digite a estado civil: ")

    var nomeCon = true
    var idadeCon = true
    var salarioCon = true
    var sexoCon = true
    var estadoCon = true

    if (nome.length < 3){
        console.log("nome invalido")
        nomeCon = false
    }

    if (idade < 0 || idade > 164){
        console.log("idade invalida")
        idadeCon = false
    }

    if (salario < 0){
        console.log("salario invalida")
        salarioCon = false
    }

    if (sexo != 'f' && sexo != 'm'){
        console.log("Sexo invalido")
        sexoCon = false
    }

    if (estado != 's' && estado != 'c' && estado != 'v' && estado != 'd'){
        console.log("estado civil invalido")
        estadoCon = false
    }

    if (nomeCon &&
        idadeCon &&
        salarioCon &&
        sexoCon &&
        estadoCon){
            controle = false
        }
}