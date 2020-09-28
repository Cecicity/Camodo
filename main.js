

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'x';

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Initiating Camodo...');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'ping')
    {
        client.commands.get('ping').execute(message, args);
    } else if(command === 'glitch')
        client.commands.get('glitch').execute(message, args);
    else if(command === 'gay')
        client.commands.get('gay').execute(message, args);
    else if(command === 'nano')
        client.commands.get('nano').execute(message, args);
    else if(command === 'kick')
        client.commands.get('kick').execute(message, args)
    });




    

client.login('NzMzMTAyNTkzMTUyMTIyOTY3.Xw-Q_g.N4lw8sEc9sIfEw6TnuibTmEh4Hk')
