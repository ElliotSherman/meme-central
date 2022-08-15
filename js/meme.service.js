'use strict'

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 30,
            align: 'center',
            font: 'impact',
            color: 'white',
            stroke: 'black',
            pos: {
                x: 190,
                y: 40
            }

        },
        // {
        //     txt: 'somtimes i dont',
        //     size: 30,
        //     align: 'impact',
        //     color: 'white',
        //     align: 'center',
        //     font: 'impact',
        //     color: 'white',
        //     stroke: 'black',
        //     pos:{
        //         x:190,
        //         y:350
        //     }
        // }
    ]
}
// MOVE TO CONTROLLER
function renderMeme() {
    drawImg(gMeme.selectedImgId)
    draw()
}

function getMeme() {
    return gMeme
}

function draw() {
    let meme = getMeme()
    meme.lines.forEach((line) => {
        let { txt, size, align, color, font, stroke, pos } = line
        gCtx.beginPath();
        gCtx.textBaseline = 'middle';
        gCtx.font = `${size}px ${font}`;
        gCtx.textAlign = align
        gCtx.lineWidth = 3;
        gCtx.fillStyle = color
        gCtx.strokeStyle = stroke
        gCtx.fillText(txt, pos.x, pos.y, gElCanvas.width)
        gCtx.strokeText(txt, pos.x, pos.y, gElCanvas.width)
        gCtx.closePath();
    })
    // let { txt, size, align, color, font, stroke, pos } = meme.lines[meme.selectedLineIdx]
    // gCtx.beginPath();
    // gCtx.textBaseline = 'middle';
    // gCtx.font = `${size}px ${font}`;
    // gCtx.textAlign = align
    // gCtx.lineWidth = 3;
    // gCtx.fillStyle = color
    // gCtx.strokeStyle = stroke
    // gCtx.fillText(txt, pos.x, pos.y, gElCanvas.width)
    // gCtx.strokeText(txt, pos.x, pos.y, gElCanvas.width)
    // gCtx.closePath();
}

function fontChange(val) {
    gMeme.lines[0].font = val
}

function handleTxtSize(val) {
    const meme = getMeme()
    const { selectedLineIdx } = meme
    // if (|| ) return
    val === "add" && gMeme.lines[selectedLineIdx].size <= 45 ? gMeme.lines[selectedLineIdx].size += 5 : ''
    val !== "add" && gMeme.lines[selectedLineIdx].size >= 20 ? gMeme.lines[selectedLineIdx].size -= 5 : ''
}

function drawImg(id) {
    const img = document.getElementById(id)
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    draw()
}

function inputChange(type, val) {

    // gMeme.lines[0][type]  = val
    if (type === 'text') {
        gMeme.lines[gMeme.selectedLineIdx].txt = val
    } else if (type === 'color') {
        gMeme.lines[gMeme.selectedLineIdx].color = val
    }
}

function imageSelect(el) {
    const { id } = el
    gMeme.selectedImgId = id
    drawImg(gMeme.selectedImgId)
}

function handleAlignChange(val) {
    gMeme.lines[selectedLineIdx].align = val
}


function borderSelectedLine(x, y) {
    gCtx.beginPath();
    gCtx.rect(x, y, 200, 200);
    gCtx.fillStyle = 'transparent';
    gCtx.fillRect(x, y, 200, 200);
    gCtx.strokeStyle = 'red';
    gCtx.stroke();
    gCtx.closePath();
}

function addLine() {
    const inputVal = document.querySelector('.main-text-input').value

    if (!inputVal) {
        gMeme.lines.push(
            {
                txt: 'your text here',
                size: 30,
                align: 'center',
                font: 'impact',
                color: 'white',
                stroke: 'black',
                pos: {
                    x: 190,
                    y: gMeme.lines.length > 1 ? 175 : 350
                }
            }
        )
    }
}

function switchLine(){
    if(gMeme.selectedLineIdx === gMeme.lines.length-1)gMeme.selectedLineIdx = 0
    gMeme.selectedLineIdx++
    console.log(gMeme.selectedLineIdx)
}