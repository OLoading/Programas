const egoist=require ('readline-sync').question;

var n = egoist("Numero:")
var i = 2
var ehprimo = true

while(i < n && n > 2){

    if(n % i == 0){
        ehprimo = false
        break
    } 

    i++
}

if(ehprimo){
    console.log("E")
}
    else {
        console.log("N.E")
    }