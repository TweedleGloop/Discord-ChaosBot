module.exports = {
	name: 'makerole',
	description: 'Makes A Specified Amount Of Roles With A Specific Name',
	execute(message, args) {

	var guild = message.guild
	const roleName = args.shift().toLowerCase();
	const roleNumber = args.shift().toLowerCase();
	
	for (let step = 0; step < roleNumber; step++) {
	
	guild.roles.create({
  data: {
    name: roleName,
			}
		})
	}

	console.log ('made', roleNumber, 'role(s) called', roleName)

	},
};
