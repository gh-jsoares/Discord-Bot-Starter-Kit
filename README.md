# Discord Bot Started Kit
This is just a simple repository to help get started whilst making a bot.
It contains a simple structure for listeners and commands as well as a database connection using knex (query builder).

## Get started
To get started you can clone this repository:

`git clone git@github.com:gh-jsoares/Discord-Bot-Starter-Kit.git discord-bot && cd discord-bot`

Or you can press the 'Use this Template' button to create a repository with the same structure.
![Use this template](https://files.perpheads.com/aPAYFgyfG8kuRtxd.png)

After you have cloned it, you will need to run `npm install` to install all dependencies.

## Configuration file
The configuration settings can be located inside `config/config.js`. You will need to
copy `config/config.js.example` into `config/config.js` making the appropriate changes.

## Running
You can run the bot by executing the following command:
`npm run dev`
This will launch a nodemon server that will watch your files for changes
