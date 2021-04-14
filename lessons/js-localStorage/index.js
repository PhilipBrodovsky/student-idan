const textInput = document.querySelector('#textInput');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');

// JSON.parse - string(json) -> object
// JSON.stringify - object -> string(json)

let savedTodos = localStorage.getItem('todos'); //string
savedTodos = JSON.parse(savedTodos); //array

let todos = [];

if (savedTodos) {
	todos = savedTodos;
}

renderTodos(); //first

const todoManager = {
	add: function (text) {
		const todo = { text: text, id: Date.now(), completed: false };
		todos.push(todo); //state
		renderTodos(); // ui
		localStorage.setItem('todos', JSON.stringify(todos)); // local storage
	},
	removeByIndex: function (index) {
		todos.splice(index, 1); // state
		renderTodos(); // ui
		localStorage.setItem('todos', JSON.stringify(todos));
	},
};

function renderTodos() {
	console.log('todos', todos);
	list.innerHTML = '';
	todos.forEach(function (todo, index) {
		const div = document.createElement('div');
		div.addEventListener('click', function () {
			todoManager.removeByIndex(index);
		});
		div.innerHTML = todo.text;
		list.appendChild(div);
	});
}

addBtn.addEventListener('click', function () {
	if (textInput.value === '') {
		return alert('put value');
	}
	todoManager.add(textInput.value);
	textInput.value = '';
});

// localStorage value can be only string
// localStorage.setItem(key,value)
// localStorage.getItem(key) -> return value
