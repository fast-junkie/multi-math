function startGame(_v: any) {
  _v.preventDefault();

  let playerName: string = 'Fast Junkie...';
  logPlayer(playerName);

  const messagesElement: HTMLElement | null = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting a new game...';  
}

function logPlayer(...args: any[]): void {
  const [name] = args;
  console.debug('New game started for player: %s', name);
}

document.getElementById('start-game')!.addEventListener('click', startGame);
