const menuToggle = document.querySelector('nav .identitas.image input');
const nav = document.querySelector('nav .identitas.image .menu-items');
const line = document.querySelector('nav .identitas.image');

	menuToggle.addEventListener('click', function() {
		nav.classList.toggle('toggle');
});

	menuToggle.addEventListener('click', function() {
		line.classList.toggle('outline');
});
