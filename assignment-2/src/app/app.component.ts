import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-2';
  bgColor= false;
  color='';
  counter=0;
  log=[];
  decrement=false;
  username:string='';

  getColor()
  {
    return this.bgColor ? '#DAF7A6': 'white';
  }
  onClick(){
  if(this.decrement)
  {
    this.counter=this.counter-1;
  }
  else
    this.counter=this.counter+1;


  }
}
