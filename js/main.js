const navbar = document.querySelector('.navTrigger');
const mainListDiv = document.querySelector('#mainListDiv');
const navBar = document.querySelector('.nav');
const myClass = document.querySelector('.your-class');

//modal
const modal = document.querySelector('.modal-frame');
const overlay = document.querySelector('.modal-overlay');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

document.addEventListener('DOMContentLoaded', () => {
    console.log("documento listo");
	
	opn();
	close.addEventListener('click', clse);
});

window.addEventListener('scroll', () => {
	const scrollPx = window.scrollY;
	if(scrollPx > 200){
		navBar.classList.add('affix');
	}else{
		navBar.classList.remove('affix')
	}
});

function mostrarMenu(){
    navbar.classList.toggle('active');
    mainListDiv.classList.toggle('show_list');
}

function opn(){
	overlay.classList.add('state-show');
	modal.classList.remove('state-leave');
	modal.classList.add('state-appear');
}

function clse(){

	overlay.classList.add('state-show');
	modal.classList.add('state-appear');
	modal.remove();
}