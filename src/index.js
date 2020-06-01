import { TOKEN, DATABASE, DATABASE_DRIVER } from '../config/config.js';
import { Bot } from './bot/client.js';
import knex from 'knex';

const connection = knex({
    client: DATABASE_DRIVER,
    connection: DATABASE
});

connection.raw('SELECT 1').then(() => {
    console.log('Connected to database.');
    Bot.run({ token: TOKEN });
}).catch((err) => {
    console.error(`${err.severity} ERROR: ${err.message}`);
});