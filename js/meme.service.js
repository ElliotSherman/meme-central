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
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.font = `${size}px serif`;
    gCtx.textAlign = align
    gCtx.lineWidth = 1;
    gCtx.fillStyle = color
    gCtx.fillText(txt, 200, 100)
    gCtx.closePath()
}


function handleTxtSize(val) {
    let { size } = gMeme.lines[0]
    val === "add" ? gMeme.lines[0].size++ : gMeme.lines[0].size--
    if (size >= 45 || size <= 10) return
    console.log(gMeme.lines[0].size);
}

function drawImg(id) {
    const img = document.getElementById(id)
    gCtx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height)
    draw()
}

function inputChange(type, val) {
    if (type === 'text') {
        gMeme.lines[0].txt = val
    } else if (type === 'color') {
        gMeme.lines[0].color = val
    }
}

function imageSelect(el) {
    const { id } = el
    gMeme.selectedImgId = id
}

function hanleAlignChange(val) {
    gMeme.lines[0].align = val
}