import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test',
    'https://img.delicious.com.au/nnO4GCmJ/w759-h506-cfill/del/2015/10/baked-spinach-and-tomato-omelette-11971-1.jpg'),

    new Recipe('A Test Recipe',
    'This is simply a test',
    'https://img.delicious.com.au/nnO4GCmJ/w759-h506-cfill/del/2015/10/baked-spinach-and-tomato-omelette-11971-1.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
