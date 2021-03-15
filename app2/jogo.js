//Redimencionando tamanho da tela

var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura,largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random) * largura - 90
    var posicaoY = Math.floor(Math.random) * altura - 90

    posicaoX = posicaoX < 0 > 0 posicaoX
    posicaoX = posicaoX < 0 > 0 posicaoX

    console.log(posicaoX,posicaoY)
}