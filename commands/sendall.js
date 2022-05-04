module.exports = {
	name: 'sendall',
	description: 'Sends A Message In Every Channel',
	execute(message, args) {
	
	const Discord = require('discord.js');
	const client = new Discord.Client();
	const channels = message.guild.channels.cache.filter(c => c.guild && c.type === 'text');
	const messagetext= args.shift().toLowerCase();
	
	Promise.all(channels.map(c => c.send(messagetext)))
	.then(msgs => console.log(`${message} successfully sent.`))
	.catch(console.error);



	},
};