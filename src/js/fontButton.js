function increaseSize(event) {
    event.preventDefault();
    event.stopPropagation();

    let style = window.getComputedStyle(document.body).getPropertyValue('font-size');
    let current_size = parseFloat(style);
    let new_size = current_size + 2;

    $('body').css('font-size', new_size);
}

function decreaseSize(event) {
    event.preventDefault();
    event.stopPropagation();

    let style = window.getComputedStyle(document.body).getPropertyValue('font-size');
    let current_size = parseFloat(style);

    let new_size = current_size - 2;

    let  fontSize = parseInt(window.getComputedStyle(document.body, null).fontSize, 0);
    console.log(fontSize);
    document.body.style.fontSize = new_size + 'px';
}


document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('font-increase-button')
        .addEventListener('click', increaseSize, false);

    document
        .getElementById('font-decrease-button')
        .addEventListener('click', decreaseSize, false);

    }, false);