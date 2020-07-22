import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.14:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subcribeFuntion){
    socket.on('new-dev', subcribeFuntion);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longtude, 
        techs,
    }
    socket.connect();
 }


function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};