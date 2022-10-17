const { SlashCommandBuilder } = require("discord.js");

const responses = ["It's heads!", "It's tails!"];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coinflip")
        .setDescription("Replies with either heads or tails"),
    async execute(interaction) {
        await interaction.reply(responses[Math.round(Math.random())]);
    },
};
