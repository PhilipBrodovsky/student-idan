//

let items = ['', true, 10, false, 'das', 0, 30, [], 40];

for (let i = 0; i < items.length; i++) {
	let item = items[i];

	if (!!item == true) {
		console.log('item is trusty', item);
	}
}

let zero = 0;
let num = 10;

let str = 'my name';
let emptyStr = '';

// numbers - only 0 is falsy

if (zero) {
	console.log(zero, ' is trsuty');
} else {
	console.log(zero, ' is  falsy');
}

if (num) {
	console.log(num, 'is trsuty');
} else {
	console.log(num, 'is not falsy');
}

// string - only empty string is false
if (str) {
	console.log(str, 'is trsuty');
} else {
	console.log(str, 'is not falsy');
}

if (emptyStr) {
	console.log(emptyStr, 'is trsuty');
} else {
	console.log(emptyStr, 'is not falsy');
}

// objects allways true

let arr = [];
let obj = {};
let func = function () {};

if (arr) {
	console.log(arr, 'is trsuty');
}
if (obj) {
	console.log(obj, 'is trsuty');
}
if (func) {
	console.log(func, 'is trsuty');
}

if (undefined) {
	Î;
	console.log(undefined, 'is trsuty');
} else {
	console.log(undefined, 'is falsy');
}
if (null) {
	console.log(null, 'is trsuty');
} else {
	console.log(null, 'is falsy');
}
