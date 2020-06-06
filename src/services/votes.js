import { createVote as _createVote } from '../api/votes.js';
import { validateVote } from '../validators/vote.js';
import sendEmbed from '../utils/embeds.js';

export async function createVote(message, vote) {
    validateVote(vote);

    const embedObject = {
        title: `Vote - ${vote.title}`,
        description: vote.description,
        footer: {
            text: `Vote created by ${message.author.username}`,
            icon: message.author.displayAvatarURL()
        },
        fields: []
    };
    vote.options.forEach((option, ix) => {
        embedObject.fields.push({
            name: `**Penguin ${ix+1}**`,
            value: `${option.emote}\t${option.title}`
        });
    });

    const embedMessage = await sendEmbed(message.channel, embedObject);
    for await (const option of vote.options) {
        let emote;
        if(option.emote.match(/<a?:.*:[0-9]*>/))
            emote = option.emote.split(':')[2].replace(/>/, '');
        else
            emote = option.emote;

        try {
            await embedMessage.react(emote);
        } catch(err) {
            message.reply(`The emote ${option.emote} was not found on my list.`);
            embedMessage.delete();
            return;
        }
    }

    await message.delete();

    // create in backend _createVote(vote)
    // start timeout till deadline
    // listen for reactions
}
