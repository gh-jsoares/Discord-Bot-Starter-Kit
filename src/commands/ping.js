import { REGULAR } from '../utils/permissions.js';

export default {
        name: 'ping',
        description: 'Ping!',
        args: 0,
        cooldown: 0,
        usage: '',
        guildOnly: false,
        aliases: ['peng'],
        permission: REGULAR,
        execute(message, args) {
            message.channel.send('Pong.');
        }
}