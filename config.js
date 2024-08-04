const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_50_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExLFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgMTg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MixcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVkcVRIVkVucm1YNmtlaHV6SjF4bWY2ejdzclBnb1NRZ1NuRWN4ak5rS3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTM2ODIyMjc5NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJCODMyNUM5MjYzOEEzNzQxMDExMDc3NzZFRTdEMDAyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc2ODYwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjEzNjgyMjI3OTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MjY2MEZCQUI4OTg4RDgyOURFQTlCMUFCREYwN0NGRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3Njg2MDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaFRVbTZFQ2dTb1dQUXpBWHRwQjBRd1wiLFxuICBcInBob25lSWRcIjogXCJkNDg0ZjU4Zi0xMjhlLTRhZmEtOWFkZC0zODZhYzBkMWFhODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMTcwLFxuICAgICAgMTkzLFxuICAgICAgODIsXG4gICAgICAxNjUsXG4gICAgICAxODgsXG4gICAgICAyMTAsXG4gICAgICA2OSxcbiAgICAgIDY0LFxuICAgICAgNDIsXG4gICAgICAyMjMsXG4gICAgICAzNyxcbiAgICAgIDE0NCxcbiAgICAgIDE5NCxcbiAgICAgIDIzMyxcbiAgICAgIDEwLFxuICAgICAgMTY4LFxuICAgICAgNTEsXG4gICAgICAyMzEsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMjE1LFxuICAgICAgNDAsXG4gICAgICAxODksXG4gICAgICA4NyxcbiAgICAgIDQxLFxuICAgICAgOTMsXG4gICAgICAxODgsXG4gICAgICAxNzcsXG4gICAgICAyMzcsXG4gICAgICAyMjcsXG4gICAgICAxNzMsXG4gICAgICAxOTksXG4gICAgICAxOTQsXG4gICAgICAyMixcbiAgICAgIDczLFxuICAgICAgMjQ5LFxuICAgICAgMTE0LFxuICAgICAgMTQ0LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZHVEVRQlJQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxMzY4MjIyNzk3NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSGlcIixcbiAgICBcImxpZFwiOiBcIjI3NjAwMzY5MTc1MzUwMzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Byb2d0Y0NFTk81dmJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT2wwSkxZdDJTc1NVdWRJd2tEalZNdVpLL3hBTjlNa0xzbjVQeS9aT1NCbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtMzIyY2Z2TGJWNUtvQSs3OVlNbEd6MjYxRnB6Uzk0RWpQWnFCZUh3OUpnQmhXQXY5SHY2UUh5OWtCY3R2OFFFdVdtdlRSb3oyV2k1MEdNYnpoSUNDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtNUJPS0dEdUMwKy9rejA5dDh0VnBlaEJxMkwzWnRNNmRmVXNrRmJ3d3E2S1phKzhuaHBIZmt6d01NT0JuME8vWEJOd0NySno1dXlUYnhUWTJuTDZBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxMzY4MjIyNzk3NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc2ODU5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9VbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1VsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOC92eGt2TVk3N3FwbVFvRnl0U29nekNrZTJvclhkbzQ4UGdsTTcxL09RUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTkzNjkzMzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjc2ODYwMjA0NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
