//Modmail.exe v1.2
//Core Source Code "start"

const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const guild = client.guilds.cache.get("849196909435682826");
const prefix = '& ';





client.on('message' , (message)=>{
    if(message.author.bot){
        return;
    }
    var msg = message.content;
    var A = message.author.username;
    var D = message.author.discriminator;
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(A)
    .setDescription('**Your report was registered**')
    .setFooter(A + "#" + D)
    .setTimestamp()
    // var ez= '@'+message.author.username
    if(message.channel.type == 'dm'){
        client.users.fetch(message.author.id).then(user=>user.send(embed).catch(err => console.log(err)))
    }
   
});
client.once('ready', () => {
	console.log('The bot is online !!');
    client.user.setActivity("my directmessages", type:'LISTENING'}).catch(console.error)
    
});
// client.on("message", message => {
//     let xhannel = client.channels.cache.find(channel => channel.id === '859976932782374944');
//     if (message.channel.type == "dm" && message.author.id !== '859742200049172480'){
//         xhannel.send( `<@${message.author.id}>` + ' said ' + message.content); 
//     } 
//   });




client.on("message", message => {
    let xhannel = client.channels.cache.find(channel => channel.id === '859976932782374944');
    if (message.channel.type == "dm" && message.author.id !== '859742200049172480'){
        let jambed = new Discord.MessageEmbed() 
        .setColor("RANDOM")
        .setTitle(`${message.author.username}`+"'s Moderation Concern / Server problem")
        .setDescription(message.content)
        .setTimestamp()
        .addField("The Code","https://github.com/silentkarambit7/modmail")
        .setFooter("Modmail v1.2")
        // .setImage("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
        .setThumbnail("https://cdn.discordapp.com/attachments/849632345363447829/860013627644575754/report_icon.jpg")
        xhannel.send(jambed);  
    } 
  });

  //core source code "end"


client.on('message' , (message)=>{
    if(message.content === `${prefix}help`){
        message.channel.send('what should I help you with ?')
    }
})





client.login(process.env.BOT_KEY);
 
