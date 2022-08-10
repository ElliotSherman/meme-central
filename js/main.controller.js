'use strict'

let elGalleryGrid

init()

function init() {
    elGalleryGrid = document.querySelector('.main-gallery')
    renderGallery()
}


function onImageClick(el) {
    console.log(el);
    console.log('moving pic to canvas');
}