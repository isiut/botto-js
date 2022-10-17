const { SlashCommandBuilder } = require("discord.js");

const responses = [
    // https://en.wikipedia.org/wiki/Magic_8_Ball -> Possible answers

    // Affirmative
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",

    // Non-committal
    "Reply hazy, try again.",
    "Ask me again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",

    // Negative
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("8ball")
        .setDescription("Replies with an 8-ball response")
        
        // The prompt is never read;
        // it is just provided so that the user can ask a question
        .addStringOption((option) =>
            option
                .setName("prompt")
                .setDescription("The question which the bot will reply to")
                .setRequired(false)
        ),
    async execute(interaction) {
        let choice = responses[Math.round(Math.random() * responses.length)];

        await interaction.reply(choice);
    },
};
