import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'This is simply a test',
        'https://img.delicious.com.au/nnO4GCmJ/w759-h506-cfill/del/2015/10/baked-spinach-and-tomato-omelette-11971-1.jpg'),
    
        new Recipe('Another Test Recipe',
        'This is simply a test',
        'https://img.delicious.com.au/nnO4GCmJ/w759-h506-cfill/del/2015/10/baked-spinach-and-tomato-omelette-11971-1.jpg'),
      ];

    getRecipes(){
        return this.recipes.slice();
        //$ Only return a copy of the array
    }

}