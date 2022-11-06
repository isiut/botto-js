const { SlashCommandBuilder } = require("discord.js");
const weather = require("weather-js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("weather")
        .setDescription("Returns the weather for a city")
        .addStringOption((option) =>
            option
                .setName("city")
                .setDescription("The city to display the weather for")
                .setRequired(true)
        ),
    async execute(interaction) {
        const city = interaction.options.getString("city");

        weather.find({ search: city }, async function (err, result) {
            if (err) {
                console.log(err);
            }

            try {
                const location = result[0].location.name;
                const conditions = result[0].current.skytext;
                const temperature = result[0].current.temperature;
                const feelsLike = result[0].current.feelslike;
                const wind = result[0].current.winddisplay;
                const humidity = result[0].current.humidity;

                await interaction.reply(
                    `Weather for ${location}:` +
                        `\n• Conditions: ${conditions}` +
                        `\n• Temperature: ${temperature}°F` +
                        `\n• Feels like: ${feelsLike}°F` +
                        `\n• Wind: ${wind}` +
                        `\n• Humidity: ${humidity}%`
                );
            } catch {
                await interaction.reply(
                    "There was an error finding the location."
                );
            }
        });
    },
};
