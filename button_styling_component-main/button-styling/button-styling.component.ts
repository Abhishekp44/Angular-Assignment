import { Component } from '@angular/core';

@Component({
  selector: 'app-button-styling',
  templateUrl: './button-styling.component.html',
  styleUrls: ['./button-styling.component.css']
})
export class ButtonStylingComponent {
  buttonStyles = {
    'color': 'red',
    'font-weight': 'bold'
  };
}