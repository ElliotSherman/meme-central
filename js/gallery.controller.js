'use strict'


function onImageSelect(el) {
    const { id } = el
    handleActive()
    document.querySelector('.main-gallery').classList.add('hide')
    document.querySelector('.main-editor').classList.remove('hide')
    document.body.classList.toggle('menu-opened');
    imageSelect(el)
}
