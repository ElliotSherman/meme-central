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
    draw()
}


function onImageClick(el) {
    renderMeme(el)
}

function draw() {
    gCtx.font = '48px serif';
    gCtx.fillText('Hello world', 10, 50);
  }