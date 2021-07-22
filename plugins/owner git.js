const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎Ponnus😎═════╗*\n           \n*⚜═Ponnus═⚜*\n\n*owner vdj-akash - http://Wa.me/+918281494307*\n* *\n🔰instagram:-https://www.instagram.com/_vdj_akash_/?hl=en*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: vdj-akash*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Ponnu Owner vdj-akash═💥*\n\n*💘https://github.com/vdj-akash/ponnu*\n*     *\n💓KUNJUTTY═Owner Partheev═*\n\n*⚜https://github.com/lenscaster/KUNJUTTY*    *\n\n⚜yt link to set bot:- https://www.youtube.com/channel/UC5D5_EXD2BWRzXbMNDMtRQws*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎Ponnu😎═════╗*\n           \n*⚜═Ponnu═⚜*\n\n*owner vdj-akash - http://Wa.me/+918281494307*\n* *\n🔰https://www.instagram.com/_vdj_akash_/?hl=en*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: vdj-akash*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Ponnu Owner vdj-akash═💥*\n\n*💘https://github.com/vdj-akash/ponnu*\n*     *\n💓KUNJUTTY═Owner Partheev═*\n\n*⚜https://github.com/lenscaster/KUNJUTTY*    *\n\n⚜yt link to set bot:- https://www.youtube.com/channel/UC5D5_EXD2BWRzXbMNDMtRQw*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
