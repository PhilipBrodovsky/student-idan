let colors = ['red', 'blue', 'green']; // array

let numbers = [10, 20, 30];

// get array value
console.log('colors length', colors.length);
console.log('first number', numbers[0]);
console.log('last number', numbers[2]);
console.log('last number by length', numbers[numbers.length - 1]);

// update array
colors[1] = 'yellow';
console.log('colors', colors);

// add to array
numbers.push(40); // add to end of array
numbers.unshift(0); // add to start of array

numbers.pop(); // remove from end of array
numbers.shift(); // remove from start of array
console.log(numbers);

let sum = 0;
// loop over array
for (let i = 0; i < numbers.length; i++) {
	console.log(i, numbers[i]);
	sum = sum + numbers[i];
}

console.log('sum', sum);

// metrix

let metrix = [
	[1, 2, 3,4],
	[4, 5, 6],
	[7, 8,],
	[10, 11, 12],
];


for (let i = 0; i < metrix.length; i++) {

   let row = metrix[i];
	for (let j = 0; j < row.length; j++) {
		console.log(row[j]);
	}
}
