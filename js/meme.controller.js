'use strict'

function onInputChange(type, val){
    inputChange(type, val)
}

function onHandleTxtSize(val){
    handleTxtSize(val)
}

function onHandleAlignChange(val){
    handleAlignChange(val)
}

function clearCanvas() {
    document.querySelector('.main-gallery').classList.remove('hide')
    document.querySelector('.main-editor').classList.add('hide')
    gCtx.clearRect(0, 0, elCanvas.width, elCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2);
}