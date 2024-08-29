import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() gameEvent = new EventEmitter<number>();
  intervalRef: any;
  counter: number = 0;

  onStartGame() {
    this.intervalRef = setInterval(() => {
      this.counter++;
      this.gameEvent.emit(this.counter);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalRef);
  }
}