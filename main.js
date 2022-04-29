// necessary discord .js classes
const { Client, Collection, Intents, DiscordAPIError } = require('discord.js');
const Discord = require ('discord.js');
require('dotenv').config();

const client = new Client({ intents: [
    
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})

// client instance


// prefix

// const prefix = ';';

// const fs = require ('fs');
// const { execute } = require('./commands/ping');

// client.commands = new Discord.Collection();

// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require (`./commands/${file}`);

//     client.commands.set(command.name, command);
// }
// // loging in message only at startup
// client.once('ready', ()=> {
//     console.log('PenQueen has just got back online commander!');
// });

// // event

// client.on('message', message => {
//     if(!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
    
//     var cmd = client.commands.get(command);
// if (cmd !== undefined)
//   cmd.execute(message, args);
//     if(command === 'ping'){
//         client.commands.get('ping').execute(message, args);
//     } else if (command == 'youtube'){
       
//     }
// });

// Discord Token
client.login(process.env.DISCORD_TOKEN);