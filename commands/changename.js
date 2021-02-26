module.exports = {
	name: 'changename',
	description: 'Changes The Server Name',
	execute(message, args) {
	
	const Discord = require('discord.js');
	const client = new Discord.Client();
	const servername= args.shift().toLowerCase();
	
	message.guild.setName(servername)
	.then(updated => console.log(`Updated server name to ${servername}`))
	.catch(console.error);


	},
};