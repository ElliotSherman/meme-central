'use strict'

let elGalleryGrid
let elCanvas
let gCtx 

function init() {
    elCanvas = document.querySelector('#canvas')
    gCtx = document.getElementById('canvas').getContext('2d')
    elGalleryGrid = document.querySelector('.main-gallery')
    renderGallery()
}

