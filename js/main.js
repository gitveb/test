let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navbar-block');
menuBtn.addEventListener('click', function () {
	menu.classList.toggle('navbar-block-active');
	menuBtn.classList.toggle('menu-btn-active');
});