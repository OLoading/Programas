const egoist = require("fs").writeFileSync

const Thegoist = require("fs").readFileSync

const Loading = require("readline-sync").question;

let texto = Loading("Digite: ")

egoist("Besty.txt", texto.toString(), {flag: "w"})

let conteudo = Thegoist("Besty.txt", {encoding: "utf-8"})

console.log(conteudo)
