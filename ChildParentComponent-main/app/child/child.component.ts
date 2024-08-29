import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="multiplyNumbers()">Multiply Numbers</button>
  `
})
export class ChildComponent {
  @Output() multiplyResult = new EventEmitter<number>();
  number1: number = 5;
  number2: number = 10;

  multiplyNumbers(): void {
    const result = this.number1 * this.number2;
    this.multiplyResult.emit(result);
  }
}