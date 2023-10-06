import { init } from '.';
import { Player } from './player';
import { Game } from './game';
import * as Util from './utility';

init();

let _game: Game;
document.querySelector('#start-game')!.addEventListener('click', (_v) => {
  _v.preventDefault();
  const _player: Player = new Player();
  _player.name = Util.getValue('player-name') || 'Actuary';

  const _problemCount: number = Number(Util.getValue('problem-count'));
  const _factor: number = Number(Util.getValue('factor'));
  _game = new Game(_player, _problemCount, _factor);
  _game.displayGame();
}, false);

document.querySelector('#calculate')!.addEventListener('click', (_v) => {
  _v.preventDefault();
  _game.calculateScore();
}, false);
