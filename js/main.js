"use strict"
const burger = document.querySelector('.menu-burger');



burger.addEventListener('click', () => { 
	burger.classList.toggle('active');
});