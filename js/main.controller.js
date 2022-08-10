'use strict'

let elGalleryGrid
let elCanvas
let gCtx 

init()

function init() {
    gCtx = document.getElementById('canvas').getContext('2d')
    elGalleryGrid = document.querySelector('.main-gallery')
    elCanvas = document.querySelector('#canvas')
    renderGallery()
}


function onImageClick(el) {
    renderMeme(el)
}

