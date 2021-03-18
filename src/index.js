const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow (file) {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(`public/${file}`)
}

app.whenReady().then( ()=>{
  createWindow('index.html')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

//----------------------------------------
// IPC通信
//----------------------------------------
// 語尾に "にゃん" を付けて返す
ipcMain.handle('nyan', (event, data) => {
  return(`${data}にゃん`)
})

// 語尾に "わん" を付けて返す
ipcMain.handle('wan', (event, data) => {
  return(`${data}わん`)
})
