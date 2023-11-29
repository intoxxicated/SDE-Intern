import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
    imports: [CommonModule, RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
recipe :Recipe[]=[
  new Recipe('Recipe-1','This is Recipe-1','https://img.taste.com.au/h2qVkJjl/taste/2021/09/air-fryer-chicken-rissoles-recipe-173558-1.jpg'),
  new Recipe('Recipe-1','This is Recipe-1','https://img.taste.com.au/h2qVkJjl/taste/2021/09/air-fryer-chicken-rissoles-recipe-173558-1.jpg'),
  new Recipe('Recipe-1','This is Recipe-1','https://img.taste.com.au/h2qVkJjl/taste/2021/09/air-fryer-chicken-rissoles-recipe-173558-1.jpg'),
  new Recipe('Recipe-1','This is Recipe-1','https://img.taste.com.au/h2qVkJjl/taste/2021/09/air-fryer-chicken-rissoles-recipe-173558-1.jpg'),
];

constructor() {
}

@Output() recipeThatSelected= new EventEmitter();
onRecipeSelected()
{
  this.recipeThatSelected.emit(this.recipe);
}

}
