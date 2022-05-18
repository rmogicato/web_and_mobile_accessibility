function increaseSize(event) {
    event.preventDefault();
    event.stopPropagation();

    let style = window.getComputedStyle(document.body).getPropertyValue('font-size');
    let current_size = parseFloat(style);
    let new_size = current_size + 2;

    document.body.style.fontSize = new_size + 'px';
    localStorage.setItem("fontSize", new_size + 'px');
}

function decreaseSize(event) {
    event.preventDefault();
    event.stopPropagation();

    let style = window.getComputedStyle(document.body).getPropertyValue('font-size');
    let current_size = parseFloat(style);

    let new_size = current_size - 2;

    document.body.style.fontSize = new_size + 'px';
    localStorage.setItem("fontSize", new_size + 'px');
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('font-increase-button')
        .addEventListener('click', increaseSize, false);

    document
        .getElementById('font-decrease-button')
        .addEventListener('click', decreaseSize, false);

    }, false);