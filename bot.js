const Discord = require("discord.js");
const client = new Discord.Client();


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("519204253663887377");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**#Welcomee-to-T̶G̶Z̶S̶H̶O̶P̶** ❤`), 4000)        
}
});


client.login(process.env.BOT_TOKEN);
