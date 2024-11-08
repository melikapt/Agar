const io = require('../server').io;
const Orb = require('./classes/orb');
const Player = require('./classes/Player');
const PlayerData = require('./classes/PlayerData');
const PlayerConfig = require('./classes/PlayerConfig');

let orbs = [];
let players = [];
const settings = {
    defaultOrbs: 50,
    defaultSpeed: 6,
    defaultRadius: 5,
    worldWidth: 500,
    worldHeight: 500,
    defaultZoom: 1.5
}

initGame();

io.sockets.on('connect', (socket) => {
    console.log('client connect...');

    socket.on('init', (data) => {

        const playerData = new PlayerData(data.playerName, settings);
        const playerConfig = new PlayerConfig(settings);
        const player = new Player(socket.id, playerData, playerConfig);

        socket.emit('initReturn', { orbs })
        players.push(playerData);
    })

})

function initGame() {
    for (let i = 0; i < settings.defaultOrbs; i++) {
        orbs.push(new Orb(settings));
    }
}

module.exports = io;