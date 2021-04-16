const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow } = electron;

let mainWindow;

app.on("ready", function() {
    mainWindow = new BrowserWindow({ width: 600, height: 400, frame: false });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "mainwindow.html"),
        protocol: "file:",
        slashes: true
    }));
});