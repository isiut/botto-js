const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mass")
        .setDescription("Replies with the mass converted to different units")
        .addSubcommand((subcommand) =>
            subcommand
                .setName("pounds")
                .setDescription("Converts pounds (lb)")
                .addNumberOption((option) =>
                    option
                        .setName("value")
                        .setDescription("The value to be converted in lb")
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("ounces")
                .setDescription("Converts ounces (oz)")
                .addNumberOption((option) =>
                    option
                        .setName("value")
                        .setDescription("The value to be converted in oz")
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("kilograms")
                .setDescription("Converts kilograms (kg)")
                .addNumberOption((option) =>
                    option
                        .setName("value")
                        .setDescription("The value to be converted in kg")
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("grams")
                .setDescription("Converts grams (g)")
                .addNumberOption((option) =>
                    option
                        .setName("value")
                        .setDescription("The value to be converted in g")
                        .setRequired(true)
                )
        ),
    async execute(interaction) {
        const subCmd = interaction.options.getSubcommand();
        const val = interaction.options.getNumber("value");

        // conversions between imperial and metric units are approximate
        if (subCmd === "pounds") {
            const oz = val * 16;
            const kg = val / 2.205;
            const g = val * 453.6;

            await interaction.reply(
                `${val} lb:\n= ${oz} oz\n≈ ${kg} kg\n≈ ${g} g`
            );
        } else if (subCmd === "ounces") {
            const lb = val / 16;
            const kg = val / 35.274;
            const g = val * 28.35;

            await interaction.reply(
                `${val} oz:\n= ${lb} lb\n≈ ${kg} kg\n≈ ${g} g`
            );
        } else if (subCmd === "kilograms") {
            const lb = val * 2.205;
            const oz = val * 35.274;
            const g = val * 1000;

            await interaction.reply(
                `${val} kg:\n≈ ${lb} lb\n≈ ${oz} oz\n= ${g} g`
            );
        } else if (subCmd === "grams") {
            const lb = val / 453.6;
            const oz = val / 28.35;
            const kg = val / 1000;

            await interaction.reply(
                `${val} g:\n≈ ${lb} lb\n≈ ${oz} oz\n= ${kg} kg`
            );
        } else {
            console.error("No subcommand selected.");
        }
    },
};
