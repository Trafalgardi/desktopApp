// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({minWidth: 500, minHeight: 600, show: false, frame: false, center: true})

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.once('ready-to-show', () => {
  	mainWindow.show()
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
exports.openWindow = (filename) => {
  let win = new BrowserWindow({minWidth: 500, minHeight: 600, frame: false, center: true, resizable: false, alwaysOnTop: true})
  win.loadURL(`file://${__dirname}/`+ filename + `.html`)
}

