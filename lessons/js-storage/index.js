//

const app = document.querySelector('#app');
const updateTitle = document.querySelector('#updateTitle');

let title = 'Title';
updateTitle.value = title;

// init
Title();

updateTitle.addEventListener('input', function (event) {
	title = event.target.value; // update state
	Title(); // update ui
});

function Title() {
	app.innerHTML = '';
	const header = document.createElement('h1');
	header.innerHTML = title;
	app.appendChild(header);
}
