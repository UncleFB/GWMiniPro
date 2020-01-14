const basePath = 'https://api.greenwall.mobi'; 
const wsBasePath = 'wss://api.greenwall.mobi'; 
// const basePath = 'http://10.112.162.183'; 
// const wsBasePath = 'ws://10.112.162.183';  

const urlList = {
  getUserByUsername: basePath + '/getUserByUsername',
  addDevice: basePath + '/addDevice',
  delDevice: basePath + '/delDevice',
  send: basePath + '/send',
  wsPath: wsBasePath + '/websocket'
}
module.exports = urlList;