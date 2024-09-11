 require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');

const client = new Client({ 
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
    
 });

//to bring bot online and ready to ready messages
client.on('ready', (c) => {
    console.log(`${c.user.tag} has logged in`);
});
// message interetion
client.on('messageCreate', (message) => {
    if(message.author.bot) {
        return;
    }
    if(message.content === 'hello'){
        message.reply('hello');
    }
});

client.login(process.env.BRAINTESTER_BOT_TOKEN);
