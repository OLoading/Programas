const egoist=require ('readline-sync').question;

console.log("QUIZ MINECRAFT")
console.log()
var comecar = egoist("Deseja comecar?")
var opcao
var ponto = 0

while(true){
    console.log("1- Começar")
    console.log("2- Sair")
    var opcao = egoist()
    if(opcao == 2){
    break}
    
    console.log("Pergunta 1:")
console.log()
console.log("Minecraft esta em qual versao atualmente?")
var a="A. "+"Beta"
var b="B. "+"1.19.5"
var c="C. "+"1.19.9"
var d="D. "+"1.20"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "d"){
    ponto = ponto + 1
}

console.log("Pergunta 2:")
console.log()
console.log("E possivel do bloco de comando ser achado no inventario?")
var a="A. "+"Sim"
var b="B. "+"Nao, so com mods"
var c="C. "+"Nao Sei"
var d="D. "+"Nao"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "d"){
    ponto = ponto + 1
}

console.log("Pergunta 3:")
console.log()
console.log("Em que versao o Warden foi adicionado?")
var a="A. "+"1.20"
var b="B. "+"1.19"
var c="C. "+"1.17"
var d="D. "+"1.18"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "c"){
    ponto = ponto + 1
}

console.log("Pergunta 4:")
console.log()
console.log("Quantos mobs existem no Minecraft?")
var a="A. "+"22"
var b="B. "+"13"
var c="C. "+"14"
var d="D. "+"16"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "c"){
    ponto = ponto + 1
}

console.log("Pergunta 5:")
console.log()
console.log("Qual mob dropa o Totem Da Imortalidade")
var a="A. "+"Golem De Ferro"
var b="B. "+"Bruxa"
var c="C. "+"Enderman"
var d="D. "+"Invocador"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "d"){
    ponto = ponto + 1
}

console.log("Pergunta 6:")
console.log()
console.log("Qual e o mob secreto?")
var a="A. "+"Giant Zombie"
var b="B. "+"Herobrine"
var c="C. "+"lick"
var d="D. "+"Entidade 303"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "a"){
    ponto = ponto + 1
}

console.log("Pergunta 7:")
console.log()
console.log("O mod mais famoso do Minecraft:")
var a="A. "+"Minimap"
var b="B. "+"Orespawn"
var c="C. "+"Biomes O Plenty"
var d="D. "+"TLauncher"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "b"){
    ponto = ponto + 1
}

console.log("Pergunta 8:")
console.log()
console.log("Qual foi o primeiro nome dado ao game no seu lançamento beta?")
var a="A. "+"Shiginima Launcher"
var b="B. "+"Minecraft"
var c="C. "+"Cave Game"
var d="D. "+"Craft Mine"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "c"){
    ponto = ponto + 1
}

console.log("Pergunta 9:")
console.log()
console.log("Qual é o titulo mais raro de aparecer na tela inicial do minecraft?")
var a="A. "+"Story Mode"
var b="B. "+"Cave Game"
var c="C. "+"Dungeons"
var d="D. "+"Minceraft"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "d"){
    ponto = ponto + 1
}

console.log("Pergunta 10:")
console.log()
console.log("Minecraft foi inspirado em que jogo?")
var a="A. "+"Terraria"
var b="B. "+"Roblox"
var c="C. "+"Infiniminer"
var d="D. "+"RollerCoaster Tycoon"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "c"){
    ponto = ponto + 1
}

console.log("Pergunta 11:")
console.log()
console.log("Quando Minecraft foi criado?")
var a="A. "+"17 De Maio"
var b="B. "+"17 De Marco"
var c="C. "+"17 De Setembro"
var d="D. "+"17 De Abril"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "a"){
    ponto = ponto + 1
}

console.log("Pergunta 12:")
console.log()
console.log("Minecraft foi lançado em que ano?")
var a="A. "+"2009"
var b="B. "+"2011"
var c="C. "+"2000"
var d="D. "+"2005"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "b"){
    ponto = ponto + 1
}

console.log("Pergunta 13:")
console.log()
console.log("Quem e o pai do steve?")
var a="A. "+"Notch"
var b="B. "+"Villager"
var c="C. "+"Steve nao tem pai"
var d="D. "+"Nenhuma das alternativas"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "c"){
    ponto = ponto + 1
}

console.log("Pergunta 14:")
console.log()
console.log("Qual a origem do mob creeper?")
var a="A. "+"Ele foi corretamente criado e desenvolvido"
var b="B. "+"Creeper foi uma ideia do simples nada"
var c="C. "+"A origem foi um raio que caiu em um porco"
var d="D. "+"Ele foi um erro aproveitado"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "d"){
    ponto = ponto + 1
}

console.log("Pergunta 15:")
console.log()
console.log("Qual a ferramenta mais forte do Minecraft ")
var a="A. "+"Machado"
var b="B. "+"Picareta"
var c="C. "+"Espada"
var d="D. "+"Arco e flecha"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log()
var resposta=(egoist("Resposta:"))

if(resposta == "a"){
    ponto = ponto + 1
}
break
}

console.log(ponto)