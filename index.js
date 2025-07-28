import { config } from "dotenv";
config();
import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";
import criarBoneco from "./commands/criarBoneco.js";
import fs from "fs";





const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on("messageCreate",(msg)=>{
//   if(msg.author.bot)return
//    //msg.channel.send({ embeds: [embedCombate] });
// })

client.on("messageCreate", criarBoneco);

// this line must be at the very end
client.login(process.env.CLIENT_TOKEN); //signs the bot in with token
