const navbar = document.querySelector('.navTrigger');
const mainListDiv = document.querySelector('#mainListDiv');
const navBar = document.querySelector('.nav');

document.addEventListener('DOMContentLoaded', () => {
    console.log("documento listo");
    navbar.addEventListener('click', mostrarMenu)

	
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