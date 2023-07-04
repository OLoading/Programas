const Input = require('readline-sync').question;

var Peso=Input("Insira Seu Peso:")
var Altura=Input("Insira Sua Altura:")

Peso =parseFloat(Peso);
Altura =parseFloat(Altura);

var Imc=Peso/(Altura*Altura);
    console.log(Imc)

if(Imc <=18.5){
    console.log("Abaixo Do Peso.")
}

else if(Imc >=18.5 && Imc <=24.9){
    console.log("Seu Peso Está Normal.")
}

else if(Imc >=25 && Imc <=29.9){
    console.log("Você Está Acima Do Peso.")
}

else{
    console.log("Valor Inválido")
}


