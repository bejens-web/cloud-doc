const {app, BrowserWindow} = require('electron');

const isDev = require("electron-is-dev");

let mainWindow = null;

const createWindow = async () => {

    mainWindow = new BrowserWindow({
        width: 1024,
        height: 680,
        webPreferences: {
            nodeIntegration: true
        }
    });

    let urlLocation = isDev ? 'http://localhost:3000' : 'dummyUrl';
    await mainWindow.loadURL(urlLocation);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};


app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow().then(() => {
        });
    }
});