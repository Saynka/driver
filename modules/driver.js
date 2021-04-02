'use strict';

const socket = require('../index.js');

socket.on('pickup', pickUp)
socket.on('in-transit', inTransit)

function pickUp(payload) {
  setTimeout(() => {
    console.log(`PICKED UP: ORDER ID ${payload.orderId}`)
    socket.emit('in-transit', payload)
  }, 1000)
}

function inTransit(payload) {
  setTimeout(() => {
    console.log(`ITEM IN TRANSIT: ORDER NUMBER: ${payload.orderId}\n`)
    socket.emit('delievered', payload)
  }, 3000)
}

module.exports = {
  pickUp: pickUp,
  inTransit: inTransit
}