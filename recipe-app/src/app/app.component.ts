import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, RecipeComponent, ShoppingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-app';
  loadedFeature='recipe';
  onNavigate(feature:string){
    this.loadedFeature=feature;
  }
}
