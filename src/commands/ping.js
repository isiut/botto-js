const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with the latency"),
    async execute(interaction) {
        let latency = Date.now() - interaction.createdTimestamp;
        await interaction.reply(`The latency is ${latency}ms`);
    },
};
