"use strict";
function startGame(_v) {
    _v.preventDefault();
    // starting a new game
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
}
document.getElementById('start-game').addEventListener('click', startGame);
