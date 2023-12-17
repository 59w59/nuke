const rpc = require('discord-rpc')
const rpcClient = new rpc.Client({
    transport: 'ipc'
})

class RPC {
    run() {
        rpcClient.on('ready', () => {
            rpcClient.request('SET_ACTIVITY', {
                pid: process.pid,
                activity: {
                    details: "The best coder",
                    state: '59logs',
                    assets: {
                        large_image: "https://images.wallpapersden.com/image/wxl-glowing-sharingan-hd-naruto_80178.jpg",
                        large_text: "Scrypts"
                    },
                    buttons: [{
                        label: "Download",
                        url: ""
                    }]
                }
            })
        })

        rpcClient.login({
            clientId: '1030180767097176155'
        }).catch(() => {}).then(() => console.log('RPC connected!'))
    }
}

module.exports = RPC
