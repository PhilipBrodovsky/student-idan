//

const clickMeBtn = document.querySelector('#clickMeBtn');
const nameInput = document.querySelector('#name');
const form = document.querySelector('#form');

function onClick() {
	console.log('clicked', nameInput.value);
}

clickMeBtn.addEventListener('click', onClick);

nameInput.addEventListener('input', function () {
	console.log('input', nameInput.value);
});

form.addEventListener('submit', function (event) {
	event.preventDefault(); // disable refresh page on submit
	console.log('submit', nameInput.value);
});
