function keydown(event) {

    if (event.key === "Escape") {
        event.stopPropagation();
        event.preventDefault();
        closeMenu();
    }

    if (event.key === "Tab") {
        let currentDropDownButton = event.target;
        if (currentDropDownButton.className === "dropdown-item"){
            let last_child = currentDropDownButton.parentNode.parentNode.lastElementChild.lastElementChild
            if (currentDropDownButton.textContent === last_child.textContent){
                closeMenu();
            }
        }
    }

    if (event.keyCode === 32) {
        // simulate key strokes
        let e = jQuery.Event("keydown");
        e.which = 13
        e.keyCode = 13
        $(event.target).trigger(e)
        console.log(e)
    }
}

function closeMenu(){
    var dropDownMenus = document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
        for (let j = 0; j < dropDownMenus.length; j++) {
            dropDownMenus[j].classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .addEventListener('keydown', keydown, false);
    }, false);