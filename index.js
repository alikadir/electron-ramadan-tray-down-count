const {app, Menu, Tray,nativeImage,BrowserWindow} = require('electron');

app.on('ready', () => {
 app.dock.hide();

  this.tray = new Tray(nativeImage.createEmpty());
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Change Location', type: 'normal', click:function(){changeLocationOpen()}}   
  ]);
  this.tray.setContextMenu(contextMenu)
 
  this.count = 1000;

  this.tray.setTitle('Happy Ramadan');
  setInterval(() => {
    downCount();
  }, 1000);

});

let downCount = ()=> {
  this.count = this.count - 1;
  this.tray.setTitle(this.count.toString());
  debugger
}

let changeLocationOpen = () => {
 
  let win = new BrowserWindow({width: 500, height: 300})
  win.loadURL(`file://${__dirname}/choose-location.html`)

}