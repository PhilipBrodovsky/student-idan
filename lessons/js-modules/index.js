// import { initApp, renderApp } from './ui.js';
import * as store from './store.js';
import * as UI from './ui.js';

console.log('store', store);

const rootEl = document.getElementById('app');

const configApp = {
	root: rootEl,
	onAdd: function () {
		store.addItem('levi'); // update state
		UI.renderApp(store.items); // update UI
	},
};

UI.initApp(configApp);
UI.renderApp(store.items);
