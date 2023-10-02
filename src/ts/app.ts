function startGame(_v: any): void {
  _v.preventDefault();

  const playerName: string | undefined = getInputValue('player-name');
  logPlayer(playerName);

  postScore(-1, playerName);

  const messagesElement: HTMLElement | null = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting a new game...';  
}

function logPlayer(_name: string = 'Fast Junkie...'): void {
  console.debug('New game started for player: %s', _name);
}

function postScore(_score: number, _playerName: string = 'Fast Junkie...'): void {
  let logger: (value: string) => void;
  logger = (_score < 0) ? logError : logMessage;

  const elem: HTMLElement | null = document.getElementById('posted-scores'); 
  elem!.innerText = `${_score} - ${_playerName}`;

  logger(`Score: ${_score}`);
}

function getInputValue(selector: string): string | undefined {
  const elem: HTMLInputElement = <HTMLInputElement>document.getElementById(selector);
  return (elem.value !== '') ? elem.value : undefined;
}

const logMessage = (message: string): void => console.debug(message);
const logError = (error: string): void => console.error(error);

document.getElementById('start-game')!.addEventListener('click', startGame);
