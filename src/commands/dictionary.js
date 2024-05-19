// Issue: Replies with duplicated definitions
// when command is run more than once

const { SlashCommandBuilder } = require("discord.js");
const wordnet = require("wordnet");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dictionary")
        .setDescription("looks a word up in the dictionary")
        .addStringOption((option) =>
            option
                .setName("word")
                .setDescription("the word to look up")
                .setRequired(true)
        ),
    async execute(interaction) {
        const word = interaction.options.getString("word");
        let msg = `${word}:\n`;

        await wordnet.init();
        wordnet
            // eslint-disable-next-line no-undef
            .lookup(word, (skipPointers = true))
            .then(async (definitions) => {
                definitions.forEach(async (def) => {
                    msg += `- ${def.glossary}\n`;
                });

                await interaction.reply(msg);
            })
            .catch(async (e) => {
                await interaction.reply(`${e}`);
            });
    },
};
