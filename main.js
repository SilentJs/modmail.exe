//Modmail.exe v1.2
///Modmail.exe v1.3
//Core Source Code "start"

const { greenBright } = require('chalk');
const { yellow } = require('chalk');
const Discord = require('discord.js');
const {Client , MessageEmbed } = require('discord.js');
const fs = require('fs');
const client = new Client();
const guild = client.guilds.cache.get("849196909435682826");
const prefix = '&';





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
    .setFooter(A + "#" + D + ' Modmail v1.4')
    .setTimestamp()
    // var ez= '@'+message.author.username
    if(message.channel.type == 'dm'){
        client.users.fetch(message.author.id).then(user=>user.send(embed).catch(err => console.log(err)))
    }
   
});
client.once('ready', () => {
	console.log('The bot is online !!');
    client.user.setActivity("to shri ram vibes", {type:'LISTENING'}).catch(console.error)
    
});
// client.on("message", message => {
//     let xhannel = client.channels.cache.find(channel => channel.id === '859976932782374944');
//     if (message.channel.type == "dm" && message.author.id !== '859742200049172480'){
//         xhannel.send( `<@${message.author.id}>` + ' said ' + message.content); 
//     } 
//   });




client.on("message", message => {
    if (message.channel.type == "dm" && message.author.id !== '859742200049172480'){
    let xhannel = client.channels.cache.find(channel => channel.id === '859976932782374944');	    
        let jambed = new Discord.MessageEmbed() 
        .setColor("RANDOM")
        .setTitle(`${message.author.username}`+"'s Moderation Concern / Server problem")
        .setDescription(message.content)
        .setTimestamp()
        .addField("The Code","https://github.com/silentkarambit7/modmail")
        .setFooter("Modmail v1.4")
        // .setImage("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
        .setThumbnail("https://cdn.discordapp.com/attachments/849632345363447829/860013627644575754/report_icon.jpg")
        xhannel.send(jambed);  
    } 
  });

  //core source code "end"


client.on('message' , (message)=>{
	const taggedUser = message.mentions.users.first();
    
    if(message.content === `${prefix}help`){
        message.author.send('what should I help you with ?')
    }
	if(message.content === `${prefix}abtSrivats`){
        message.channel.send('srivats is a gay dont you think ? :dog2:')
    }
	if(message.content === `${prefix}hello`){
        message.channel.send('Hello '+ `<@${message.author.id}>`)
    } 
   
    if (message.content.startsWith(prefix + 'massDm')) {
        let args = message.content.split(" ").slice(1);
        let xhannel = client.channels.cache.find(channel => channel.id === '859976932782374944');
          var deprat = args.join(' ');
          message.guild.members.cache.forEach(member => {
            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("📢ANNOCEMENT📢")
            .setDescription(deprat)
            .setFooter(`${member.user.username}` + "#" + `${member.user.discriminator}` + ' | Modmail v1.4 |')
            .setTimestamp()
            member.send(embed)
            .then(xhannel.send(greenBright(` [+] Successfull DM | ${member.user.username}#${member.user.discriminator}`)))
            .catch(e => xhannel.send(yellow(`[+] Retrying | ${member.user.username}#${member.user.discriminator}`)));
          })
        }
    
    

	let args = message.content.substring(prefix.length).split(' ');
   
      switch (args[0]){
          case'privateDm':
          if(!taggedUser){
              message.channel.send('Please specify a User to send the message')
              return;
          }
          var localMsg =args.splice(2).join(' ');
          if(!localMsg){
              message.channel.send('Please write a message to send to the user')
              return;
          }
          let Embed = new MessageEmbed()
          .setTitle("PRIVATE_MESSAGE")
          .setColor(0xFF0000)
          .setDescription(localMsg)
	      .setTimestamp()	      
          .setFooter(' | Modmail.exe v1.4 |' )
        taggedUser.send(Embed)
        message.channel.send(`The dm to ${taggedUser} was sent successfully ✅`);
          break;
      }
    

        if(message.content === `${prefix}pedophiles`){
            let embed = new MessageEmbed()
            .setTitle('Top Deadliest Pedophiles in the world')
            .addField("(1) Vansh____", "Steals girlfriends and crushes from kids")
            .addField("(2) Rahul____" ,"Tries fingering class 8 girls")
            message.channel.send(embed);
        }
    
})
client.login(process.env.BOT_KEY);
