const egoist=require ('readline-sync').question;

let l = [-2,-6,5,33,8.3,79,0]

let ltwo = []

let menor = l[0]
let maior = l[0]

for (let i = 0; i < l.length; i++){

    if (l[i] < menor){
        menor = l[i]
    }

}

let i = m

while(ltwo.length < l.length){

    // l.includes(i)
    if (l.indexOf(i) >= 0){
        let ocorrencia = 0
        for (let j = 0; j < l.length; j++){
            if (l[j] == i){
                ocorrencia++
            }
        }

        for(let j = 0; j < ocorrencia; j++){
            ltwo.push(i)
        }
    }

    i++
}

console.log(ltwo)