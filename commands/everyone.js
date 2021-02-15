module.exports = {
	name: 'everyone',
	description: 'Pings Everyone',
	execute(message, args) {


    message.delete({
		timeout: 10
					})
    message.channel.send('@everyone')

	console.log("who pinged me")

	},
};
