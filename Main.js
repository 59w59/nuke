const { Client } = require('discordjs-selfv11'),
    Enmap = require('enmap'),
    fs = require('fs'),
    colors = require('colors'),
    center = require('center-align');

    const RPC = require('./rpcModule'),
    rpc = new RPC ()

const client = new Client(),
    { token, prefix } = require('./config.json')

process.on('unhandledRejection', e => {});
process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};

client.commands = new Enmap();

client.on("error", (e) => {});
client.on("warn", (e) => {});

(async function() {
    console.clear()
    process.title = '59w59 - Loading...'
    console.log(center(`

                
▓█████   ██████   █████▒▒█████   ██▓    ▄▄▄      
▓█   ▀ ▒██    ▒ ▓██   ▒▒██▒  ██▒▓██▒   ▒████▄    
▒███   ░ ▓██▄   ▒████ ░▒██░  ██▒▒██░   ▒██  ▀█▄  
▒▓█  ▄   ▒   ██▒░▓█▒  ░▒██   ██░▒██░   ░██▄▄▄▄██ 
░▒████▒▒██████▒▒░▒█░   ░ ████▓▒░░██████▒▓█   ▓██▒
░░ ▒░ ░▒ ▒▓▒ ▒ ░ ▒ ░   ░ ▒░▒░▒░ ░ ▒░▓  ░▒▒   ▓▒█░
 ░ ░  ░░ ░▒  ░ ░ ░       ░ ▒ ▒░ ░ ░ ▒  ░ ▒   ▒▒ ░
   ░   ░  ░  ░   ░ ░   ░ ░ ░ ▒    ░ ░    ░   ▒   
   ░  ░      ░             ░ ░      ░  ░     ░  ░
                                                 
▒██   ██▒ ▒█████  ▄▄▄█████▓ ▄▄▄                  
▒▒ █ █ ▒░▒██▒  ██▒▓  ██▒ ▓▒▒████▄                
░░  █   ░▒██░  ██▒▒ ▓██░ ▒░▒██  ▀█▄              
 ░ █ █ ▒ ▒██   ██░░ ▓██▓ ░ ░██▄▄▄▄██             
▒██▒ ▒██▒░ ████▓▒░  ▒██▒ ░  ▓█   ▓██▒            
▒▒ ░ ░▓ ░░ ▒░▒░▒░   ▒ ░░    ▒▒   ▓▒█░            
░░   ░▒ ░  ░ ▒ ▒░     ░      ▒   ▒▒ ░            
 ░    ░  ░ ░ ░ ▒    ░        ░   ▒               
 ░    ░      ░ ░                 ░  ░            

 
                                                        `.red, 110));
    client.on('ready', async() => {
        console.clear()
        process.title = `59logs - ${client.user.tag}`
        console.log(`
                                              
         
                                                                                                                                                    
      
      
                             
                                59w59 - LOGADO EM: ${client.user.tag}
        `.pink, )
        console.log(`

▓█████   ██████   █████▒▒█████   ██▓    ▄▄▄      
▓█   ▀ ▒██    ▒ ▓██   ▒▒██▒  ██▒▓██▒   ▒████▄    
▒███   ░ ▓██▄   ▒████ ░▒██░  ██▒▒██░   ▒██  ▀█▄  
▒▓█  ▄   ▒   ██▒░▓█▒  ░▒██   ██░▒██░   ░██▄▄▄▄██ 
░▒████▒▒██████▒▒░▒█░   ░ ████▓▒░░██████▒▓█   ▓██▒
░░ ▒░ ░▒ ▒▓▒ ▒ ░ ▒ ░   ░ ▒░▒░▒░ ░ ▒░▓  ░▒▒   ▓▒█░
 ░ ░  ░░ ░▒  ░ ░ ░       ░ ▒ ▒░ ░ ░ ▒  ░ ▒   ▒▒ ░
   ░   ░  ░  ░   ░ ░   ░ ░ ░ ▒    ░ ░    ░   ▒   
   ░  ░      ░             ░ ░      ░  ░     ░  ░
                                                 
▒██   ██▒ ▒█████  ▄▄▄█████▓ ▄▄▄                  
▒▒ █ █ ▒░▒██▒  ██▒▓  ██▒ ▓▒▒████▄                
░░  █   ░▒██░  ██▒▒ ▓██░ ▒░▒██  ▀█▄              
 ░ █ █ ▒ ▒██   ██░░ ▓██▓ ░ ░██▄▄▄▄██             
▒██▒ ▒██▒░ ████▓▒░  ▒██▒ ░  ▓█   ▓██▒            
▒▒ ░ ░▓ ░░ ▒░▒░▒░   ▒ ░░    ▒▒   ▓▒█░            
░░   ░▒ ░  ░ ▒ ▒░     ░      ▒   ▒▒ ░            
 ░    ░  ░ ░ ░ ▒    ░        ░   ▒               
 ░    ░      ░ ░                 ░  ░            

                                                         
        
        `.red, )
        rpc.run()
        console.log(`
                ${prefix}nuke   = fuck or server
                ${prefix}banall = banir membros
                ${prefix}chn    = criar canal
                ${prefix}marcar = marcar everyone
                ${prefix}purge  = remover inativos
        `.red, )
    })

    fs.readdir("./cmds/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let props = require(`./cmds/${file}`);
            let commandName = file.split(".")[0];
            client.commands.set(commandName, props);
        });
    });

    client.on('message', async(msg) => {
        if (msg.content.indexOf(prefix) !== 0) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/g),
            command = args.shift().toLowerCase(),
            cmd = client.commands.get(command);

        if (msg.author.id !== client.user.id) return;

        if (!cmd) {
            console.log(` [x] Unknown command.`.yellow)
        } else {
            cmd.run(client, msg, args)
        }
        console.log(` [-] Executed command: ${command}`.yellow)
    })

    client.login(token).catch(() => {
        console.log(`
     

                           ███████╗ █████╗ ██╗██╗         
                           ██╔════╝██╔══██╗██║██║         
                           █████╗  ███████║██║██║         
                           ██╔══╝  ██╔══██║██║██║         
                           ██║     ██║  ██║██║███████╗    
                           ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝    


        `.yellow);
    });

    

})();