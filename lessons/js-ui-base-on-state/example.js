const app = document.querySelector('#app');
const contactList = document.createElement('div');
contactList.className = 'contactList';

// state
const contacts = [{ name: 'john' }, { name: 'Phliip' }, { name: 'idan' }];
let val = '';

Input(app, function (event) {
	val = event.target.value; // update state
	drawContacts(contactList, contacts); // update ui
});
app.appendChild(contactList);

//init
drawContacts(contactList, contacts);

// UI Components
function Input(root, onchange) {
	const input = document.createElement('input');
	input.addEventListener('input', onchange);
	root.appendChild(input);
}

function drawContacts(root, contacts) {
	root.innerHTML = '';
	let filtered = contacts.filter(function (contact) {
		return contact.name.includes(val);
	});
	filtered.forEach(function (contact, i) {
		const div = document.createElement('div');
		div.innerHTML = contact.name;
		const delBtn = document.createElement('button');
		delBtn.innerHTML = 'delete';
		delBtn.addEventListener('click', function () {
			contacts.splice(i, 1); //delete from array (update state)
			drawContacts(contactList, contacts); // update ui
		});
		div.appendChild(delBtn);
		root.appendChild(div);
	});
}
