import { MessageEmbed } from 'discord.js';

export default function sendEmbed(channel, { title, color, url, author, description, thumbnail, fields, image, timestamp, footer }) {
	const embed = new MessageEmbed();
	if(title)
    	embed.setTitle(title);
	if(color)
    	embed.setColor(color);
	if(url)
		embed.setURL(url);
	if(description)
		embed.setDescription(description);
	if(thumbnail)
		embed.setThumbnail(thumbnail);
	if(fields)
		embed.addFields(fields);
	if(image)
		embed.setImage(image);
	if(timestamp)
    	embed.setTimestamp(timestamp);
	if(author)
		embed.setAuthor(author.name, author.icon, author.url);
	if(footer)
		embed.setFooter(footer.text, footer.icon);

    return channel.send(embed);
}