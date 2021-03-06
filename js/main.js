'use strict';
// Variables
let page = document.querySelector('.menu_page');
let openMenu = page.querySelector('.menu_open');
let closeMenu = page.querySelector('.close_button');

// Functions open-close menu navitation
function openNavMenu() {
	page.classList.add('page--menu-visible');
};

function closeNavMenu() {
	page.classList.remove('page--menu-visible');
};

openMenu.addEventListener('click', openNavMenu);
closeMenu.addEventListener('click', closeNavMenu);

//close menu click
let menuElement= document.querySelector('.menu');
menuElement.addEventListener('click', closeNavMenu);

// scroll Menú
const itemList = ['about', 'studies', 'projects', 'skills', 'contact', 'top_page'];

itemList.forEach( selector => {
	document.querySelectorAll( `.${selector}` ).forEach( element => element.addEventListener('click', e => {
		e.preventDefault();
		document.getElementById(selector).scrollIntoView({
			behavior: 'smooth',
			block:    'start',
		});
	}));
});
