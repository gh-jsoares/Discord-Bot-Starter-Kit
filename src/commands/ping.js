export default {
        name: 'ping',
        description: 'Ping!',
        args: 0,
        cooldown: 0,
        usage: '',
        guildOnly: false,
        aliases: [],
        execute(message, args) {
            message.channel.send('Pong.');
        }
}