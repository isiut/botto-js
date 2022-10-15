const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rng')
    .setDescription('Replies with a random number')
    .addNumberOption(option => 
        option
            .setName('max')
            .setDescription('The maximum random number')
            .setRequired(true)
            .addChoices(
                { name: '0-10', value: 10 },
                { name: '0-100', value: 100 },
                { name: '0-1000', value: 1000 },
            )
    ),
    async execute(interaction) {
        const multiplier = interaction.options.getNumber('max');
        let randomNumber = String(Math.round(Math.random() * multiplier));

        await interaction.reply(randomNumber);
    }
}