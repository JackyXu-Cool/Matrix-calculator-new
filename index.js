const electron = require("electron");
const path = require("path");
const { title } = require("process");

const {app, BrowserWindow } = electron;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 600, 
        height: 400, 
        frame: false,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
          enableRemoteModule: true,
          nodeIntegration: true,
        }
    });
    mainWindow.loadFile("./mainwindow.html");
};

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})