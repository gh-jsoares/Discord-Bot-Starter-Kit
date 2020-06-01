import { TOKEN } from '../config/config.js';
import { Bot } from './bot/client.js';

Bot.run({ token: TOKEN }).then(async (client) => {
    // EMPTY
});