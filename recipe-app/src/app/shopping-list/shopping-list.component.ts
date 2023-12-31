import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {Ingredient} from "../shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
    imports: [CommonModule, ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
 ingredients:Ingredient[]=[
     new Ingredient('eggs',5),
     new Ingredient('tomatoes',8),
 ];

 constructor() {
 }
}
