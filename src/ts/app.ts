function startGame(_v: any) {
  _v.preventDefault();
  // starting a new game
  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
}

document.getElementById('start-game')!.addEventListener('click', startGame);
