import { ADMIN_ONLY } from '../utils/permissions.js';
import { createVote } from '../services/votes.js';

export default {
        name: 'newvote',
        description: 'Creates a new vote with options!',
        args: 6,
        cooldown: 0,
        usage: 'title [duration] \'description\' \'option1\' option1_emote \'option2\' option2_emote...',
        guildOnly: true,
        aliases: [],
        permission: ADMIN_ONLY,
        execute(message, args) {
            let duration = args[0];
            if(!duration.match(/[1-9][0-9]*[yMwdhms]/))
                duration = null;
            const i = duration == null ? 0 : 1;
            const title = args[i];
            const description = args[i+1];
            const options = [];
            for (let ix = i + 2; ix < args.length - 1; ix += 2) {
                const op_title = args[ix];
                const op_emote = args[ix+1];
                options.push({ title: op_title, emote: op_emote });
            }
            const creator = message.author.id;
            createVote(message, {
                title: title,
                description: description,
                duration: duration,
                options: options,
                creator: creator
            }).catch((err) => console.error(err));
        }
}