import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessfulAlertComponent } from './successful-alert/successful-alert.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,WarningAlertComponent,SuccessfulAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-1';
}
