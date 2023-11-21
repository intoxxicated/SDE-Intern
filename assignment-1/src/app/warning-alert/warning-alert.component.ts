import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-warning-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p> This is Alert Warning !</p>
  `,
  styles:[`
  p{
    padding: 20px;
    background-color: mistyrose;
    border: 2px solid red;
  }
  `]
})
export class WarningAlertComponent {

}
