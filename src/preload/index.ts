import { contextBridge } from 'electron'
// import { electronAPI } from '@electron-toolkit/preload'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled')
}

try {
  contextBridge.exposeInMainWorld('context', {

  })
}
catch(err) {
  console.log(err)
}
