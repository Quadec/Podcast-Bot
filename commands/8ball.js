const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let askedQuestion = message.content.split(" ").slice(1).join(" ");
    const answers =['Yes',
    'No',
    'Maybe so',
    'Hell no',
    'Of course',
    'In your dreams',
    'No, why would you think that?',
    'I am not sure how to answer',
    'Ask later, not in the mood',
    'Quit asking stupid questions',
    'I doubt it',
    "I'm sure of it",
    'Abso-Fucking-Lutely NOT',
    'No, quit asking me shit',
    'Do you have anything better to do?',
    'Go outside and get some sunlight, you need it. My answer is no',
    'Of course not',
    'Yessir',
    'No, hoe',
    'Fuck yea',
    'Go away',
    'Maybe tomorrow',
    'Probably',
    'Positive asnwer',
    'Negative answer',
    "I wouldn't doubt it",
    'To be honest with you, no',
    'To be honest with you, yes',
    'As I see it, yes',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'It is certain',
    'It is decidedly so',
    'Most likely',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Outlook good',
    'Reply hazy, try again',
    'Signs point to yes',
    'Very doubtful',
    'Without a doubt',
    'Yes',
    'Yes – definitely',
    'You may rely on it'
 
    ];

    if(!askedQuestion) {
        msg.reply("Please ask a question!");
    }
        const embed =  new Discord.MessageEmbed()
        .setAuthor("8Ball", "http://8ballsportsbar.com/wp-content/uploads/2016/02/2000px-8_ball_icon.svg_.png")
        .addField("Info", `**Your Question**: ${args}\n**My Predicion**: ${answers[~~Math.random() * answers.length]}`);
        message.channel.send({embed}).catch(e => logger.error(e));
};
module.exports.help = {
    name:  "8ball"
};