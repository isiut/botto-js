const { SlashCommandBuilder } = require("discord.js");

// More weapons may come in the future
const weapons = ["rock", "paper", "scissors"];

const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rockpaperscissors")
        .setDescription("Plays rock paper scissors with the user")
        .addStringOption((option) =>
            option
                .setName("weaponchoice")
                .setDescription("Your choice of weapon to use against the bot")
                .setRequired(true)
                .addChoices(
                    { name: "rock", value: "rock" },
                    { name: "paper", value: "paper" },
                    { name: "scissors", value: "scissors" }
                )
        ),
    async execute(interaction) {
        const userChoice = interaction.options.getString("weaponchoice");

        const computerChoice =
            weapons[Math.floor(Math.random() * weapons.length)];

        if (userChoice === computerChoice) {
            await interaction.reply(
                `It's a draw!\nThe bot chose ${computerChoice} too`
            );
        } else if (beats[userChoice] === computerChoice) {
            await interaction.reply(
                `You won!\nThe bot chose ${computerChoice}`
            );
        } else if (beats[computerChoice] === userChoice) {
            await interaction.reply(
                `You lost!\nThe bot chose ${computerChoice}`
            );
        } else {
            await interaction.reply("There was an error.");
        }
    },
};
