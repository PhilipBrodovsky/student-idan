// get array average
let items = [10, 30, 40, 90, 50];
let sum = 0;
let avg = 0;

for (let i = 0; i < items.length; i++) {
	sum = sum + items[i];
}
avg = sum / items.length;

console.log('avg:', avg);

// loop over array reverse
for (let i = items.length - 1; i >= 0; i--) {
	console.log(items[i]);
}

// find smallest number
let min = items[0];
for (let i = 1; i < items.length; i++) {
	if (min > items[i]) {
		min = items[i];
	}
}
console.log('min', min);

// find all number greater than 30 (filter)
let array_above_30 = [];
for (let i = 0; i < items.length; i++) {
	if (items[i] > 30) {
		array_above_30.push(items[i]);
	}
}

console.log('array_above_30', array_above_30, items);

let metrix = [
	[10, 20, 30],
	[40, 50, 60],
	[70, 80, 90],
];

// print i j of number 60

for (let i = 0; i < metrix.length; i++) {
	for (let j = 0; j < metrix[i].length; j++) {
		if (metrix[i][j] == 60) {
			console.log(i, j);
			break;
		}
	}
}
