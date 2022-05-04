module.exports = {
	name: 'makechannel',
	description: 'Makes Multiple Channels',
	execute(message, args) {

	const channelName = args.shift().toLowerCase();
	const channelNumber = args.shift().toLowerCase();
	
	for (let step = 0; step < channelNumber; step++) {
		message.guild.channels.create( channelName ,'text')
		}

	console.log ('made', channelNumber, 'channel(s) called', channelName)

	},
};
