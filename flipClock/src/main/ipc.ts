import { BrowserWindow, IpcMainEvent, ipcMain,IgnoreMouseEventsOptions } from "electron";

ipcMain.on('setIgnoreMouseEvents',(event:IpcMainEvent,ignore: boolean, options?: IgnoreMouseEventsOptions)=>{
   BrowserWindow.fromWebContents(event.sender).setIgnoreMouseEvents(ignore, options);
})