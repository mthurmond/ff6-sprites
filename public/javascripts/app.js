document.addEventListener("DOMContentLoaded", function () {
    // add image to page for each character
    const characters = [
        'banon',
        'celes',
        'cyan',
        'edgar', 
        'gau',
        'gogo',
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
        'umaro',
    ]
    let html = ''
    for (let i = 0; i < characters.length; i++) {
        const character = characters[i]
        html = html + `<div class="p-4"><a href="/${character}"><img class="character-image" src="/images/${character}.jpg" alt="${character}" data-character="${character}"></a></div>`
    }
    const imageContainer = document.getElementsByClassName('write-html')[0]
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
})