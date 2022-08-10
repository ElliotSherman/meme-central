'use strict'

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            align: 'center',
            color: 'red'
        },
        {
            txt: 'somtimes i dont',
            size: 40,
            align: 'center',
            color: 'blue'
        }
    ]
}

function draw() {
    let { txt, size, align, color } = gMeme.lines[0]
    // gCtx.beginPath()
    console.log(gCtx)
    gCtx.textBaseline = 'middle';
    gCtx.font = `${size}px serif`;
    gCtx.textAlign = align
    gCtx.lineWidth = 1;
    gCtx.fillStyle = color
    gCtx.fillText(txt, 200, 100)
    // gCtx.closePath()
}

function drawImg(id) {
    const img = new Image()
    img.src = `img/${id}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height)
    }
}