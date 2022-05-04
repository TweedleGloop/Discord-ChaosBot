module.exports = {
    name: 'rolereckoning',
    description: 'Deletes Every Role After A Password Logged In Console Is Sent (Really Poorly Made)',
    execute(message, args) {

        //Generates a password and logs it in the console
        function generate(count = 20) {
            let password = ''
            while (password.length < count) {
                password += Math.random().toString(36).substr(2)
            }
            return password.substr(0, count)
        }

        var password = generate(10)
        console.log(password)

        //Sends a message asking for the password and checks if its right
        message.reply("What's the password?")

        message.channel.awaitMessages(m => m.author.id == message.author.id, {
            max: 1,
            time: 30000
        }).then(collected => {
            if (collected.first().content === password) {
                //Deletes every role if the password is correct
                message.guild.roles.cache.forEach(role =>  {
                role.delete()
                })
            } else
                //Sends a message if the password is wrong
                message.channel.send('Wrong Password');
        }).catch(() => {
            //Resets after 30 seconds
            message.reply('No answer after 30 seconds');
        });

    },
};