import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'; 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
