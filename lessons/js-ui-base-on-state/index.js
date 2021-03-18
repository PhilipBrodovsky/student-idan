const app = document.querySelector('#app');
const content = document.createElement('div');
content.className = 'content';

// state - all variables represent app
let title = 'Phliip';

// init
Input(app, title, onchange);
app.appendChild(content);
Main(content);

function onchange(event) {
	title = event.target.value; // update state
	Main(content);
}

// UI - component create html in DOM
function Main(content) {
	content.innerHTML = ''; // clear all children
	Header(content, title);
	Header(content, title, 'span');
	Header(content, title, 'h1');
	Header(content, title, 'h2');
	Header(content, title, 'p');
	Header(content, title, 'div');
	Header(content, title, 'span');
}

function Header(root, title, tag = 'h1') {
	console.log('tag', tag);
	const header = document.createElement(tag);
	header.innerHTML = 'Title: ' + title;
	root.appendChild(header);
}

function Input(root, value, onchange) {
	const input = document.createElement('input');
	input.value = value;
	input.addEventListener('input', onchange);
	root.appendChild(input);
}
