import { getValue } from './utility';
import { Result } from './result';
import { Player } from './player';
import { Scoreboard } from './scoreboard';

export class Game {
  private _scoreboard: Scoreboard = new Scoreboard();

  constructor(public player: Player, public problemCount: number, public factor: number) {}

  displayGame(): void {
    let gameForm: string = '';
    for (let i = 1; i <= this.problemCount; i += 1) {
      gameForm += `<div class="mb-3">
          <label for="answer-${i}" class="form-label">${String(this.factor)} &times; ${i} =</label>
          <input type="number" id="answer-${i}" class="form-control form-control-sm" />
        </div>`;
    }

    const gameElement: HTMLElement = document.querySelector('#game')!;
    gameElement.innerHTML = gameForm;

    document.querySelector('#calculate')!.removeAttribute('disabled');
  }

  calculateScore(): void {
    let score: number = 0;
    for (let i = 1; i <= this.problemCount; i++) {
      const answer: number = Number(getValue(`answer-${i}`));
      if (i * this.factor === answer) {
        score++;
      }
    }

    const result: Result = {
      factor: this.factor,
      playerName: this.player.name,
      problemCount: this.problemCount,
      score
    };

    this._scoreboard.addResult(result);
    this._scoreboard.updateScoreboard();

    document.querySelector('#calculate')!.setAttribute('disabled', 'true');
  }  
}
