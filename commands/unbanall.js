module.exports = {
    name: 'unbanall',
    description: 'Unbans All Members Banned ',
    execute(message, args) {

        const member = message.member;

        message.guild.fetchBans().then(bans => {
            bans.forEach(banInfo => {
                message.guild.members.unban(banInfo.user);
                console.log(`Unbanned ${banInfo.user.username}`)
            });
            console.log(`Unbanned ${bans.size} users`)
        })

    },
};