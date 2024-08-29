import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <app-child (multiplyResult)="onMultiplyResult($event)"></app-child>
  `
})
export class ParentComponent {
  onMultiplyResult(result: number): void {
    console.log('Multiplication Result:', result);
  }
}