const clickBtn = document.querySelector('#click');

let name = 'Philip';

function onClick(data) {
	console.log('onClick', data); // should run on click only
}

clickBtn.addEventListener('click', function (event) {
	onClick(name);
});

