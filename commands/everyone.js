module.exports = {
	name: 'everyone',
	description: 'Pings Everyone',
	execute(message, args) {

	//This command is kind of unnessessary because you can give everyone admin and ping everyone instead
    message.delete({
		timeout: 10
					})
    message.channel.send('@everyone')

	console.log("Sent @everyone")

	},
};
