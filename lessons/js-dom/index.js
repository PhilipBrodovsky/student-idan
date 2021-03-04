// callback if function as parameter
//addEventListener((eventName: string), (callback: function));

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
	console.log('btn clicked');
});


// SHALOM IDAN

const div = document.getElementById('div');
div.addEventListener('click', onClick);
// send onClick to addEventListener ,
//after click browser run onCLick -  function onClick()

function onClick() {
	console.log('div onClick');
}
