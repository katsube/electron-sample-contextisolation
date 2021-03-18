const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    nyan: async (data) => await ipcRenderer.invoke('nyan', data),
    wan:  async (data) => await ipcRenderer.invoke('wan', data)
  }
)