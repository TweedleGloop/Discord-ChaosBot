module.exports = {
	name: 'priorityoff',
	description: 'Toggles Off Priority',
	execute(message, args) {

        if(globalThis.priority == message.author.id)
        pri = 0
		priority = 0
        console.log(`Turned Off Priority For ${message.author.username}`)
        
		/*if (globalThis.priority !== message.author.id)
        console.log(`${message.author.username} Tried To Disable Priority`)*/

	},
};
