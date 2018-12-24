import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';

/**
 * Generated class for the RecipeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {

  list = [
    {
      id: 1,
      name: "Chili",
      description: "A hearty meat chili.",
      image: "https://pngimage.net/wp-content/uploads/2018/05/bowl-of-chili-png.png",
    }
  ]

  detailPage = RecipeDetailPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeListPage');
  }

  navPush(item:any) {
    this.navCtrl.push("RecipeDetailPage");
  }

}
