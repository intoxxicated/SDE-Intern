import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {UserDetailsComponent} from "./user-details/user-details.component";
import {ChildComponent} from "./child/child.component";
import {UsdInrPipe} from "./pipes/usd-inr.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserDetailsComponent, ChildComponent, UsdInrPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'reusable-components';
  userDetails=[
    {name:'X', email:'x@gmail.com'},
    {name:'Y', email:'y@gmail.com'},
    {name:'Z', email:'z@gmail.com'},
  ];

  updateData(item:string){
    console.warn(item);
  }

  getVal(item:any)
  {
    console.warn(item);
  }
  text:string='Basic Pipes in Angular';
  today=Date();
}
