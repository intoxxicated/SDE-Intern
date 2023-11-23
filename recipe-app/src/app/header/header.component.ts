import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

// @ts-ignore
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
@Output() featureSelected=new EventEmitter();
ngOnInit() {
}
constructor() {
}
onSelect(feature:string)
{
  this.featureSelected.emit(feature);
}
}
