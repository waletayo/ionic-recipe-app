import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shoppingList";
import {Ingredient} from "../../models/ingredient";

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

listItems: Ingredient[];

  constructor(private slService :ShoppingListService){}
ionViewWillEnter(){
    this.loadItems()

}

onAddItem(form :NgForm){
  this.slService.addItem(form.value.ingredientName,form.value.amount);
form.reset();
this.loadItems();
}
onCheckItem(index: number){
    this.slService.removeItem(index);
  this.loadItems();
}

private  loadItems(){
  this.listItems=this.slService.getItems();
}
}
