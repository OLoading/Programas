const egoist=require ('readline-sync').question;

// l = [0,2,5,7,10,13,3,4,9]

// i = 0

// while(i < l.length){
//     if(i[l] % 2==1){
//     l[i]=l[i]*2
// }
// i++
// }

// console.log(l)


// let l = [2,3,6,7,14,21]

// let i = 0

// let s = 0

// while(i<l.length){
//     s = s + l[i] 
//     i++
// }

// console.log(s)


// Explicação:
let l = [24, 587, -587, 513, 24, 500, 69, 24, 181, 666, 24, 104, 0, 587, 513, 0, -0, -1000, 8/2, 10/5, 8/2, 16/4]

let l2 = []

let m = 1000000000

for (let i = 0; i < l.length; i++){

    if (l[i] < m){
        m = l[i]
    }
}

let i = m

while(l2.length < l.length){

    // l.includes(i)
    if (l.indexOf(i) >= 0){
        let ocorrencia = 0
        for (let j = 0; j < l.length; j++){
            if (l[j] == i){
                ocorrencia++
            }
        }

        console.log(`o elemento ${i} aparece ${ocorrencia} vezes na lista`)

        for(let j = 0; j < ocorrencia; j++){
            l2.push(i)
        }
    }

    i++
}

console.log(l2)