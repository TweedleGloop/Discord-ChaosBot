module.exports = {
	name: 'randomping',
	description: 'Ghost Pings A Random Person',
	execute(message, args) {
                     message.delete({
                         timeout: 1
                     })
                        const userList = message.guild.members.cache.array();
                        var randomNumber = Math.floor(Math.random() * userList.length)
                        var pingPerson = userList[randomNumber]
                     message.channel.send("<@" + pingPerson.user.id + ">")
                         .then(msg => {
                             msg.delete({
                                 timeout: 1
                             })
               })
	},
};