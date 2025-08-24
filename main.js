'use strict'

function criarImagem(urlImagem){
    const galeria = document.getElementById('galeria')

    const img = document.createElement('img')

     const card = document.createElement('div')

    card.classList.add('card')

    img.src = urlImagem.url

    card.style.setProperty('--legenda', `"${urlImagem.subtitle}"`)

    card.appendChild(img)
    galeria.appendChild(card)
    
}

function carregarImagens(){
    const imagens = [
       
        {
            nome: 'cell',
            subtitle: 'Cell',
            url: './img/cell.png'
        },

        {
            nome: 'freeza',
            subtitle: 'Freeza',
            url: './img/freeza.png'
        },

        {
            nome: 'gohan',
            subtitle: 'Gohan',
            url: './img/gohan.png'
        },

        {
            nome: 'goku black',
            subtitle: 'Goku black',
            url: './img/goku black.png'
        },

        {
            nome: 'goku',
            subtitle: 'Goku',
            url: './img/goku.png'
        },

        {
            nome: 'jiren',
            subtitle: 'Jiren',
            url: './img/jiren.png'
        },

        {
            nome: 'majin boo',
            subtitle: 'Majin boo',
            url: './img/majin boo.jpg'
        },

        {
            nome: 'piccolo',
            subtitle: 'Piccolo',
            url: './img/piccolo.png'
        },

        {
            nome: 'trunks',
            subtitle: 'Trunks',
            url: './img/trunks.png'
        },

        {
            nome: 'vegeta',
            subtitle: 'Vegeta',
            url: './img/vegeta.png'
        }
    ]

    imagens.forEach(criarImagem)


}

carregarImagens()