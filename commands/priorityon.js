module.exports = {
	name: 'priorityon',
	description: 'Deletes Any Message Not Sent By Whoever Sent this message',
	execute(message, args) {

	if(globalThis.priority === 0)
    priority = message.author.id 
    pri = 1
	console.log(`Turned On Priority For ${message.author.username}`)
    console.log(globalThis.priority)
    console.log(pri)
	return;

	},
	
};
