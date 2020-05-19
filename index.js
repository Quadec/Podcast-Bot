const Discord = require("discord.js")
const bot = new Discord.Client();
const token = 'NzA3NTIxMTM0NTk3NTA1MDI1.XsB8Qg.yMi7WrMgeLhDGQuMHlFpk7dExJU'
const prefix = '.';
const fs = require('fs');
const readline = require('readline');

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) throw(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0) {
        console.log("No commands were found! Please make some!");
        return;
}
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} command has loaded`);
        bot.commands.set(props.help.name, props);
    });
 });

bot.on("ready", async() => {
    console.log(`${bot.user.username} has logged in`)
    bot.user.setActivity('The Science Kids Podcast',{type: 'LISTENING'}).catch(console.error);
});
bot.on("message",  async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;
    var messageArray = message.content.split(" ");
    var cmd = messageArray[0].toLowerCase();
    var args = messageArray.slice(1);
    var commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
});
bot.login(process.env.token);