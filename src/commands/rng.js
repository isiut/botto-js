const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rng')
    .setDescription('Replies with a random number'),
    async execute(interaction) {
        let randomNumber = String(Math.round(Math.random() * 100));

        await interaction.reply(randomNumber);
    }
}