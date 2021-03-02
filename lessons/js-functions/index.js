//

console.log('functions');

// declare function - put in memory
let x = 10;

// value is function parameter
function print(value) {
	console.log('print', value);

	// default return
	//return undefined;
}

//[x:10,print:function{...}] - memory

// call function
let result = print(10); // () - call function (print)
console.log('result', result); // undefined

print(20); // () - call function (print)
