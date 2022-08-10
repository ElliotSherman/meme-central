'use strict'

// txt: 'I sometimes eat Falafel',
// size: 20,
// align: 'left',
// color: 'red'


function renderMeme(el) {
    const { id } = el
    drawImg(id)
    console.log('on image click this function will rendeer the meme to the canvas', id);
}
