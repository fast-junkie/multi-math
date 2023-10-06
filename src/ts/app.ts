/// <reference path="game.ts" />
/// <reference path="player.ts" />

let _game: Game;
document.querySelector('#start-game')!.addEventListener('click', (_v) => {
  _v.preventDefault();
  const _player: Player = new Player();
  _player.name = Utility.getInputValue('player-name');

  const _problemCount: number = Number(Utility.getInputValue('problem-count'));
  const _factor: number = Number(Utility.getInputValue('factor'));
  _game = new Game(_player, _problemCount, _factor);
  _game.displayGame();
}, false);

document.querySelector('#calculate')!.addEventListener('click', (_v) => {
  _v.preventDefault();
  _game.calculateScore();
}, false);
