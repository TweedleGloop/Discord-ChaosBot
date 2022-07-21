 // JavaScript source code
 const Discord = require('discord.js');
 const fs = require('fs');
 const { prefix, streamingvideo, status, banned} = require('./config.json');
 const { token } = require('./token.json');
 const client = new Discord.Client();
 
pri = 0
priority = 0

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot Online');
    client.user.setActivity(status, {
    type: "STREAMING",
    url: (streamingvideo)
        });
    });
 
client.on('message', message =>{

    if(globalThis.pri === 1 && message.author.id !== globalThis.priority && globalThis.priority !== 0) (message.delete())

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    for (i in banned) 
    {
        x =banned[i];
        if(message.author.id === x)  {
            console.log(`${message.author.username} tried to use the bot`)
            message.delete()
            return;
        }
    }

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
        if(command === 'alladmin'){ 
        client.commands.get('alladmin').execute(message, args);
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
        if(command === 'selfpromo'){ 
        client.commands.get('selfpromo').execute(message, args);
    }
        if(command === 'sendall'){ 
        client.commands.get('sendall').execute(message, args);
    }
        if(command === 'unbanall'){ 
        client.commands.get('unbanall').execute(message, args);
    }
        if(command === 'changename'){ 
        client.commands.get('changename').execute(message, args);
    }
    
    if(command === 'priorityon')
    { 
        client.commands.get('priorityon').execute(message, args);
        var priority = globalThis.priority
    }
    
    if(command === 'priorityoff')
    { 
        client.commands.get('priorityoff').execute(message, args);
    }

    if(command === 'dmall')
    { 
        client.commands.get('dmall').execute(message, args);
    }

});

client.login(token);