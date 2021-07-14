const navbar = document.querySelector('.navTrigger');
const mainListDiv = document.querySelector('#mainListDiv');
const navBar = document.querySelector('.nav');

document.addEventListener('DOMContentLoaded', () => {
    console.log("documento listo");
    navbar.addEventListener('click', mostrarMenu)

	
});

window.addEventListener('scroll', () => {
	const scrollPx = window.scrollY;
	console.log(scrollPx);
	if(scrollPx > 200){
		navBar.classList.add('affix');
		console.log('ok');
	}else{
		navBar.classList.remove('affix')
	}
});

function mostrarMenu(){
    navbar.classList.toggle('active');
    console.log('Diste click en el menu');
    mainListDiv.classList.toggle('show_list');
}

/* <script>
	$(window).scroll(function() {
		if ($(document).scrollTop() > 50) {
			$('.nav').addClass('affix');
			console.log("OK");
		} else {
			$('.nav').removeClass('affix');
		}
	});
</script> */