import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MainComponent} from "../main/main.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, FormsModule, MainComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  isDarkMode = false;

}
