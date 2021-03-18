const app = document.querySelector('#app');
const testBtn = document.querySelector('#test');


// ADD CLASS NAME -  HARD WAY
// let prev = testBtn.className
// prev  = prev + ' idan'
// testBtn.className = prev;

// console.log(testBtn);


const btn1 = Button({ text: 'smail', size: 'small' }); // create
const btn2 = Button({ text: 'madium', size: 'medium' }); // send
const btn3 = Button({ text: 'large', size: 'large' }); // send
app.appendChild(btn1);
app.appendChild(btn2);
app.appendChild(btn3);

// options
// options.text - button text
// options.color - button color
// options.size - button size small | medium | large

function Button(options = {}) {
	console.log(options);
	let button = document.createElement('button');
	button.innerText = options.text;
	button.classList.add(options.size);
	return button;
}
