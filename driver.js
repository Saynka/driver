'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';
const socket = io.connect(host);
const driverSocket = io.connect(`${host}/caps`);
require('dotenv').config();

driverSocket.on('pickup', pickUp)
driverSocket.on('in-transit', inTransit)

function pickUp(payload) {
  setTimeout(() => {
    console.log(`PICKED UP: ORDER ID ${payload.orderId}`)
    driverSocket.emit('in-transit', payload)
  }, 1000)
}

function inTransit(payload) {
  setTimeout(() => {
    console.log(`ITEM IN TRANSIT: ORDER NUMBER: ${payload.orderId}\n`)
    driverSocket.emit('delievered', payload)
  }, 3000)
}

module.exports = {
  pickUp: pickUp,
  inTransit: inTransit
}
