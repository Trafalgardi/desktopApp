const remote = require('electron').remote
const main = remote.require('./main.js')

function closeWin() {
	var win = remote.getCurrentWindow()
	win.close()
}

setTimeout(closeWin, 3000);
