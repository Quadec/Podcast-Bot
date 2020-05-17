const Discord = require("discord.js");

module.exports.run = async (bot, message, arg,)  => {
    const embed =  new Discord.MessageEmbed()
    .setAuthor('Podcast Sites')
    .setDescription('Anchor, YoutTube, Spotify')
    .setColor('b3e835')
    message.channel.send({embed}).catch(e => logger.error(e));
}
module.exports.help = {
    name: "podcast"
}