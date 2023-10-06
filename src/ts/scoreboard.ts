import { Result } from './result';

export class Scoreboard {
  private results: Result[] = [];

  addResult(_result: Result): void {
    this.results.push(_result);
  }

  updateScoreboard(): void {
    let output: string = '<h4>Scoreboard</h4>';
    Object
      .keys(this.results)
      .forEach((_i: string) => {
        const result: Result = this.results[parseInt(_i, 10)];
        output += `<p>${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}</p>`;
      });

    const scoresElement: HTMLElement = document.getElementById('scores')!;
    scoresElement.innerHTML = output;
  }
}