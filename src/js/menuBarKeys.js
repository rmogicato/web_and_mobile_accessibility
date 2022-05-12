function keydown(event) {
    if (event.key === "Escape") {
        event.stopPropagation();
        event.preventDefault();
        closeMenu();
    }

    if (event.shiftKey && event.keyCode === 9) {
        let currentDropDownButton = event.target;
        if (currentDropDownButton.className === "dropdown-item"){
            let first_child = currentDropDownButton.parentNode.parentNode.firstElementChild.firstElementChild
            if (currentDropDownButton.textContent === first_child.textContent){
                 closeMenu();
            }
        }
        else if (currentDropDownButton.className === "nav-link dropdown-toggle"){
            closeMenu();
        }
    }
    else if (event.key === "Tab") {
        let currentDropDownButton = event.target;
        if (currentDropDownButton.className === "dropdown-item"){
            let last_child = currentDropDownButton.parentNode.parentNode.lastElementChild.lastElementChild

            if (currentDropDownButton.textContent === last_child.textContent){
                closeMenu();
            }
        }
    }
    if (event.keyCode === 32) {
        event.stopPropagation();
        event.preventDefault();
        let currentDropDownButton = event.target;
        if (currentDropDownButton.className === "dropdown-item" || currentDropDownButton.className === "nav-link dropdown-toggle" || currentDropDownButton.className === "nav-link"){
            currentDropDownButton.click()
        }
    }
}



function closeMenu(){
    let dropDownMenus = document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
        for (let j = 0; j < dropDownMenus.length; j++) {
            dropDownMenus[j].classList.remove('show');
            dropDownMenus[j].parentNode.firstElementChild.setAttribute("aria-expanded", "false");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .addEventListener('keydown', keydown, false);
    }, false);