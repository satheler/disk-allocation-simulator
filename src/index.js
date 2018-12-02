const { app, BrowserWindow } = require('electron')
// require('electron-reload')(__dirname)

let win

function createWindow() {
	win = new BrowserWindow({ width: 1024, height: 1200 })
	win.maximize()
	win.setMenu(null)
	win.loadFile('./src/template/index.html')
	// win.webContents.openDevTools()
	win.on('closed', () => {
		win = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})
