const Discord = require('discord.js');
const client = new Discord.Client()
const { Client, MessageAttachment } = require('discord.js');
const { MessageEmbed } = require('discord.js')
const fs = require("fs");
const server = require('./server.json')
const APImessage = new Discord.APIMessage('target, options');



let prefix = '/'


client.on("ready", ()=> {
const activities_list = [
    `En Dev`, 
    `Créatrice Zea`, 
    `23744 Utilisateurs`, 
    `50 Serveurs`, 
    `Discord en dev`,
];
   
    setInterval(function() {
    const index = Math.floor((Math.random() * activities_list.length));

      client.user.setPresence({
activity : {
        name: `${activities_list[index]}`,
        type: "STREAMING",
        url: "https://www.twitch.tv/ZEA"
}
        })
        })
    }, 11000)

client.on('message', message => {

if (message.content.startsWith(prefix + 'help')){
  if(message.author.bot) return;
console.log('Commande Help Activé')
let embed = new Discord.MessageEmbed()
    .setTitle("Voici les commandes du bot ...")
    .addField("<a:croix:723524870088163330> Indisponible -> Protection [1]", "`antibot`")
    .addField("<a:croix:723524870088163330> Indisponible -> Configuration [...]", "`...`, `...`")
    .addField("<a:verifhfsd:723525137852268546> Disponible -> Modération [4]", "`ban`, `unban`, `kick`, `clear`")
    .addField("<a:verifhfsd:723525137852268546> Disponible -> Informations [4]", '`help`, `ping`, `userinfo`, `infobot`')
    .addField("<a:croix:723524870088163330> Indisponible -> Fun [4]", "`say`, `pf`, `8ball`, `hug`")
    .setTimestamp()
    .setColor('RANDOM')

    message.channel.send(embed)

}
})

client.on('message', message => {
if (message.content.startsWith(prefix + 'slots')){
    const slots = ['🍇', '🍒', '🍋'];
    const slotOne = slots[Math.floor(Math.random() * slots.length)];
    const slotTwo = slots[Math.floor(Math.random() * slots.length)];
    const slotThree = slots[Math.floor(Math.random() * slots.length)];
    const slotfour = slots[Math.floor(Math.random() * slots.length)];
    const slotfive = slots[Math.floor(Math.random() * slots.length)];
    const slotsix = slots[Math.floor(Math.random() * slots.length)];
    const slotseven = slots[Math.floor(Math.random() * slots.length)];
    const sloteight = slots[Math.floor(Math.random() * slots.length)];
    const slotnine = slots[Math.floor(Math.random() * slots.length)];
    if (slotOne === slotTwo && slotOne === slotThree || slotfour === slotfive && slotfour === slotsix || slotseven === sloteight && slotseven === slotnine) {
        const won = new Discord.MessageEmbed()
            .setColor("#7289DA")
            .addField("|-----|-----|----|", `|${slotfour}|${slotfive}|${slotsix}|`)
            .addField("|-----|-----|----|", `|${slotOne}|${slotTwo}|${slotThree}|`)
            .addField("|-----|-----|----|", `|${slotseven}|${sloteight}|${slotnine}|`)
            .setFooter("Wow! " + message.author.username + " Toutes nos félicitations !");
        message.channel.send(won)
    } else {
        const lost = new Discord.MessageEmbed()
            .setColor("#7289DA")
            .addField("|-----|-----|----|", `|${slotfour}|${slotfive}|${slotsix}|`)
            .addField("|-----|-----|----|", `|${slotOne}|${slotTwo}|${slotThree}|`)
            .addField("|-----|-----|----|", `|${slotseven}|${sloteight}|${slotnine}|`)
            .setFooter("Awww " + message.author.username + " plus de chance la prochaine fois.");
        message.channel.send(lost)
    }
}



















client.on('message',message => {
  if (message.content.startsWith(prefix + 'servInfo')) {
     
     message.delete();
     let serverembed = new Discord.MessageEmbed()
       .setAuthor(message.guild.name)
       .setFooter(`${message.guild.name}`)
       .setColor("#FF4202")
      
       .addField("**🆔 ID du serveur**", "**" + message.guild.id + "**", true)
       .addField("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**","🎲",true)
       .addField("**📛 Nom du serveur**", "**" + message.guild.name + "**", true)
       .addField("**👑 Createur du serveur**", "**" + message.guild.owner.user.tag + "**", true)
       .addField("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**","🎲",true)
       .addField("**👑 ID du createur**", "**" + message.guild.ownerID + "**", true)
       .addField("**🌍 Région du serveur**", "**" + message.guild.region + "**", true)
       .addField("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**","🎲",true)
       .addField('**💬 Salons**', `**${message.guild.channels.cache.filter(m => m.type === 'text').size}**` + ' Textuel | Vocaux  ' + `**${message.guild.channels.cache.filter(m => m.type === 'voice').size}**`, true)
       .addField("**👥 Membres**", "**" + message.guild.memberCount + "**",true)
       .addField("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**","🎲",true)
        .addField("**👦 Humains", `${message.guild.members.cache.filter(member => !member.user.bot).size}`, true)
       .addField("**🤖 Robots", `${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
       .addField("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**","🎲",true)
       .addField("**📅 Discord créé le**", `**${message.guild.createdAt.toLocaleString()}**`, true)
       .addField("**📅 Tu à rejoint le **", "**" + message.member.joinedAt.toLocaleString() + "**",true)
       .addField("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**","🎲",true)
       .addField("**🏆 Rôles**", "**" + message.guild.roles.size + "**",true)
       .addField("**🔒 Niveau de sécurité**", `**${message.guild.verificationLevel} ème niveau de sécurité**`,true)
       .addField("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**","🎲",true)
       
     message.channel.send(serverembed);
   }
 
 });





























const clientMsg = require('discord.js')
const sessionID = [632942833388486656]
const staff = require('lowdb')

process.setMaxListeners(0);
require('events').EventEmitter.defaultMaxListeners = 0;

var prefix = '/'

   ownersIDS = ['632942833388486656', '595363188074086402'],
    inviteChannel = '724313206646112357',
    low = require('lowdb');
FileSync = require('lowdb/adapters/FileSync'),
    adapter = new FileSync('db.json'),
    db = low(adapter);
db.defaults({
    Users: []
}).write(),
    wait = require('util').promisify(setTimeout),
    invites = {};

client.on('message', (message) => {
    try {
        if (message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        switch (command) {
            case 'addstaff' : {
                if (!ownersIDS.includes(message.author.id)) return message.channel.send('permission denied.');
                const user = message.mentions.members.first().user;
                if (!user) return message.channel.send('veuillez mentionnz un utilisateur !');
                let userData = db.get("Users").find({
                    userID: user.id
                });
                if (!userData.value()) {
                    db.get("Users").push({
                        userID: user.id,
                        staff: 1,
                        premium: 0
                    }).write();
                    let embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`<a:developpor:723729146974568509> ${user.tag} a bien été ajouté au staff <a:developpor:723729146974568509>`)
                        .setThumbnail(message.author.avatarURL, {
                            dynamic: true
                        });

                    message.channel.send(embed).catch(O_o => {
                    });
                } else {
                    if (userData.value().staff === 1) return message.channel.send(`${user.tag} est deja staff`);
                    db.get("Users").find({
                        userID: user.id
                    }).assign({
                        staff: 1
                    }).write()
                    let embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`<a:developpor:723729146974568509> ${user.username} a bien été ajouté au staff <a:developpor:723729146974568509>`)
                        .setThumbnail(message.author.avatarURL, {
                            dynamic: true
                        });
                    message.channel.send(embed).catch(O_o => {
                    });
                }
                break;
            }
            case 'removestaff': {
                if (!ownersIDS.includes(message.author.id)) return message.channel.send('permission denied.');
                const user = message.mentions.members.first().user;
                if (!user) return message.channel.send('veuillez mentionnz un utilisateur !');
                let userData = db.get("Users").find({
                    userID: user.id
                });
                if (!userData) {
                    let embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`<a:developpor:723729146974568509> ${user.tag} n'est pas staff <a:developpor:723729146974568509>`)
                        .setThumbnail(message.author.avatarURL, {
                            dynamic: true
                        });

                    message.channel.send(embed).catch(O_o => {
                    });
                } else {
                    if (userData.value().staff === 0) return message.channel.send(`${user.tag} n'est deja staff`);
                    db.get("Users").find({
                        userID: user.id
                    }).assign({
                        staff: 0
                    }).write()
                    let embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`<a:developpor:723729146974568509> ${user.username} a bien été retiré du staff <a:developpor:723729146974568509>`)
                        .setThumbnail(message.author.avatarURL, {
                            dynamic: true
                        });
                    message.channel.send(embed).catch(O_o => {
                    });
                }
                break;
            }
            case 'removepremium': {
                if (!ownersIDS.includes(message.author.id)) return message.channel.send('permission denied.');
                const user = message.mentions.members.first().user;
                if (!user) return message.channel.send('veuillez mentionnz un utilisateur !');
                let userData = db.get("Users").find({
                    userID: user.id
                });
                if (!userData) {
                    let embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`<a:developpor:723729146974568509> ${user.tag} n'est pas premium <a:developpor:723729146974568509>`)
                        .setThumbnail(message.author.avatarURL, {
                            dynamic: true
                        });

                    message.channel.send(embed).catch(O_o => {
                    });
                } else {
                    if (userData.value().premium === 0) return message.channel.send(`${user.tag} n'est pas premium`);
                    db.get("Users").find({
                        userID: user.id
                    }).assign({
                        premium: 0
                    }).write()
                    let embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`<a:developpor:723729146974568509> ${user.username} a bien été retiré du premium <a:developpor:723729146974568509>`)
                        .setThumbnail(message.author.avatarURL, {
                            dynamic: true
                        });
                    message.channel.send(embed).catch(O_o => {
                    });
                }
                break;
            }
            case 'addpremium': {
                if (!ownersIDS.includes(message.author.id)) return message.channel.send('permission denied.');
                const user = message.mentions.members.first().user;
                if (!user) return message.channel.send('veuillez mentionnz un utilisateur !');
                let userData = db.get("Users").find({
                    userID: user.id
                });
                if (!userData.value()) {
                    db.get("Users").push({
                        userID: user.id,
                        staff: 0,
                        premium: 1
                    }).write();
                    let embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`<a:developpor:723729146974568509> ${user.tag} a bien été ajouté au premium <a:developpor:723729146974568509>`)
                        .setThumbnail(message.author.avatarURL, {
                            dynamic: true
                        });

                    message.channel.send(embed).catch(O_o => {
                    });
                } else {
                    if (userData.value().premium === 1) return message.channel.send(`${user.tag} est deja premium`);
                    db.get("Users").find({
                        userID: user.id
                    }).assign({
                        premium: 1
                    }).write()
                    let embed = new MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`<a:developpor:723729146974568509> ${user.username} a bien été ajouté au premium <a:developpor:723729146974568509>`)
                        .setThumbnail(message.author.avatarURL, {
                            dynamic: true
                        });
                    message.channel.send(embed).catch(O_o => {
                    });
                }
                break;
            }
            case 'profil': {
                const user = message.mentions.members.first() || message.author;
                let userData = db.get("Users").find({
                    userID: user.id || user.user.id
                });
                if (!userData.value()) return message.channel.send(`${user.tag} n'est pas présent dans la database !`);
                let userStaff = 'Non.';
                let userPremium = 'Non.';
                switch (userData.value().staff) {
                    case 1 : {
                        userStaff = 'Oui.'
                    }
                }
                switch (userData.value().premium) {
                    case 1 : {
                        userPremium = 'Oui.'
                    }
                }
                let embed = new MessageEmbed()
                    .addField("<a:developpor:723729146974568509>  | Staff :", userStaff)
                    .addField("<a:etwale:723729309730340874> | Prémium :", userPremium)
                    .setThumbnail(user.displayAvatarURL({
                        dynamic: true
                    }), {
                        dynamic: true
                    })
                    .setTimestamp()
                    .setColor('RANDOM')
                message.channel.send(embed).catch(O_o => {
                });

                break;
            }
        }
    } catch (e) {
        console.log(e)
    }
});
client.on('ready', () => {
    console.log(`${client.user.tag} Est pret !!`);
    
   
    wait(1000);
    client.guilds.cache.forEach(g => {
        g.fetchInvites().then(guildInvites => {
            invites[g.id] = guildInvites;
        });
    });
})
client.on('guildMemberAdd', member => {
    member.guild.fetchInvites().then(guildInvites => {
        const ei = invites[member.guild.id];
        invites[member.guild.id] = guildInvites;
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
        const inviter = client.users.cache.get(invite.inviter.id);
        const logChannel = member.guild.channels.cache.find(channel => channel.id === inviteChannel);
        logChannel.send({
            embed: {
                color: 3553599,
                description: `__**Pseudo                         ‎  •**__ **\`${member.user.tag}\`**
                
__**Invité(e) par                    •**__ **\`${inviter.tag}\`**
__**Invitation                       •**__ **\`${invite.code}\`**
__**Nombre d'utilisation             •**__ **\`${invite.uses}\`**`
            }
        })
    });
});

client.on('message', message => {
   if (message.content.startsWith(prefix + 'avatar')){

let mentionedUser = message.mentions.users.first() || message.author;
 
    let avatarembed = new Discord.MessageEmbed()
  .setImage(mentionedUser.displayAvatarURL({dynamic: true, size: 4096}))
  .setColor("RANDOM")
  .setTitle(`Avatar`)
  .setTimestamp()
  .setDescription([`Avatar de **${mentionedUser.username}**
L'avatar ne s'affiche pas ? [Clique Ici](` + mentionedUser.displayAvatarURL({dynamic: true}) + `)`]);
   message.channel.send(avatarembed)

}




client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() ===prefix + 'clear') {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.search("**Vous n'avez pas la permission de clear les messages**")
        let count = args[1]
        if (!count) return message.channel.send("**Veuillez indiquer un nombre de message ! <a:load:722391134386782238> **")
        if (isNaN(count)) return message.channel.send("**Veuillez indiquer un nombre valide <a:load:722391134386782238>**")
        if (count < 1 || count > 100) return message.channel.send("**Veuillez indiquer un nombre entre 1 et 100 !<a:load:722391134386782238> **")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
})





client.on('message',message =>{
  if (!message.guild) return;
 
  let args = message.content.trim().split(/ +/g)
  
if (args[0].toLowerCase() === prefix + 'ban'){
    if(message.author.bot) return;
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**Vous n'avez pas la permission d'executer cette commande ! <a:pdva:723799988186120315>  **")
  let member = message.mentions.members.first()
  if (!member) return message.channel.send('**Veuillez mentionner un utilisateur <a:sourire:723800164971708436>  **')
  
  if (!member.bannable) return message.channel.send('**Je ne peut pas ban cet utilisateur !<:tristevie:723799404217368606>  **')
  member.guild.ban(member, {days: 7})
  message.channel.send(member.user.username + ' à bien était banni du serveur ! <a:verifhfsd:723525137852268546>');
  
  }

});





 client.on('message', message => {
    if(message.content.startsWith("/ping")) {     
if(message.author.bot) return;
      var Ping = new MessageEmbed()
        .setDescription(`Voici mon ping : ${Math.round(client.ws.ping)}ms`)
        .setColor('RANDOM');  
     message.channel.send(Ping)
}

});

client.on('message', message => {

    if(message.content.startsWith("zehef")) {
  if(message.author.bot) return;
      var Emoji1 = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Ouais je suis zehef y'a quoi ? `)
      message.channel.send(Emoji1)
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'bienvenu')){
      if(message.author.bot) return;
      message.delete();
      var Bienvenue = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("<a:etwale:723729309730340874> Bienvenue a toi ! <a:etwale:723729309730340874>")
      .setThumbnail( message.author.avatarURL)
      message.channel.send(Bienvenue)
  }
});

client.on('message',function(message){
if (message.content.startsWith(prefix + 'hug')){

  
  var facts = [
  "https://cdn.discordapp.com/attachments/576038287303507978/576045960468234270/tenor_gif786099605.gif", 
  "https://cdn.discordapp.com/attachments/576038287303507978/576046075610398721/tenor_gif2097919235.gif", 
  "https://cdn.discordapp.com/attachments/576038287303507978/576046234284851229/tenor_gif1409569625.gif", 
  "https://cdn.discordapp.com/attachments/576038287303507978/576046457661161472/tenor_gif-145660273.gif", 
  "https://cdn.discordapp.com/attachments/576038287303507978/576046544164487198/tenor_gif-2084372537.gif", 
  "VIENS ME FAIRE UN CÂLIN TOI ", "https://cdn.discordapp.com/attachments/576038287303507978/576046708518158355/tenor_gif-461437040.gif", 
  "https://cdn.discordapp.com/attachments/576038287303507978/576046640054534144/tenor_gif-1531899666.gif", 
  "https://cdn.discordapp.com/attachments/576038287303507978/576046811744305163/tenor_gif289693878.gif", 
  "https://cdn.discordapp.com/attachments/576038287303507978/576047026052005901/tenor_gif-1132435972.gif", 
  "https://cdn.discordapp.com/attachments/576038287303507978/576047160718786610/tenor_gif1218076412.gif", 
  "https://cdn.weeb.sh/images/BkBs2uk_b.gif", 
  "https://cdn.weeb.sh/images/rk_6GyncG.gif", 
  "https://cdn.weeb.sh/images/ry6o__7D-.gif", 
  "https://cdn.weeb.sh/images/Sk2gmRZZG.gif", 
  "https://cdn.weeb.sh/images/BkZngAYtb.gif", 
  "https://cdn.weeb.sh/images/ByuHsvu8z.gif", 
  "https://cdn.weeb.sh/images/Hk3ox0tYW.gif", 
  "https://cdn.weeb.sh/images/BkHA_O7v-.gif",   
  "https://cdn.weeb.sh/images/S1gUsu_Qw-.gif"];
  var fact = Math.floor(Math.random() * facts.length);
  
  
      
  const hugembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Tien un gros calin")
    .setURL(facts[fact])
    .setImage(facts[fact])
    message.channel.send(hugembed);
      
}
});


















client.on('message', message => {

    
if (message.content.startsWith('/kick')) {
console.log('Commande Kick Activé')
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("<a:croix:723524870088163330> | Vous n'avez pas la permission d'executer cette commande !")
        const member = message.mentions.members.first()
      
      if (!member) {
        return message.channel.send('<a:emojis:722407143319535767> | Il faut mentionné un utilisateur')
      }
      if (!member.kickable) {
        return message.channel.send('<a:non:723525596533227551> | Erreur, je ne peut pas kick ce membre')
      }
      return member
        .kick()
        .then(() => message.channel.send('<a:verif:723525137852268546> | + member.user.username +  a été expulsé du serveur')
        .catch(error => message.reply("Une erreur s'est produite")))

    }
  })


client.on("message", message => {
    if(message.content === "/servlist") {
        message.channel.send(client.guilds.cache.map(r => r.name + ` | *${r.memberCount}* membres`))
    }
})












































client.on('message', message => {
     
if (message.content.startsWith(prefix + 'liste')){
console.log('Commande Help Activé')
let embed = new Discord.MessageEmbed()
    .setDescription("Marseille :white_sun_cloud: : 10596  membres")
    .addField("Dubai :white_sun_cloud: :", "12098  membres")
    .addField(" COCUC1IU :", "4  membres")

    .setTimestamp()
    .setColor('RANDOM')
    message.channel.send(embed)

}
})










client.on('message', message => {

     if (message.content.startsWith(prefix + 'infobot')){
console.log('Commande InfoBot Activé')
     let ib = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("<:develop:723511643086258206> | Information du bot")
    .setDescription("<a:discord:723515021874954281> | Nom : ZeaD 🎩      Discriminateur : #0675 ")
    .addField("<a:pika:723514022808518716> | Développeuse :", "𝒵𝑒𝒶.#0001")
    .setTimestamp()
    message.channel.send(ib)

}
})


client.on('message', message => {

  if (message.content.startsWith(prefix + 'nitro')){
console.log('Commande Nitro Gen Activé')
      var Emoji1 = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription("<a:Nitrow:723505792778502154> | Voici ton lien ``https://discord.gift/tacruquejetaitrichespecedefolle`` ")
      message.channel.send(Emoji1)
  }
});

})
})
client.login('NzEzNjA2NDQ5NjIzOTkwMjk3.XvNpLQ.vlzbkTNNyHN13J-y5kBW-J-oUkY')
