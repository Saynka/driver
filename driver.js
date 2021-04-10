'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';
const socket = io.connect(host);
const capsSocket = io.connect(`${host}/caps`);
require('dotenv').config();

capsSocket.emit('getAll');

capsSocket.on('pickup', payload => {
  setTimeout(() => {
    socket.emit('received', payload);
    console.log(`NEW-ORDER *****: ${payload.orderId} PICK-UP @ ${payload.address} PHONE: ${payload.phoneNumber}`);
    capsSocket.emit('in-transit', payload);
  }, 4000);
});


capsSocket.on('in-transit', payload => {
  setTimeout(() => {
    capsSocket.emit('pickup', payload),
      capsSocket.emit('delivered', payload);
  }, 10000);
});

capsSocket.on('delivered', payload => {
  setTimeout(() => {
    console.log(`ORDER *****: ${payload.orderId} HAS BEEN DELIVERED @ ${payload.address} PHONE: ${payload.phoneNumber}`);
  }, 6000);
});

console.log('DRIVERS-LIVE');


// function pickUp(payload) {
//   setTimeout(() => {
//     console.log(`PICKED UP: ORDER ID ${payload.fake.orderId}`)
//     capsSocket.emit('in-transit', payload)
//   }, 1000)
// }

// function inTransit(payload) {
//   setTimeout(() => {
//     console.log(`ITEM IN TRANSIT: ORDER NUMBER: ${payload.fake.orderId}\n`)
//     capsSocket.emit('delivered', payload)
//   }, 3000)
// }


