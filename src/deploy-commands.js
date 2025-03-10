// Only needs to be run once each time a new command is added or edited

const fs = require("node:fs");
const path = require("node:path");
const { REST, Routes } = require("discord.js");
const { clientId, token } = require("./config.json");

const commands = [];
// eslint-disable-next-line no-undef
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
    .then((data) =>
        console.log(
            `Successfully registered ${data.length} application command(s).`
        )
    )
    .catch(console.error);
