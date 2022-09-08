import * as tokenService from './services/tokenService';

const socket = window.io();
let setGame = null;

/*--- This is so that this module can setState on App ---*/
export function registerSetGame(fn) {
  setGame = fn;
}

/*--- Listeners for messages from server ---*/
socket.on('update-game', function(game) {
  setGame(game);
});


/*--- Functions that send messages to the server ---*/
export function getActive() {
  socket.emit('get-active', tokenService.getToken());
}

export function newGame() {
  socket.emit('new-game', tokenService.getToken());
}

export function joinGame(gameId) {
  socket.emit('join-game', {
    token: tokenService.getToken(),
    gameId
  });
}

export function move(idx) {
  socket.emit('move', {
    token: tokenService.getToken(),
    idx
  });
}

export function logout() {
  socket.emit('logout', tokenService.getToken());
}
