class Utility {
  static getInputValue(selector: string): string {
    const elem: HTMLInputElement = <HTMLInputElement>document.getElementById(selector);
    return elem.value;
  }
}