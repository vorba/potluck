import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MealsTabs_Buy, MealsTabs_Sell, MealsTabs_History } from '../';

@IonicPage()
@Component({
  selector: 'page-meals-tabs',
  templateUrl: 'meals-tabs.html',
})
export class MealsTabsPage {

  tab1Root: any = MealsTabs_Sell;
  tab2Root: any = MealsTabs_Sell;
  tab3Root: any = MealsTabs_Sell;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealsTabsPage');
  }

}
