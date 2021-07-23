const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎NANDUZ😎═════╗*\n           \n*⚜═NANDUZ═⚜*\n\n*owner LENSCASTER(Parthiv) - http://Wa.me/919400616230*\n* *\n🔰instagram:-https://instagram.com/lens_caster?utm_medium=copy_link*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: parthiv*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═NANDUZ Owner LENSCASTER═💥*\n\n*💘https://github.com/lenscaster/nanduz*\n*     *\n💓PONNUZ═Owner VDJ-akash═*\n\n*⚜https://github.com/vdj-akash/ponnus*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎NANDUZ😎═════╗*\n           \n*⚜═NANDUZ═⚜*\n\n*owner LENSCASTER - http://Wa.me/919400616230*\n* *\n🔰instagram:-https://instagram.com/lens_caster?utm_medium=copy_link*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: PARTHIV*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═NANDUZ Owner Ameer LENSCASTER═💥*\n\n*💘https://github.com/lenscaster/nanduz*\n*     *\n💓PONNUZ═Owner VDJ-akash═*\n\n*⚜https://github.com/vdj-akash/ponnus*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
