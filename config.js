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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_31_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDksXG4gICAgICAgIDg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDczLFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY1LFxuICAgICAgICA5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV0pTT3JLQTRmVnpuNjlzNjFNUjMxSWlXY1BJNjZUdmtVTmZnOURIdnEyUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNzQ4NzM2ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJDRTM1QTUwNkJGMkM5OEIzODI4RTEwRERCMEYxRkRCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTg5OTkxMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM3NDg3MzY4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDE3RjNFQjU0MTM2NzEyNEQyM0QyNDI5RDVCRDQ4NTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODk5OTEyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIng0WWduUS1FUzZPVzk1RWhZdTNPOGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmQ0MTExM2MtZDk2Ny00NTFhLWFmNzEtODBlMTkwNjQ0ZGVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMTkzLFxuICAgICAgMjAzLFxuICAgICAgMTY0LFxuICAgICAgMTkyLFxuICAgICAgOTAsXG4gICAgICA0NixcbiAgICAgIDU5LFxuICAgICAgMzgsXG4gICAgICA5MSxcbiAgICAgIDMxLFxuICAgICAgMjUxLFxuICAgICAgMjUwLFxuICAgICAgMjMxLFxuICAgICAgMTc2LFxuICAgICAgMTM3LFxuICAgICAgMTAyLFxuICAgICAgMTkzLFxuICAgICAgMTA4LFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAyMjcsXG4gICAgICA0OCxcbiAgICAgIDIzMSxcbiAgICAgIDY3LFxuICAgICAgMTQ1LFxuICAgICAgMTU3LFxuICAgICAgMTA2LFxuICAgICAgNjUsXG4gICAgICAyMTIsXG4gICAgICAxNzYsXG4gICAgICAyMjksXG4gICAgICAyMzIsXG4gICAgICAyNSxcbiAgICAgIDI0MixcbiAgICAgIDI0MixcbiAgICAgIDE4OSxcbiAgICAgIDI1NCxcbiAgICAgIDE5MSxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyWEdES1Y0SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzc0ODczNjg1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2OTcyODgxMTYzODk2OTozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk5hdGlvbmFsaXN0LfCfmqlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdWN2WTRGRUlHM2lMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlYrMHRHR3pob2I4QXFLU1lVZHc2cVNoeXVzYXhRcVFET3hVYnlXTE93RmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK2kyMHV5TjNpbXF2ZFdlS2k5RS9KWWF1NUhEQ0lHdTJCUVRRY1JTYVN1ZDdtK2ZPSk0vUUY2UExCL2xOdlpSQVdoU3FieHVJdjRDZzdMY204eXppQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieFhUQkR5VEszYTdPQzFxQWo1WnZ1OVhLY2F3U1NzWkxaV3oyOWJPdWVkSkNQeUdzZi9meWQ5VWQwTUZiS2NyMVB2N2V1R3NzcjcvM2RIdGpJaHVIaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzc0ODczNjg1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTg5OTkwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZDUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkNQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiczYxSDczNXZadWoyZlNDdFcxSzlRempWNGlIcTh0Y3JJOHRYL0U0citxYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcyNTQwNDkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4OTk5MTAwMDhcIn0iCn0="  // PUT your SESSION_ID 


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
