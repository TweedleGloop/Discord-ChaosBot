 // JavaScript source code
 const Discord = require('discord.js');
 const { prefix, streamingvideo } = require('./config.json');
 const { token } = require('./token.json');
 const client = new Discord.Client();


const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot Online');
    client.user.setActivity("Causing Chaos", {
    type: "STREAMING",
    url: (streamingvideo)
        });
    });
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
        if(command === 'randomping'){ 
        client.commands.get('randomping').execute(message, args);
    }
        if(command === 'reckoning'){ 
        client.commands.get('reckoning').execute(message, args);
    } 
        if(command === 'everyone'){ 
        client.commands.get('everyone').execute(message, args);
    } 
        if(command === '2b2t'){ 
        client.commands.get('2b2t').execute(message, args);
    }
        if(command === 'how'){ 
        client.commands.get('how').execute(message, args);
    }
        if(command === 'makechannel'){ 
        client.commands.get('makechannel').execute(message, args);
    }
        if(command === 'makerole'){ 
        client.commands.get('makerole').execute(message, args);
    }
        if(command === 'rolereckoning'){ 
        client.commands.get('rolereckoning').execute(message, args);
    }
        if(command === 'disconnect'){ 
        client.commands.get('disconnect').execute(message, args);
    }



});

client.login(token);