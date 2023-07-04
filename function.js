const egoist=require ('readline-sync').question;

// let a
// let b

// function menor (a, b){
//     if (a < b){
//         return a
//     }
//     else {
//         return b
//     }
// }

// console.log(menor(100, 195))
// Function que recebe dois numeros e retorna o menor|


// let x
// let y

// Essa funcao calcula a potencia entre dois numeros|
// function potencia (x, y){
// math.pow calcula a potencia|
//     return Math.pow (x, y)  
// }

// var resultado = potencia(2, 3)
// console.log(resultado)
// Function que usa potencia (exemplo: 2²)|


// let numero

// function parouimpar (numero){
//     return numero % 2 !== 0
// }

// console.log(parouimpar(2))
// console.log(parouimpar(3))
// Function usando se o número é par ou ímpar|


// let numero

// function num (numero){
//     if(numero > 0){
//         console.log("Positivo")
//         return 1
//     }
//     else if(numero < 0){
//         console.log("Negativo")
//         return -1
//     }
//     else if(numero == 0){
//         console.log("Neutro")
//         return 0
//     }
// }

// console.log(num(1))
// console.log(num(-3))
// console.log(num(0))
// Function que verifica se o numero é positivo, negativo ou neutro|


// let numero

// function calcularcubo (numero){
//         return numero * numero * numero
// }

// var resultado = calcularcubo(5)
// console.log(resultado)
// Function que calcula o cubo|


// let palavra

// function string(palavra){
//     return palavra.split('').reverse().join('')
// }

// var resultado = string('subinoonibus')
// console.log(resultado)
// Function inverter a string|


// function contarcaractere(string, caractere){
//     var contador = 0
//     for(var i = 0; i < string.length; i++){
//         if(string.charAt(i) == caractere){
//             contador++
//         }
//     }
//     return contador
// }

// var quantidade = contarcaractere('Mini, Craft', 'i')
// console.log(quantidade)
// Function Mostra quantas vezes o caractere repete na string|



// function hours(hora24){
//     var partes = hora24.split(':')
//     var horas = parseInt(partes[0])
//     var minutos = partes[1]
//     var sufixo = horas >= 12 ? 'PM' : 'AM'

//     if (horas == 0){
//         horas = 12
//     }
//     else if (horas > 12){
//         horas -= 12
//     }

//     return horas + ':' + minutos + ' ' + sufixo

// }

// var hora12 = hours('15:30')
// console.log(hora12)
// Function Converte horas para Hours(Pm e AM)|


// function simularLancamentoDado(){
//     var frequencias = [0, 0, 0, 0, 0, 0]

//     for (var i = 0; i < 1000000; i++){
//         var resultado = Math.floor(Math.random() * 6) + 1
//         frequencias[resultado - 1]++
//     }

//     var estatisticas = []
//     for (var j = 0; j < 6; j++){
//         var frequencia = frequencias[j]
//         var porcentagem = (frequencia / 1000000) * 100
//         estatisticas.push('Face ' + (j + 1) + ': ' + frequencia + ' vezes (' + porcentagem.toFixed(2) + '%) ')
//     }

//     return estatisticas
// }

// var resultados = simularLancamentoDado()
// console.log(resultados)
// Function Do Dado|

// Faça uma função que vai receber uma string e vai retornar quantas não vogais tem|
// Nosso alfabeto possui 26 letras:
// A – B – C – D – E – F – G – H – I – J – K – L – M – N – O – P – Q – R – S – T – U – V – W – X – Y – Z

// Onde temos 5 vogais: A E I O U
// E 21 consoantes.

// var c = egoist("Digite letras:")

// function  stringletra(palavra){
    
//     var v = 0

//     for (i = 0; i < palavra.length; i++ ){

//     var letra = palavra[i]

//         if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
//             console.log(letra, "é vogal") 
//             v++
//         }
//         else{
//             console.log(letra, "é consoante")
//         }
//     }  
//     console.log("Tem", v, "Vogais")
//     console.log("Tem", palavra.length-v, "Consoantes")
// }

// stringletra(c)

// ||Calculadora usando function||
let rep = true


function Somar(operador, operador2){
        
    return operador + operador2
}

function Subtrair(a, b){

    return a - b
}

function Divisao(m, n){
    
    return m / n
}

    function Multi(x,y){

    return x * y
}

while(rep){
    
    console.log("--Calculator Do Loading--")
    console.log("1.Adicao + ")
    console.log("2.Divisao / ")
    console.log("3.Subtracao - ")
    console.log("4.Multiplicacao * ")
    console.log("5.Sair .")
    let A = (egoist("escolha uma operacao: "))
    
    if (A == "+"){
        operador = parseFloat(egoist("Digite o primeiro num: "))
        operador2 = parseFloat(egoist("Digite o segundo num: "))
        let r = Somar(operador, operador2)
        console.log(r)
    }
    else if (A == "-"){
        a = parseFloat(egoist("Digite o primeiro num: "))
        b = parseFloat(egoist("Digite o segundo num: "))
        let re = Subtrair(a, b)
        console.log(re)
    }
    else if (A == "/"){
        m = parseFloat(egoist("Digite o primeiro num: "))
        n = parseFloat(egoist("Digite o segundo num: "))
        let res = Divisao(m, n)
        console.log(res)
    }
    else if (A == "*"){
        x = parseFloat(egoist("Digite o primeiro num: "))
        y = parseFloat(egoist("Digite o segundo num: "))
        let resultado = Multi(x, y)
        console.log(resultado)
    }
    else if (A == "."){
        console.log("Obrigado, Volte sempre!")
        break
    }
}
