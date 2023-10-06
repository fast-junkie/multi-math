function getInputValue(selector: string): string {
    const elem: HTMLInputElement = <HTMLInputElement>document.getElementById(selector);
    return elem.value;
  }
function logger(message: string): void { console.debug('logger -> %o', message) }

export { getInputValue as getValue, logger }