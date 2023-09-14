import { BrowserWindow, Menu,IpcMainEvent, ipcMain,IgnoreMouseEventsOptions,MenuItemConstructorOptions,dialog} from "electron";

ipcMain.on('setIgnoreMouseEvents',(event:IpcMainEvent,ignore: boolean, options?: IgnoreMouseEventsOptions)=>{
   BrowserWindow.fromWebContents(event.sender)!.setIgnoreMouseEvents(ignore, options);
})
ipcMain.on('quit',()=>{
    const template = [
        {
            label: '关于',
            // role:'about',
            click:()=>{
                dialog.showMessageBox({
                    type:'info',
                    title:'关于',
                    message:'软件信息',
                    detail:'桌面时钟@20230914_By_xiaoxie_@qq942256453'
                })
            }
        },
        {
            label: '帮助',
            role:'help',
            click:()=>{
                dialog.showMessageBox({
                    type:'info',
                    title:'帮助',
                    message:'操作提示',
                    detail:`(1)可按住底部栏或皇冠拖动窗口;
(2)倒计时模式时双击可重置倒计时。`
                })
            }
        },
        {
            label: '退出',
            role:'quit'
        }
    ] as MenuItemConstructorOptions[]
    const menu = Menu.buildFromTemplate(template)
    menu.popup()
})