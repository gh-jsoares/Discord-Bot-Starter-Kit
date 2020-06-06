import { Collection } from 'discord.js';
import { PREFIX, COOLDOWN } from '../../config/config.js';
import { hasPermission } from '../utils/permissions.js';

export default {
    name: 'message',
    execute(message) {
        const client = message.client;

        if (!message.content.startsWith(PREFIX) || message.author.bot) return;

        const args = message.content.slice(PREFIX.length)
            .split(/('.*?'|".*?"|\S+)/g)
            .filter(a => a.trim().length != 0)
            .map(a => a.replace(/^'(.+(?='$))'$/, '$1').replace(/^"(.+(?="$))"$/, '$1'));
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command || !client.commands.has(command.name)) return;

        const cooldowns = client.cooldowns;

        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection());
        }
            
        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = command.cooldown || COOLDOWN;

        if (!(command.guildOnly && message.channel.type !== 'text')) {
            if (timestamps.has(message.author.id)) {
                const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
	            if (now < expirationTime) {
	             	const timeLeft = (expirationTime - now) / 1000;
	             	return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
                }
            }

            if(message.channel.type === 'text' && !hasPermission(message.member, command.permission))
                return message.reply(`You don't have the necessary permissions to execute this command bich.`);

            if(message.channel.type === 'dm' && !hasPermission(message.author, command.permission))
	            return message.reply(`You don't have the necessary permissions to execute this command bich.`);

            if(args.length >= command.args) {
                command.execute(message, args);
                timestamps.set(message.author.id, now);
                setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
            } else {
                let reply = `You didn't provide any arguments, ${message.author}!`;

                if (command.usage)
                    reply += `\nThe proper usage would be: \`${PREFIX}${command.name} ${command.usage}\``;

                message.channel.send(reply);
            }
        } else {
            message.reply('I can\'t execute that command inside DMs!');
        }
    }
};