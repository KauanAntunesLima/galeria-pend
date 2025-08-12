'use strict'

function criarImagem(urlImagem){
    const galeria = document.getElementById('galeria')
    const img = document.createElement('img')
    img.src = urlImagem.url

    galeria.appendChild(img)
    
}

function carregarImagens(){
    const imagens = [
       
        {
            nome: 'cell',
            url: './img/cell.png'
        },

        {
            nome: 'freeza',
            url: './img/freeza.png'
        },

        {
            nome: 'gohan',
            url: './img/gohan.png'
        },

        {
            nome: 'goku black',
            url: './img/goku black.png'
        },

        {
            nome: 'goku',
            url: './img/goku.png'
        },

        {
            nome: 'jiren',
            url: './img/jiren.png'
        },

        {
            nome: 'majin boo',
            url: './img/majin boo.jpg'
        },

        {
            nome: 'piccolo',
            url: './img/piccolo.png'
        },

        {
            nome: 'trunks',
            url: './img/trunks.png'
        },

        {
            nome: 'vegeta',
            url: './img/vegeta.png'
        }
    ]

    imagens.forEach(criarImagem)


}

carregarImagens()