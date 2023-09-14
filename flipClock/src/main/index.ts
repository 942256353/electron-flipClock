import { app, shell, BrowserWindow  } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import './ipc'
import createTray from './tray'

// function registerLocalResourceProtocol() {
//   protocol.registerFileProtocol('local-resource', (request, callback) => {
//     const url = request.url.replace(/^local-resource:\/\//, '')
//     // Decode URL to prevent errors when loading filenames with UTF-8 chars or chars like "#"
//     const decodedUrl = decodeURI(url) // Needed in case URL contains spaces
//     try {
//       return callback(decodedUrl)
//     }
//     catch (error) {
//       console.error('ERROR: registerLocalResourceProtocol: Could not get file path:', error)
//     }
//   })
// }

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 330,
    height: 600,
    show: false,
    x:900,
    y:100,
    frame: false,
    hasShadow:false,
    maximizable:false,
    resizable: false,
    skipTaskbar:true,// 设置窗口初始时不显示在任务栏
    transparent:true,
    alwaysOnTop:true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
  mainWindow.setIgnoreMouseEvents(true,{forward:true})
   if(is.dev){
    mainWindow.webContents.openDevTools()
  }
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })
  // registerLocalResourceProtocol();
  createWindow()
  //托盘图标,得在应用启动后创建
  createTray()
  //隐藏dock图标
  process.platform=='darwin'&&app.dock.hide()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
