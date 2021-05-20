const customTitlebar = require('custom-electron-titlebar');

window.addEventListener('DOMContentLoaded', () => {
	new customTitlebar.Titlebar({
		backgroundColor: customTitlebar.Color.fromHex('#313233'),
		minimizable: true,
		maximizable: false,
		shadow: true,
		menu: null
	});
});