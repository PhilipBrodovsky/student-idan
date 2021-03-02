//

let items = [10, 'philip', true];

let user = { name: 'philip', age: 10, isAdmin: true };

console.log('age from array', items[0]);
console.log('age from object', user.age);

console.log('name from array', items[1]);
console.log('name from object .user', user.name);
console.log('name from object [name]', user['name']);

console.log('items', items);
console.log('user', user);

console.log(); //console object, log - method

user.name = 'admin';

user.id = 123;

console.log('id', user);

console.log('keys', Object.keys(user)); // array all keys form object
console.log('values', Object.values(user)); // all keys form object

//

// let value = prompt('enter key');
// console.log('value', user[value]);

// if (value === 'name') {
// 	console.log(user.name);
// } else if (value === 'id') {
// 	console.log(user.id);
// }

let keys = Object.keys(user);

for (let i = 0; i < keys.length; i++) {
	let key = keys[i];
	let value = user[key];
	console.log(key, ':', value);
}


