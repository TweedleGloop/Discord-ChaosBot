module.exports = {
	name: 'changename',
	description: 'Changes The Server Name',
	execute(message, args) {
	
	//Required for the bot to change the servers name
	const Discord = require('discord.js');
	const client = new Discord.Client();
	const servername= args.shift().toLowerCase();
	
	//Changes the servers name
	message.guild.setName(servername)
	.then(updated => console.log(`Updated server name to ${servername}`))
	.catch(console.error);


	},
};