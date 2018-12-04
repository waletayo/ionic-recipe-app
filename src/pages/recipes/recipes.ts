import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditRecipePage} from "../edit-recipe/edit-recipe";

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
onNewRecipe(){
    this.navCtrl.push(EditRecipePage,{mode: 'New'});

}
}
