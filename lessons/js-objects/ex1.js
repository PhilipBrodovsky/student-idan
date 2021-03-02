// ask from user name - string
// ask from user age -  number
// ask if its admin - true/false

let users = [];

let user = {};
let user2 = {};

function createUser(user) {
	let name = prompt('enter name');

	let age = prompt('enter age');

	let admin = confirm('are you admin? (true or false)'); //return boolean value

	if (name != null) user.name = name;
	else user.name = '';

	age = Number(age);
	if (isNaN(age) == false) user.age = age;
	else user.age = 0;

	if (admin) user.admin = admin;

	console.log(user);

	return user;
}

//user = createUser(user);
createUser(user);
createUser(user2);

users.push(user);

users.push(user2);

console.log('users', users);
