'use strict'

function onInputChange(type, val) {
    inputChange(type, val)
    renderMeme()
}

function onHandleTxtSize(val) {
    handleTxtSize(val)
    renderMeme()
}

function onHandleAlignChange(val) {
    handleAlignChange(val)
    renderMeme()
}
function handleFontChange(val) {
    fontChange(val)
    renderMeme()
}

function clearCanvas() {
    document.querySelector('.main-gallery').classList.remove('hide')
    document.querySelector('.main-editor').classList.add('hide')
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    handleActive(gElNavlinks[0])
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2);
}
function handleDownloadMeme(elLink) {
    console.log('downloading');
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-canvas';
}
