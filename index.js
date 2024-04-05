const Discord = require("legend.js");
const debut = Date.now();
const Spotify = require("spotify-web-api-js");
const spotifyApi = new Spotify();
const sleep = (ms) => new Promise((res, rej) => setTimeout(res, ms));
const config = require("./config.json");
const config2 = require("./config.js");
const chalk = require("chalk");
const XMLHttpRequest = require("xhr2");
const fs = require("fs");
const phin = require("phin").unpromisified;
let codelist = [];
const userAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36";
const regex = new RegExp(
  /(discord\.gift\/|discord\.com\/gifts\/|discordapp\.com\/gifts\/)[^\s]+/gim
);
const webhookUrl = config.webhookurl;
import('dateformat').then(dateFormat => {
  // Votre code utilisant dateFormat ici
}).catch(err => {
  // Gérer les Errors d'importation
  console.error('Error lors de l\'importation du module dateFormat :', err);
});
const rpc = require("discordrpcgenerator");
const spotify = require("./commands/spotify.json");
const savepresence = require("./commands/savepresence.json");
const maths = require("mathjs");
const { forEach } = require("mathjs");
const token_spotify =
  "BQBvV9FsC9iaL8zIDqMIEy1RfyDyiW7ozNgxYyarNVU6iTqHYxGSEZKAgu28B14MV3emGcKY12P_fA3D6TK8Ip90A8sF69in0wXOZaODieykltclIlnQixzRGuZRRYrh9ni0zfvY69nBm5Gv";
const dmclient = new Discord.Client({
  disableEveryone: true,
  disabledEvents: [
    "TYPING_START",
    "VOICE_SERVER_UPDATE",
    "RELATIONSHIP_ADD",
    "RELATIONSHIP_REMOVE",
    "GUILD_ROLE_DELETE",
    "GUILD_ROLE_UPDATE",
    "GUILD_BAN_ADD",
    "GUILD_BAN_REMOVE",
    "CHANNEL_UPDATE",
    "CHANNEL_PINS_UPDATE",
    "MESSAGE_DELETE",
    "MESSAGE_UPDATE",
    "MESSAGE_DELETE_BULK",
    "MESSAGE_REACTION_ADD",
    "MESSAGE_REACTION_REMOVE",
    "GUILD_MEMBER_UPDATE",
    "GUILD_MEMBERS_CHUNK",
    "GUILD_ROLE_CREATE",
    "MESSAGE_REACTION_REMOVE_ALL",
    "USER_UPDATE",
    "USER_NOTE_UPDATE",
    "USER_SETTINGS_UPDATE",
    "PRESENCE_UPDATE",
    "VOICE_STATE_UPDATE",
    "GUILD_UPDATE",
    "GUILD_MEMBER_ADD",
    "GUILD_MEMBER_REMOVE",
  ],
});
if (webhookUrl != null) {
  const webhooktoken = /[^/]*$/.exec(webhookUrl)[0];
  const webhookid = webhookUrl.replace(
    /^.*\/(?=[^\/]*\/[^\/]*$)|\/[^\/]*$/g,
    ""
  );
  const webhookclient = new Discord.WebhookClient(webhookid, webhooktoken);
  function fireHook(type, code, guild, author, time, alt) {
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Nitro Sniper")
      .addField("Time of", time, true)
      .addField("Type", type, true)
      .addField("Code", code, true)
      .addField("Account", alt, true)
      .addField("Author", `${author}`, true);
    guild
      ? embed.addField("Place", `${guild} (Server)`, true)
      : embed.addField("Place", `DMs`, true);
    webhookclient
      .send("", {
        embeds: [embed],
      })
      .catch(() => {
        if (webhookUrl) {
          console.log(
            chalk.red(
              "[Sniper] Couldn't reach webhook. Your webhook URL is invalid."
            )
          );
        }
      });
  }
}
const asciiArt = `
███▄    █  ██▓▄▄▄█████▓ ██▀███   ▒█████       ██████  ███▄    █  ██▓ ██▓███  ▓█████  ██▀███  
██ ▀█   █ ▓██▒▓  ██▒ ▓▒▓██ ▒ ██▒▒██▒  ██▒   ▒██    ▒  ██ ▀█   █ ▓██▒▓██░  ██▒▓█   ▀ ▓██ ▒ ██▒
▓██  ▀█ ██▒▒██▒▒ ▓██░ ▒░▓██ ░▄█ ▒▒██░  ██▒   ░ ▓██▄   ▓██  ▀█ ██▒▒██▒▓██░ ██▓▒▒███   ▓██ ░▄█ ▒
▓██▒  ▐▌██▒░██░░ ▓██▓ ░ ▒██▀▀█▄  ▒██   ██░     ▒   ██▒▓██▒  ▐▌██▒░██░▒██▄█▓▒ ▒▒▓█  ▄ ▒██▀▀█▄  
▒██░   ▓██░░██░  ▒██▒ ░ ░██▓ ▒██▒░ ████▓▒░   ▒██████▒▒▒██░   ▓██░░██░▒██▒ ░  ░░▒████▒░██▓ ▒██▒
░ ▒░   ▒ ▒ ░▓    ▒ ░░   ░ ▒▓ ░▒▓░░ ▒░▒░▒░    ▒ ▒▓▒ ▒ ░░ ▒░   ▒ ▒ ░▓  ▒▓▒░ ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░
░ ░░   ░ ▒░ ▒ ░    ░      ░▒ ░ ▒░  ░ ▒ ▒░    ░ ░▒  ░ ░░ ░░   ░ ▒░ ▒ ░░▒ ░      ░ ░  ░  ░▒ ░ ▒░
  ░   ░ ░  ▒ ░  ░        ░░   ░ ░ ░ ░ ▒     ░  ░  ░     ░   ░ ░  ▒ ░░░          ░     ░░   ░ 
        ░  ░              ░         ░ ░           ░           ░  ░              ░  ░   ░     
                                                                                             
`;
console.log(chalk.blueBright(`You launched the Selfbot `));
console.log(chalk.blueBright(asciiArt));
for (const token of config2.token) {
  const client = new Discord.Client({
    messageSweepInterval: 1,
    messageCacheLifetime: 1,
    messageCacheMaxSize: 1,
    disableEveryone: false,
    disabledEvents: [
      "TYPING_START",
      "VOICE_SERVER_UPDATE",
      "RELATIONSHIP_ADD",
      "RELATIONSHIP_REMOVE",
      "GUILD_ROLE_DELETE",
      "GUILD_ROLE_UPDATE",
      "GUILD_BAN_ADD",
      "GUILD_BAN_REMOVE",
      "CHANNEL_UPDATE",
      "CHANNEL_PINS_UPDATE",
      "MESSAGE_DELETE",
      "MESSAGE_UPDATE",
      "MESSAGE_DELETE_BULK",
      "MESSAGE_REACTION_ADD",
      "MESSAGE_REACTION_REMOVE",
      "GUILD_MEMBER_UPDATE",
      "GUILD_MEMBERS_CHUNK",
      "GUILD_ROLE_CREATE",
      "MESSAGE_REACTION_REMOVE_ALL",
      "USER_UPDATE",
      "USER_NOTE_UPDATE",
      "USER_SETTINGS_UPDATE",
      "PRESENCE_UPDATE",
      "VOICE_STATE_UPDATE",
      "GUILD_UPDATE",
      "GUILD_MEMBER_ADD",
      "GUILD_MEMBER_REMOVE",
    ],
  });
  if (config.nitrosniper === "true") {
    client.on("message", async (message) => {
      let codes = message.content.match(regex);
      if (!codes || codes === null || codes.length === 0) return;
      for (let code of codes) {
        let start = new Date();
        code = code.replace(
          /(discord\.gift\/|discord\.com\/gifts\/|discordapp\.com\/gifts\/)/gim,
          ""
        );
        if (codelist.includes(code)) {
          console.log(
            chalk.red(
              `- [Nitro Sniper] Duplication - Code: ${chalk.bold(
                code
              )} - ${message.guild ? message.guild.name : "DMs"} (${
                message.author.tag
              })`
            )
          );
          continue;
        }
        const numeric = code.replace(/[^0-9]/g, "").length;
        const lowercase = code.replace(/[^a-z]+/g, "").length;
        const uppercase = code.replace(/[^A-Z]+/g, "").length;
        if (
          code.length > 26 ||
          code.length < 16 ||
          numeric - lowercase - uppercase > 8
        ) {
          console.log(
            chalk.red(
              `- [Nitro Sniper] Fake code - Code: ${chalk.bold(code)} - ${
                message.guild ? message.guild.name : "DMs"
              } (${message.author.tag})`
            )
          );
          continue;
        }
        phin(
          {
            url: `https://discord.com/api/v9/entitlements/gift-codes/${code}/redeem`,
            method: "POST",
            parse: "json",
            headers: {
              Authorization: config2.maintoken,
              "User-Agent": userAgent,
            },
          },
          (err, res) => {
            let end = `${new Date() - start}ms`;
            if (err) {
              console.log(
                chalk.red(`- [Nitro Sniper] (${code}) - Error - ${err}`)
              );
            } else if (res.body.message === "401: Unauthorized") {
              console.log(
                chalk.red(
                  `- [Nitro Sniper] (${code}) - Error - Main Token Invalid`
                )
              );
            } else if (
              res.body.message == "This gift has been redeemed already."
            ) {
              console.log(
                chalk.red(
                  `- [Nitro Sniper] (${code}) - Already Activated - ${
                    message.guild ? message.guild.name : "DMs"
                  } (${message.author.tag}) - ${end}`
                )
              );
              codelist.push(code);
            } else if ("subscription_plan" in res.body) {
              console.log(
                chalk.green(
                  `+ [Nitro Sniper] (${code}) - Succes - ${
                    res.body.subscription_plan.name
                  } - ${message.guild ? message.guild.name : "DMs"} (${
                    message.author.tag
                  }) - ${end}`
                )
              );
              fireHook(
                res.body.subscription_plan.name,
                code,
                message.guild ? message.guild.name : null,
                message.author.tag,
                end,
                client.user.tag
              );
              codelist.push(code);
            } else if (res.body.message == "Unknown Gift Code") {
              console.log(
                chalk.red(
                  `- [Nitro Sniper] (${code}) - Nitro Invalid - ${
                    message.guild ? message.guild.name : "DMs"
                  } (${message.author.tag}) - ${end}`
                )
              );
              codelist.push(code);
            }
          }
        );
      }
    });
  }
  client.on("ready", () => {
    ((title) => {
      process.title = title;
      process.stdout.write(`\u001B]0;${title}\u0007`);
    })(`Selfbot`);
    client.user.setStatus("dnd");
    client.user.setAFK(true);
    client.user.setPresence(savepresence.saveactivity);
    if ((savepresence.saveactivity = null)) {
      client.user.setPresence({
        game: {
          name: "sb",
          type: "PLAYING",
          url: "https://twitch.tv/",
          details: "Selfbot",
          application_id: "890598057245282335",
          assets: {
            large_image: "890614774302375967",
          },
          timestamps: {
            start: Date.now(),
          },
        },
      });
    }
    console.log(
      chalk`{red Connected. Tag: ${client.user.tag}} {cyan ID: ${client.user.id}}`
    );
  });
  client.on("message", async (message) => {
    const args = message.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (!message.content.startsWith(config.prefix) || message.author.bot)
      return;
    
    if (message.author.id != client.user.id) return;
    if (command === "help") {
      message.edit(
        `>>> __**Help Panel**__ \n **Here are all the SelfBot commands!** \n*${config.prefix}info*: \`Gives commands to obtain information. 🌐\` \n*${config.prefix}statut*: \`Gives commands to change the status.🚀\` \n*${config.prefix}misc*: \`Gives miscellaneous commands.💫\` \n*${config.prefix}settings*: \`Gives changeable settings of the Self. 🛠\``
      );
    }
    if (command === "info") {
      message.edit(
        `>>> __**Information commands 🌐**__ \n*${config.prefix}serverinfo <id>*: \`Gives information about a server.\` \n*${config.prefix }userinfo <id/mention>*: \`Gives the user information.\` \n*${config.prefix}avatar <id/mention>*: \`Gives the pfp of the given id.\` \n*${config.prefix}banner <id>*: \`Under sniff repair\``
      );
    }
    if (command === "statut") {
      message.edit(
        `>>> __**Status commands*** ☄️ \n*${config.prefix}setgame <type> <text>*: \`Changes the activity. [Type: watch / stream / secretstream / competing].\` \n*${config.prefix}spotify <text>*: \`Changes the Spotify presence. [Yes I finally fixed it]\` \n*${config.prefix}setstatut <type>*: \`Changes the status of the SelfBot client. [Type: online / idle / invisible / dnd].\``
      );
    }
    if (command === "misc") {
      message.edit(
        `>>> __**Miscellaneous commands 💫**__ \n*${config.prefix}dmall <text>*: \`Send a message to all your friends.\` \n*${config.prefix}dmtoken <token> <text>*: \`Send a message to all friends of the token provided.\` \n*${config.prefix}dmstop*: \`Stop any dmall.\` \n*${config.prefix}stats*: \`Shows some stats.\``
      );
    }
    if (command === "settings") {
      message.edit(
        `>>> __**SelfBot configuration**__ \n*${config.prefix}prefix <new prefix>*: \`Change the prefix.\` \n*${config.prefix}restart*: \`Restarts the SelfBot.\` \n*${config.prefix}togglesniper <on/off>*: \`Activates or deactivates the Sniper.\` \n*${config.prefix}setspotifyasset*: \`Change l 'spotify image. [As usual come see me for this]\` \n*${config.prefix}setspotiftystate <new author>*: \`Change the spotify author.\` \n*${config.prefix}daysinms* : \`Gives in ms the number of given day(s).\` \n*${config.prefix}hoursinms* : \`Gives in ms the number of given hour(s)\``);
    }
    if (command === "setgame") {
      if (!args[0])
        return message.edit(
          `Invalid status type, \`Status types are: game, watch, listen, stream, secretstream, competing\``
        );
      let str = args.splice(1).join(" ");
      switch (args[0].toLowerCase()) {
        case "game":
          message.delete();
          let play = new rpc.Rpc()
            .setName(`${str}`)
            .setType("PLAYING")
            .setStartTimestamp(Date.now());
          client.user.setPresence(play);
          console.log(
            chalk`{green +} Your game status has been set to: ${str}`
          );
          savepresence.saveactivity = play;
          let configPlay = JSON.stringify(savepresence, null, 2);
          fs.writeFile(
            "./commands/savepresence.json",
            configPlay,
            (err) => console.error
          );
          break;
        case "watch":
          message.delete();
          let watch = new rpc.Rpc()
            .setName(`${str}`)
            .setType("WATCHING")
            .setStartTimestamp(Date.now());
          client.user.setPresence(watch);
          console.log(
            chalk`{green +} Your watching status has been set to: ${str}`
          );
          savepresence.saveactivity = watch;
          let configWatch = JSON.stringify(savepresence, null, 2);
          fs.writeFile(
            "./commands/savepresence.json",
            configWatch,
            (err) => console.error
          );
          break;
        case "listen":
          message.delete();
          let listen = new rpc.Rpc()
            .setName(`${str}`)
            .setType("LISTENING")
            .setStartTimestamp(Date.now());
          client.user.setPresence(listen);
          console.log(
            chalk`{green +} Your listening status has been set to: ${str}`
          );
          savepresence.saveactivity = listen;
          let configListen = JSON.stringify(savepresence, null, 2);
          fs.writeFile(
            "./commands/savepresence.json",
            configListen,
            (err) => console.error
          );
          break;
        case "stream":
          message.delete();
          let streamrpc = new rpc.Rpc()
            .setName(`${str}`)
            .setUrl("https://twitch.tv/" + `${config.twitch}`)
            .setType("STREAMING")
            .setApplicationId("484648535636180995")
            .setDetails(`${str}`);
          client.user.setPresence(streamrpc);
          console.log(
            chalk`{green +} Your streaming status has been set to: ${str}`
          );
          savepresence.saveactivity = streamrpc;
          let configStream = JSON.stringify(savepresence, null, 2);
          fs.writeFile(
            "./commands/savepresence.json",
            configStream,
            (err) => console.error
          );
          break;
        case "secretstream":
          message.delete();
          let streaming = new rpc.Rpc()
            .setType("STREAMING")
            .setApplicationId("484648535636180995")
            .setName(`${str}`)
            .setDetails(`${str}`)
            .setUrl("https://discord.gg/404");
          client.user.setPresence(streaming);
          console.log(
            chalk`{green +} Your secretstream status has been set to: ${str}`
          );
          savepresence.saveactivity = streaming;
          let configSecretStream = JSON.stringify(savepresence, null, 2);
          fs.writeFile(
            "./commands/savepresence.json",
            configSecretStream,
            (err) => console.error
          );
          break;
        case "competing":
          message.delete();
          let competing = {
            game: {
              name: `${str}`,
              type: 5,
              timestamps: {
                start: Date.now(),
              },
            },
          };
          client.user.setPresence(competing);
          savepresence.saveactivity = competing;
          let configCompeting = JSON.stringify(savepresence, null, 2);
          fs.writeFile(
            "./commands/savepresence.json",
            configCompeting,
            (err) => console.error
          );
          console.log(
            chalk`{green +} Your competing status has been set to: ${str}`
          );
      }
    }
    if (command === "spotify") {
      if (message.deletable) message.delete();
      let spotify2 = {
        game: {
          type: 2,
          timestamps: {
            start: Date.now(),
            end: Date.now() + spotify.timestamp,
          },
          sync_id: "6ndGelbBG170bPAyiPbjnA",
          state: spotify.state,
          session_id: !0,
          assets: {
            large_image: spotify.asset,
          },
          party: {
            id: "spotify:" + client.user.id,
          },
          name: "Spotify",
          id: "spotify:1",
          details: args.join(" "),
          created_at: Date.now(),
        },
      };
      console.log(chalk`{green +} Spotify.`);
      client.user.setPresence(spotify2);
      savepresence.saveactivity = spotify2;
      let configSpotify2 = JSON.stringify(savepresence, null, 2);
      fs.writeFile(
        "./commands/savepresence.json",
        configSpotify2,
        (err) => console.error
      );
    }
    if (command === "setstatut") {
      const validStatuses = [
        {
          internal: "online",
          display: "online",
          emoji: ":zap:",
        },
        {
          internal: "idle",
          display: "idle",
          emoji: ":beach_umbrella:",
        },
        {
          internal: "dnd",
          display: "do-not-disturb",
          emoji: ":mute:",
        },
        {
          internal: "invisible",
          display: "invisible",
          emoji: ":ghost:",
        },
      ];
      const validStatusRegex = new RegExp(
        `^(${validStatuses.map((status) => status.internal).join("|")})$`
      );
      const validStatusString = validStatuses
        .map((status) => `\`${status.internal}\``)
        .join(", ");
      if (args.length < 1 || !validStatusRegex.test(args[0])) {
        (
          await message.edit(`But a status to put : ${validStatusString}`)
        )
      }

      const status = validStatuses.find(
        (status) => status.internal === args[0].toLowerCase()
      );

      client.user.setStatus(status.internal);

      (
        await message.edit(
          `${status.emoji} Status changed to ${status.display}.`
        )
      )
      console.log(chalk`{green +} Your new status: ${status.display}.`);
    }
    if (command === "customstatus") {
      const em = message.content.match(/<a?:.+:(\d{18})>/).reverse();
      const emoji = client.emojis.get(em[0]);
      const str = args.slice(1).join(" ");
      message.delete();
      let customemoji = new rpc.CustomStatus()
        .setDiscordEmoji(emoji)
        .setState(str || undefined);
      client.user.setCustomStatus(customemoji.toDiscord());
      console.log(chalk`{green +}Your new Statut custom. Text: ${str}`);
    }
    if (command === "serverinfo") {
      const now = new Date();
      dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
      let guild = client.guilds.get(args[0]) || message.guild;
      if (!guild)
        return message
          .edit(
            "Give the server id or do the command in the concerned server"
          )
          .then((m) => m.delete(5000));
      const millis = new Date().getTime() - guild.createdAt.getTime();
      const days = millis / 1000 / 60 / 60 / 24;
      message.edit(
        `>>> __**Server Info**__ \n**Name** : \`${
          guild.name
        }\` \n**ID** : \`${guild.id}\` \n**Owner ID** : \`${
          guild.ownerID
        }\` \n**Channels count** : \`${
          guild.channels.size
        }\` \n**Roles count** : \`${
          guild.roles.size
        }\` \n**Members count** : \`${
          guild.memberCount
        } member.\` \n**Created at** : \`${dateFormat(
          guild.createdAt
        )}\` \n**Days before creation** : \`${days.toFixed(
          0
        )}\` \n**Joined at** : \`${dateFormat(guild.joinedAt)}\``
      );
    }
    if (command === "userinfo") {
      client.fetchUser(args.join(" "));
      dateFormat("dddd, mmmm dS, yyyy, h:MM:ss TT");
      let user =
        client.users.get(args.join(" ")) ||
        message.mentions.users.first() ||
        message.author;
      const millisCreated = new Date().getTime() - user.createdAt.getTime();
      const daysCreated = millisCreated / 1000 / 60 / 60 / 24;
      if (!user)
        return usercache.then(
          message
            .edit("You need to provie an ID")
            .then((m) => m.delete(2000))
        );
      message.edit(
        `>>> __**User Info**__ \n**Tag** : \`${
          user.tag
        }\` \n**User ID** : \`${
          user.id
        }\` \n**Created at** : \`${dateFormat(
          user.createdAt
        )}\` \n**Days before creation** : \`${daysCreated.toFixed(
          0
        )}\` \n**Statut** : \`${
          user.presence.status[0].toUpperCase() + user.presence.status.slice(1)
        }\` \n**Games** : \`${
          (user.presence.game &&
            user.presence.game &&
            user.presence.gaùe.name) ||
          "No game played."
        }\``
      );
    }
    if (command === "avatar") {
      client.fetchUser(args.join(" "));
      let useravatar =
        client.users.get(args.join(" ")) ||
        message.mentions.users.first() ||
        message.author;
      let avatar = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(useravatar.avatarURL)
        .setDescription(`Here is the pfp of ` + useravatar.username)
        .setFooter(client.user.username, client.user.avatarURL)
        .setTimestamp();
      await message.edit(
        `>>> Here is the pfp of \`${useravatar.username}\` : \n${useravatar.avatarURL}`
      );
    }
    if (command === "author") {
      message.edit(`> Created by \`zartexw'\``);
    }
    if (command === "hiddenping") {
      message.delete();
      var userID = args[0];
      if (!userID)
        return await message.channel
          .send("Provide user id")
          .then((m) => deleteMessage(m));

      var userData = message.guild.members.fetch(userID);
      if (!userData)
        return await message.channel
          .send("You provided an incorrect id")
          .then((m) => deleteMessage(m));

      var text = args.slice(1).join(" ");
      if (!text)
        return await message.channel
          .send("Enter the text who will hide the mention")
          .then((m) => deleteMessage(m));

      var final = `${text}||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||<@${userID}>`;

      message.channel.send(final);
    }
    if (command === "banner") {
      client.fetchUser(args.join(" "));
      let user =
        client.users.get(args.join(" ")) ||
        message.mentions.users.first() ||
        message.author;
      phin(
        {
          url: `https://cryptons.ga/api/v1/userbanner?id=${user.id}`,
          parse: "json",
        },
        async (err, res) => {
          if (res.body.url === "null")
            return message
              .edit(`This user don't have a banner`)
              .then((m) => m.delete(6500));
          await message.edit(
            `>>> Here is the banner of \`${user.tag}\` \n${res.body.url}`
          );
        }
      );
    }
    if (command === "dmall") {
      message.edit(`Dm in progress for : \`${client.user.friends.size} amis\``);
      async function dm(client, message) {
        if (!client.user.friends.size)
          return console.log(chalk`{red ?} No friend to dm.`);
        let friends = [...client.user.friends.values()];
        for (const friend of friends) {
          await sleep(1500);
          try {
            await friend.send(message);
            console.log(chalk`{green ?} DMing ${friend.tag}`);
          } catch {
            friends.push(friend);
          }
        }
      }
      if (args.length < 1)
        return message.edit(
          `You need to provide the message that you want send !`
        );
      if (args[0] === "stop") {
        await message.channel.send(`I stop DMing`);
        process.exit();
      }
      await dm(client, args.join(" "));
      console.log(chalk`{green ?} Sucessfully DM'd friends.`);
      message.channel.send(`Dmall finished`);
      await message.delete(5000);
    }
    if (command === "dmtoken") {
      async function dm(client, message) {
        if (!client.user.friends.size)
          return console.log(chalk`{red ?} No friends to dm.`);
        let friends = [...client.user.friends.values()];
        for (const friend of friends) {
          await sleep(1500);
          try {
            await friend.send(message);
            console.log(chalk`{green ?} DMing ${friend.tag}`);
          } catch {
            friends.push(friend);
          }
        }
      }
      if (!args[0]) return message.delete();
      await dmclient.login(args[0]).catch(() => {
        console.error(chalk`{red -} Invalid token provided.`);
      });
      console.log(chalk`{green +} Logged in as ${dmclient.user.tag}.`);
      console.log(
        chalk`{green +} Starting DM Friends on: ${dmclient.user.tag}.`
      );
      let msg = args.splice(1).join(" ");
      await dm(dmclient, msg);
      console.log(chalk`{green ?} Sucessfully DM'd friends.`);
      await dmclient.destroy().catch((error) => {
        console.error(chalk`{red -} Couldn't destroy Client. ${error}`);
      });
      message.edit(`Dm for friends succesfull.`);
    }
    if (command === "setspotifyasset") {
      if (!args[0])
        return message
          .edit(
            "Give image id. exemple: spotify:ab67706c0000bebbab7cf58560e5079a346aecd4"
          )
          .then((m) => m.delete(2500));
      spotify.asset = args[0];
      let configData = JSON.stringify(spotify, null, 2);
      fs.writeFile(
        "./commands/spotify.json",
        configData,
        (err) => console.error
      );
      message
        .edit(`Spotify image has been charged for ${args[0]}`)
        .then((m) => m.delete(2500));
      console.log(`Spotify image has been changed for ${args[0]}`);
    }
    if (command === "setspotifystate") {
      if (args.length < 1)
        return message
          .edit("Give an argument.")
          .then((m) => m.delete(2500));
      spotify.state = args.join(" ");
      let configData = JSON.stringify(spotify, null, 2);
      fs.writeFile(
        "./commands/spotify.json",
        configData,
        (err) => console.error
      );
      message
        .edit(`Spotify author has been changed for ${args.join(" ")}`)
        .then((m) => m.delete(2500));
      console.log(`Spotify author has been changed for ${args.join(" ")}`);
    }
    if (command === "setspotifytimestamp") {
      if (args.length < 1)
        return message
          .edit("Give an argument.")
          .then((m) => m.delete(2500));
      spotify.timestamp = parseInt(args[0]);
      let configData = JSON.stringify(spotify, null, 2);
      fs.writeFile(
        "./commands/spotify.json",
        configData,
        (err) => console.error
      );
      message.edit(`Change listening time.`).then((m) => m.delete(2500));
      console.log(`Change listening time.`);
    }
    if (command === "daysinms") {
      let str = args[0];
      let result = maths.multiply(86400000, parseInt(str));
      message.edit(result);
    }
    if (command === "hoursinms") {
      let str = args[0];
      let result = maths.multiply(3600000, parseInt(str));
      message.edit(result);
    }
    if (command === "togglesniper") {
      if (config2.premium === "activated") {
        if (args[0] === "on") {
          let newstate = "true";
          config.nitrosniper = newstate;
          let configData = JSON.stringify(config, null, 2);
          fs.writeFileSync("./config.json", configData, (err) => console.error);
          await message
            .edit(`✅ Nitro Sniper activated. Restarting the selfbot`)
            .then((m) => m.delete(5000));
          process.exit();
        }
        if (args[0] === "off") {
          let newstate = "false";
          config.nitrosniper = newstate;
          let configData = JSON.stringify(config, null, 2);
          fs.writeFileSync("./config.json", configData, (err) => console.error);
          await message
            .edit(`✅ Nitro Sniper Disabled. Restarting the selfbot`)
            .then((m) => m.delete(5000));
          process.exit();
        }
      } else {
        return message.channel.send("You must be premium.");
      }
    }
    if (command === "restart") {
      message.delete();
      if (client.user.premium > 0) {
        await message.channel.send(
          `Restarting. <a:chargement:892094764692947086>`
        );
      }
      if (!client.user.premium > 0) {
        await message.channel.send(`Restarting. ✅`);
      }
      process.exit();
    }
    if (command === "prefix") {
      let newprefix = args[0];
      config.prefix = newprefix;
      let configData = JSON.stringify(config, null, 2);
      fs.writeFileSync("./config.json", configData, (err) => console.error);
      await message
        .edit(`Prefix changed for ${newprefix}`)
        .then((m) => m.delete(5000));
      process.exit();
    }
    if (command === "support") {
      message.delete();
      message.edit(
        `Here is your entry ticket to support https://discord.gg/Ks9mYYtffC`
      );
    }
    if (command === "dmstop") {
      message.delete();
      process.exit();
    }
    if (command === "webhookurl") {
      let webhookurl = args[0];
      config.webhookurl = webhookurl;
      let configData = JSON.stringify(config, null, 2);
      fs.writeFileSync("./config.json", configData, (err) => console.error);
      await message
        .edit(`WebhookURl changed for : ${webhookurl}`)
        .then((m) => m.delete(5000));
      process.exit();
    }
    if (command === "stats") {
      const fin = new Date();
      const duree = fin.getTime() - debut;
      const hours = `0${new Date(duree).getHours()}`.slice(-2);
      const minutes = `0${new Date(duree).getMinutes()}`.slice(-2);
      const seconds = `0${new Date(duree).getSeconds()}`.slice(-2);
      const time = `${hours}:${minutes}:${seconds}`;
      if (config2.premium === "activated") {
        var premium = "You are premium !!";
      } else {
        var premium = "You are not premium :(";
      }
      if (client.user.mfaEnabled === true) {
        var mfa =
          "Oh you have a2f enabled. Remember that a2f is your best friend on discord. Don't pass it on to anyone!!";
      } else if (client.user.mfaEnabled === false) {
        var mfa =
          "What !? You haven't activated your a2f! You should activate it and give me your token again so that no one can steal your account!";
      }
      message.edit(
        `>>> __**Stats**__ \n**Uptime** : \`${time}\` \n**Friends count** : \`${client.user.friends.size} friends\` \n**Account with 2FA** : \`${mfa}\` \n**SelfBot Premium** : \`${premium}\` \n**Servers count** : \`${client.guilds.size} servers\``
      );
    }

    if (command === "getspotifyasset") {
      let playlist_id = await args[0];
      let url = `https://api.spotify.com/v1/playlists/${playlist_id}/images`;

      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);

      xhr.setRequestHeader("Accept", "*/*");
      xhr.setRequestHeader("Authorization", `Bearer ${token_spotify}`);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
        }
      };

      var data = {
        url: xhr.send(),
      };

      message.edit(data);
    }

    if (command === "addfriends") {
      let servid = args[0];
      let guild = client.guilds.get(servid);
      if (guild.members.size > 500) {
        return message.edit(`Risk to be banned`);
      } else {
        guild.members.map.forEach((ppl) => {
          try {
            b.relationshipAdd().then(() => {
              console.log(
                `Friend request sent to ${b.user.name} | ${client.user.name}`
              );
            });
          } catch {
            ppl.push(b);
          }
        });
      }
    }
  });
  client.login(token);
}
