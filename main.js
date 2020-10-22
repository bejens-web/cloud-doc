const {app, BrowserWindow, Menu} = require('electron');
const isDev = require("electron-is-dev");
let mainWindow = null;



const createWindow = async () => {
    //隐藏默认导航
    Menu.setApplicationMenu(null);
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 680,
        minWidth:1024,
        minHeight:680,
        frame: true, //window自带的关闭最小化等
        resizable: true, //改变主窗口尺寸
        webPreferences: {
            nodeIntegration: true
        }
    });
    let urlLocation;
    if (isDev) {
        urlLocation = 'http://localhost:8080/';
    } else {
        urlLocation = `file://${path.resolve(__dirname, '..', 'dist')}/index.html`;
    }

    await mainWindow.loadURL(urlLocation);


    mainWindow.on('closed', () => {
        mainWindow = null;
    });


};

app.on('ready', createWindow);
