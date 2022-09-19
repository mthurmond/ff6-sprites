document.addEventListener("DOMContentLoaded", function () {
    // when user navigates to index page, add image for each character
    const imageContainer = document.getElementsByClassName('write-html')[0]
    if (imageContainer) {
    
        const characters = [
            'banon',
            'celes',
            'chupon',
            'cid',
            'cyan',
            'edgar',
            'gau',
            'gesthal',
            'gogo',
            'interceptor',
            'kefka',
            'leo',
            'locke',
            'madeline',
            'maduin',
            'mog',
            'relm',
            'sabin',
            'setzer',
            'shadow',
            'strago',
            'terra',
            'ultros',
            'umaro',
        ]
        let html = ''
        for (let i = 0; i < characters.length; i++) {
            const character = characters[i]
            let imageFormatClass = ''
            if (character === 'gau' || character === 'madeline' || character === 'terra') {
                imageFormatClass = 'character-image-constrained'
            } else if (character === 'interceptor') {
                imageFormatClass = 'character-image-short'
            } else {
                imageFormatClass = 'character-image-general'
            }
            html = html + `<div class="p-4 d-flex flex-column justify-content-center"><a href="/${character}"><img class="${imageFormatClass} character-image" src="/images/${character}.jpg" alt="${character}" data-character="${character}"></a></div>`
        }
        imageContainer.innerHTML = html

        // change image on hover
        const images = document.getElementsByClassName('character-image')
        for (i = 0; i < images.length; i++) {
            let image = images[i]
            let character = image.dataset.character
            image.onmouseout = function() {
                image.src = `/images/${character}.jpg`
            }
            image.onmouseover = function() {
                image.src = `/images/${character}-wave.jpg`
            }
        }
    }
})