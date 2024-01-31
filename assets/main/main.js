
// Change Slides each 4s
let myIndex = 0;
let slides = document.getElementsByClassName('slides');

// Function handle change slider
function changeSlides() {
    // hidden slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    myIndex++;

    if (myIndex > slides.length) {
        myIndex = 1;
    }
    // show slide begin : 0;
    slides[myIndex - 1].style.display = 'block';

    setTimeout(changeSlides, 4000);
}

// Start logic
changeSlides();


// Modal tickets
const modal = document.querySelector('.js-modal');
const buyBtns = document.querySelectorAll('.js-btn-buy-tickets');
const closeBtn = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

// Functions handle logic modal tickets
function showModalTicket() {
    for (const buyBtn of buyBtns) {
        buyBtn.onclick = function () {
            modal.classList.add('open-modal');
        }
    }
}

function hiddenModalTicket() {
    closeBtn.onclick = function () {
        if (closeBtn) {
            if (modal.classList.contains('open-modal')) {
                modal.classList.remove('open-modal');
            }
        }
    }
    // when click overlay modal
    modal.onclick = function() {
        if (modal.classList.contains('open-modal')) {
            modal.classList.remove('open-modal');
        }
    }

    // Block behavior bubble
    modalContainer.onclick = function (event) {
        event.stopPropagation();
    }

    document.onkeydown = function (events) {
        if (events.code === 'Escape') {
            if (modal.classList.contains('open-modal')) {
                modal.classList.remove('open-modal');
            }
        }
    }
    
}

// Start logic
showModalTicket();
hiddenModalTicket();


// Menu mobile

const header = document.getElementById('header');
const menuBtn = document.querySelector('.js-menu-btn-mobile');
const headerHeight = header.clientHeight;
const menuItems = document.querySelectorAll('#nav li a');

function handleOpenMenu() {
    const isClose = header.clientHeight === headerHeight;

    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

menuBtn.addEventListener('click', handleOpenMenu);


// Hanle when click menu items/
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = function(e) {
        const parrentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

        if (parrentMenu) {
            e.preventDefault();
        } else {
            header.style.height = null;
        }

    }
}

// const moreElement = document.querySelector('#nav li .more');
// const subnav = document.querySelector('#header .subnav');

// function showSubNav() {
//     if (!subnav.classList.contains('open-subnav')) {
//         subnav.classList.add('open-subnav');
//     } else {
//         subnav.classList.remove('open-subnav');
//     }
// }

// moreElement.addEventListener('click', showSubNav);