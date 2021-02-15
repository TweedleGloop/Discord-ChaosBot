module.exports = {
	name: 'how',
	description: 'HOW (Dont Spam On A Server With A Lot Of Channels Unless You Want To Be Rate Limited)',
	execute(message, args) {
	
	const Discord = require('discord.js');
	const client = new Discord.Client();
	const channels = message.guild.channels.cache.filter(c => c.guild && c.type === 'text');

	Promise.all(channels.map(c => c.send('OH MY GOD')))
	.then(msgs => console.log(`${msgs.length} successfully sent.`))
	.catch(console.error);

	Promise.all(channels.map(c => c.send('https://cdn.discordapp.com/attachments/792051777167163392/806306695109935155/1607627741546.gif')))
	.then(msgs => console.log(`${msgs.length} successfully sent.`))
	.catch(console.error);

	Promise.all(channels.map(c => c.send('HOW')))
	.then(msgs => console.log(`${msgs.length} successfully sent.`))
	.catch(console.error);



	},
};