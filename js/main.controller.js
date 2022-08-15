'use strict'

let elGallery
let gElCanvas
let gCtx
let gElNavlinks
let gElPages

function init() {
    gElNavlinks = document.querySelectorAll('.nav-item')
    gElPages = document.querySelectorAll('.page')
    gElCanvas = document.querySelector('#canvas')
    gCtx = document.getElementById('canvas').getContext('2d')
    elGallery = document.querySelector('.main-gallery')
    renderGallery()
}

function handleActive(el = gElNavlinks[1]) {
    renderMeme()
    // change to for each during refactor
    // gElNavlinks.forEach((el, idx) => {
    //     el.classList
    // });
    for (let i = 0; i < gElNavlinks.length; i++) {
        if (gElNavlinks[i] === el) {
            gElNavlinks[i].classList.add('active')
            gElPages[i].classList.remove('hide')
            document.body.classList.toggle('menu-opened');
        } else {
            gElNavlinks[i].classList.remove('active')
            gElPages[i].classList.add('hide')
        }
    }
}



function toggleMenu() {
    document.body.classList.toggle('menu-opened');
}