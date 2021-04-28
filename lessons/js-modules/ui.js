let itemsUI;
let actionsUI;

function initApp(config) {
	console.log('config', config);
	actionsUI = document.createElement('div');
	actionsUI.className = 'actionsUI';

	const button = document.createElement('button');
	button.className = 'button';
	button.innerHTML = 'ADD';
	button.addEventListener('click', config.onAdd);
	actionsUI.appendChild(button);
	config.root.appendChild(actionsUI);

	itemsUI = document.createElement('div');
	itemsUI.className = 'items';
	config.root.appendChild(itemsUI);
}

function renderApp(items) {
	itemsUI.innerHTML = '';

	items.forEach(function (item) {
		const itemUI = document.createElement('div');
		itemUI.className = 'item';
		itemUI.innerHTML = item;
		itemsUI.appendChild(itemUI);
	});
}

export { initApp, renderApp };
