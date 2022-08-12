'use strict'

let elGallery
let elCanvas
let gCtx
let gElNavlinks
let gElPages

function init() {
    gElNavlinks = document.querySelectorAll('.nav-item')
    gElPages = document.querySelectorAll('.page')
    elCanvas = document.querySelector('#canvas')
    gCtx = document.getElementById('canvas').getContext('2d')
    elGallery = document.querySelector('.main-gallery')
    renderGallery()
}

function handleActive(el = gElNavlinks[1]) {
    renderMeme()
    for (let i = 0; i < gElNavlinks.length; i++) {
        if (gElNavlinks[i] === el) {
            gElNavlinks[i].classList.add('active')
            gElPages[i].classList.remove('hide')
        } else {
            gElNavlinks[i].classList.remove('active')
            gElPages[i].classList.add('hide')
        }
    }
}