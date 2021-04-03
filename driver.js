'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';
const socket = io.connect(host);
const capsSocket = io.connect(`${host}/caps`);
require('dotenv').config();

capsSocket.on('pickup', pickUp)
capsSocket.on('in-transit', inTransit)

function pickUp(payload) {
  setTimeout(() => {
    console.log(`PICKED UP: ORDER ID ${payload.fake.orderId}`)
    capsSocket.emit('in-transit', payload)
  }, 1000)
}

function inTransit(payload) {
  setTimeout(() => {
    console.log(`ITEM IN TRANSIT: ORDER NUMBER: ${payload.fake.orderId}\n`)
    capsSocket.emit('delivered', payload)
  }, 3000)
}


