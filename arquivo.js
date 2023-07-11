const { setEncoding } = require("readline-sync")

const write = require("fs").writeFileSync

const read = require("fs").readFileSync

let texto = 100

write("Loading The Best Egoist.txt", texto.toString(), {flag: "a"})

// let conteudo = read("Loading The Egoist.txt", {encoding: "utf-8"})

// console.log(conteudo)