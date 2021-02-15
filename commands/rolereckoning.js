module.exports = {
    name: 'rolereckoning',
    description: 'Deletes Every Role After A Password Logged In Console Is Sent (Really Poorly Made)',
    execute(message, args) {


        function generate(count = 20) {
            let password = ''
            while (password.length < count) {
                password += Math.random().toString(36).substr(2)
            }
            return password.substr(0, count)
        }

        var password = generate(10)
        console.log(password)

        message.reply("What's the password?")

        message.channel.awaitMessages(m => m.author.id == message.author.id, {
            max: 1,
            time: 30000
        }).then(collected => {
            if (collected.first().content === password) {
                message.guild.roles.cache.forEach(role =>  {
                role.delete()
                })
            } else
                message.channel.send('Wrong Password');
        }).catch(() => {
            message.reply('No answer after 30 seconds');
        });

    },
};