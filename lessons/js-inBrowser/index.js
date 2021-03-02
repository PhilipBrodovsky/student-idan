//

// document - manipulate html(DOM) - READ CREATE UPDATE DELETE
console.dir(document);

// getElementById - find element(tag) with specific id
const sidebar = document.getElementById('sidebar');

console.dir(sidebar);

// update element style
sidebar.style.backgroundColor = 'red'; // background-olor
sidebar.style.color = 'white';
sidebar.style.marginTop = '8px';

// add class name
console.log('className:', sidebar.className);
sidebar.classList.add('top'); // add new class name
sidebar.classList.remove('sidebar');

for (let i = 0; i < 10; i++) {
	// createElement - create new DOMElement
	let div = document.createElement('div');
	div.innerText = 'text ' + i;

	// appendChild - append div to sidebar as child
	sidebar.appendChild(div);
}

// task

// dog cat fish
const animals = ['dog', 'cat', 'fish', 'tuki', 'kelev'];

const ul = document.getElementById('list');

for (let i = 0; i < animals.length; i++) {
	const li = document.createElement('li');
	li.innerText = animals[i];
	ul.appendChild(li);
}

// task 2

const user = {
	name: 'Phlip',
	age: 28,
	city: 'Petah Tikva',
};

const infoDiv = document.getElementById('info');

const keys = Object.keys(user);
console.log('keys', keys);

for (let i = 0; i < keys.length; i++) {
	let key = keys[i];
	let value = user[key];
	console.log(key, value);

	const div = document.createElement('div');
	div.innerText = key + ': ' + value;

	infoDiv.appendChild(div);
}

let name = 'philip';

const hello1 = 'hello ' + name;
const hello2 = `hello ${name}`;

console.log(hello1);
console.log(hello2);
