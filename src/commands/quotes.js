const { SlashCommandBuilder } = require("discord.js");
const qt = require("./misc/quotes.json");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("quote")
        .setDescription("Returns a random quote"),
    async execute(interaction) {
        const rand = Math.round(Math.random() * 101);

        const quote = qt.quotes[rand].quote;
        const author = qt.quotes[rand].author;

        await interaction.reply(`${quote}\n- ${author}`);
    },
};
