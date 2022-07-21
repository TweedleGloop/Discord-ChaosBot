module.exports = {
	name: 'dmall',
	description: 'Dms everyone on the server that the bot is able to',
	execute(message, args) {
        
        /*const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed();
        Embed.setImage(message.attachments.first().url);
        */
        var attachmentFile = message.attachments.first();
        const messageText = args.splice(1-9999).join(" ");
        
        if (message.attachments.size == 0)
            message.guild.members.cache.forEach(member => { 
                member.send(messageText)
                    .catch(e => console.error(`Couldn't DM member ${member.user.tag}`));
                    console.log ('Sent A Message To', member.user.tag,'That Says', messageText)
                });
        
        else
        message.guild.members.cache.forEach(member => { 
            member.send(`${messageText}`, {
                files: [{
                    attachment: attachmentFile,
                    name: 'file.png'
                    }]})
                .catch(e => console.error(`Couldn't DM member ${member.user.tag}`))
                console.log ('Sent A Message To', member.user.tag,'That Says', messageText)
            });

	},
};
