import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecipeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})
export class RecipeDetailPage {

  recipe = {
    name: "Chili",
    description: "A hearty beef chili",
    ingredients: [
      {
        name: "ground beef",
        quantity: "1 lb",
      },
      {
        name: "green pepper",
        quantity: "1 medium sized",
      },
    ],
    instructions: [
      {
        step: 1,
        description: "Heat oil in large sauce pan",
      },
      {
        step: 2,
        description: "Chop green pepper",
      },
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailPage');
  }

}
