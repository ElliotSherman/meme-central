'use strict'

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

const gImgs = [
    {
        id: 1,
        url: 'img/1.jpg',
        keywords: ['politic', 'celeb']
    },
    {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['cute', 'animal', 'puppy', 'dog', 'love']
    },
    {
        id: 3,
        url: 'img/3.jpg',
        keywords: ['cute', 'animal', 'baby']
    },
    {
        id: 4,
        url: 'img/4.jpg',
        keywords: ['funny', 'cat', 'animal']
    },
    {
        id: 5,
        url: 'img/5.jpg',
        keywords: ['child', 'motivated']
    },
    {
        id: 6,
        url: 'img/6.jpg',
        keywords: ['funny', 'movie', 'celeb', 'happy']
    },
    {
        id: 7,
        url: 'img/7.jpg',
        keywords: ['funny', 'baby', 'surprise', 'cute']
    },
    {
        id: 8,
        url: 'img/8.jpg',
        keywords: ['funny', 'flirt', 'celeb', 'movie', 'cute']
    },
    {
        id: 9,
        url: 'img/9.jpg',
        keywords: ['funny', 'baby', 'laugh']
    },
    {
        id: 10,
        url: 'img/10.jpg',
        keywords: ['politic', 'celeb', 'laugh']
    },
    {
        id: 11,
        url: 'img/11.jpg',
        keywords: ['funny', 'nba', 'sports']
    },
    {
        id: 12,
        url: 'img/12.jpg',
        keywords: ['funny', 'celeb']
    },
    {
        id: 13,
        url: 'img/13.jpg',
        keywords: ['movie', 'celeb', 'cheers', 'happy', 'great job']
    },
    {
        id: 14,
        url: 'img/14.jpg',
        keywords: ['movie', 'quote', 'matrix']
    },
    {
        id: 15,
        url: 'img/15.jpg',
        keywords: ['quote', 'celeb', 'movie']
    },
    {
        id: 16,
        url: 'img/16.jpg',
        keywords: ['funny', 'celeb', 'movie']
    },
    {
        id: 17,
        url: 'img/17.jpg',
        keywords: ['politic', 'celeb', 'excuses']
    },
    {
        id: 18,
        url: 'img/18.jpg',
        keywords: ['movie', 'excuses', 'animated', 'celeb']
    },
]
//  {id url keywords}

function renderGallery(gallery) {
    _createImages(gallery)
}

function _createImages(gallery) {
    elGalleryGrid.innerHTML = gImgs.map(img => _createImage(img)).join('')
}

function _createImage(img) {
    let { id, url, keywords } = img
    return `<div class="image-container"><img onclick="onImageSelect(this)" src="${url}" id="${id}" alt="${keywords.join(',')}"></div>`
}