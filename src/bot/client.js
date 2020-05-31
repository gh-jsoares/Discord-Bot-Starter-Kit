import { Client, Collection } from 'discord.js';
import { readdirSync } from 'fs';

export class Bot {
    constructor({ token }) {
        this.client = new Client();
        this.client.cooldowns = new Collection();
        this.init(token).then().catch();
    }

    async init(token) {
        await this.setupCommands();
        await this.setupListeners();
        this.client.login(token);
    }

    async setupCommands() {
        this.client.commands = new Collection();

        const commandFiles = readdirSync('./src/commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
        	const { default: command } = await import(`../commands/${file}`);
        	this.client.commands.set(command.name, command);
        }
    }

    async setupListeners() {
        const listenerFiles = readdirSync('./src/listeners').filter(file => file.endsWith('.js'));

        for (const file of listenerFiles) {
            const { default: { name, execute } } = await import(`../listeners/${file}`);
        	this.client.on(name, execute);
        }
    }

    static async run(options) {
        return await new Bot(options);
    }
}