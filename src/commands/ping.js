const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong to test if the bot is online'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    }
}