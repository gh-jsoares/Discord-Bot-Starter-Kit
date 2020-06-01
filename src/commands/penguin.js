import { OWNER_ONLY } from '../utils/permissions.js';

export default {
        name: 'penguin',
        description: 'Ping!',
        args: 0,
        cooldown: 0,
        usage: '',
        guildOnly: false,
        aliases: [],
        permission: OWNER_ONLY,
        execute(message, args) {
            message.channel.send('Pong.');
        }
}