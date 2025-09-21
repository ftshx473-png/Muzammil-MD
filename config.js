const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MUZAMMIL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09kMDBsZTcwUEVSOVR2enIzOVRwWVljSlFIRFdESGxLWGg4Qk1WY2dVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXVmbEdpVjlQa3FUd2NsZGlKNmxIbkZkOTN3ZWNmMEw2aVZWNVFmSy9Uaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRmExemFZakIzWXFickw3Lzd6NWoxb3lzUk9DNTZLaC9wbnByVWg1VjNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkZkxMa2hQQzJuMnh5ekNORmRGSG4ycUYvOUxMeE5lQ3NtRmFNVmhDUGlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9KTHkvNWJmWitjTXpIYXJZbkJ4RkY0cExzNUUzVTZ6RXZ2ek1BZ1ZJVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllSZ0dmRGtZK2pRMGk2OEdYT2h3c3ZFeU90OGV3czd3SWkxblRCUG5qa1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xrc1RhR3lkVDBjZlJmN21yYlN0UU1mMDRuZEZBZ1kyZ1lyZDVsMXhsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTZnVXQrTVpMd0FQS1o2WmRKWm9OcTJVSWYyY1ZQNldVb0tEbmVWWmR5RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhBQ1c0QUs1YUpaYm1CTkhjSWFMWnIxdUIxOGxTMklPV0xxV1JkZ205Si9GRFQxRjdScWhnMktHV1Z4d3hUZ3BxMXFLanVZMWNzQktPS1VObGZEL2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJxOFpQOUJZbGd2N1l5K0JFdUV4NW9tS0lDai9teXZaWGNtQlZqdlAzaFBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAzNzU0NDU4M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzk0MTIwMDg3QjBDMEU0RDcwNDU3MzZBQjg5MEUzNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4NDI5MjczfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZMVE1QURKMiIsIm1lIjp7ImlkIjoiOTIzMDM3NTQ0NTgzOjE3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjc1NTE1NDc2NjY1NTg6MTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPNnQ1SllIRU5DQXZzWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJma1VRTlR5aEhJd3hENDV1b29nTlBuSzBrN3VRcHlpSEYrRG9zQmlEaVhjPSIsImFjY291bnRTaWduYXR1cmUiOiJGU0lWUmN0VmVUOGE4Kzd3WU5lOFJZdWZoTmQ5bysyaTMyM0UrRXRLS2RpaFg3eDI3bEtETGlZT3djMkhHL3dwMzVMOXcwdkZiSWpsS1ZTMDBCNElCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRmVkaWhlSngwR3RPaFJzZnRlL1FxamhnaVNESGgxcG1hb0lzSWVBb2ZjYmxJemVHTXVlZFdydTFZQ0FXM0tXbHpXRy96OEhCOGV0aWZ5bWdQdHRlZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMzc1NDQ1ODM6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDVGRURVOG9SeU1NUStPYnFLSURUNXl0Sk83a0tjb2h4Zmc2TEFZZzRsMyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4NDI5MjY4LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSE5xIn0===",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙈𝙐𝙕𝘼𝙈𝙈𝙄𝙇-𝙈𝘿 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/fqz28g.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝙈𝙐𝙕𝘼𝙈𝙈𝙄𝙇-𝙈𝘿",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𝙈𝙐𝙕𝘼𝙈𝙈𝙄𝙇-𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923037544583=",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝙈𝙐𝙕𝘼𝙈𝙈𝙄𝙇-𝙈𝘿 Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙈𝙐𝙕𝘼𝙈𝙈𝙄𝙇-𝙈𝘿*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/fqz28g.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*𝙈𝙐𝙕𝘼𝙈𝙈𝙄𝙇-𝙈𝘿*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923037544583",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
