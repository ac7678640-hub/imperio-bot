const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// Servidor HTTP necessário para o Render
const port = process.env.PORT || 10000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot Império online!');
}).listen(port, '0.0.0.0');

client.once('ready', () => {
  console.log(`Bot online como ${client.user.tag}`);
});

const token = process.env.DISCORD_TOKEN;

if (!token) {
  console.error('DISCORD_TOKEN não configurado.');
  process.exit(1);
}

client.login(token);
