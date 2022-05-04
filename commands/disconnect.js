module.exports = {
	name: 'disconnect',
	description: 'Disconnects all users in any VC',
	execute(message, args) {


  message.guild.channels.cache.filter((c) => c.type == "voice").forEach((voicechannel) => 

	voicechannel.members.forEach((x) => {
    
		x.voice.setChannel(null);
		console.log('Removed', x.user.username, 'From Their VC')
	
		  }));
		},
	};