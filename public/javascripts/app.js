document.addEventListener("DOMContentLoaded", function () {
    // change image on hover
    let images = document.getElementsByClassName('character-image')
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