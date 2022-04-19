global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/CGZ2GGPESt2ApSBR5ErBZa' , 'https://chat.whatsapp.com/CGZ2GGPESt2ApSBR5ErBZa' , 'https://chat.whatsapp.com/CGZ2GGPESt2ApSBR5ErBZa' , 'https://chat.whatsapp.com/CGZ2GGPESt2ApSBR5ErBZa' , 'https://chat.whatsapp.com/CGZ2GGPESt2ApSBR5ErBZa'] // No tiene utilidad 
global.channelYT = ['https://youtube.com/channel/UCP72bQrGwRbd90FHcO1hBuQ'] // No tiene utilidad
global.owner = ['56921700706' , '51982860838' , '254778959862'] // Cambia los numeros por tu o tus numeros a los cuales te comtactaran y gestionaras el Bot
global.mods = ['51982860838' , '56921700706'] // No tiene utilidad
global.prems = ['51982860838' , '56921700706'] // No tiene utilidad

// Nota: Puedes contactarme si necesitas ayuda con algo al +51982860838 (Solo temas de la instalación)
// => Solo dudas sobre la instalación, temas generales contactarme al +56921700706 (Temas serios, si vas a intervenir al chat para molesrtar seras bloqueado/a) 
// => NO ayudo a hacer Bots, ni crearlos, ni editarlos 
// - Este es el Canal de Black Panda Mods por si te interesa su canal de YouTube en https://youtube.com/channel/UCP72bQrGwRbd90FHcO1hBuQ

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  hardianto: 'http://hardianto-chan.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'DyotaMC05',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': 'rey2k21'
}

// Sticker WM
global.packname = 'Black Panda Bot🐼'
global.author = 'Black Panda'


//global.wait = '*Esperé un momento..*'


global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
