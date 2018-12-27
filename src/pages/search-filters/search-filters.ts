import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SearchFiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const minUpper = 2;
const maxLower = 4;

@IonicPage()
@Component({
  selector: 'page-search-filters',
  templateUrl: 'search-filters.html',
})
export class SearchFiltersPage {

  distance: number = 5;
  price: any = { lower: 1, upper: 5 };
  priority: any = "r";
  lastLower: number = this.price.lower;
  lastUpper: number = this.price.upper;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchFiltersPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  onPriceRangeChange(e:any) {
    if (this.price.upper < minUpper) this.price.upper = minUpper;
    if (this.price.lower > maxLower) this.price.lower = maxLower;
    if (this.lastLower < this.price.lower) {
      if (this.price.lower === this.price.upper) this.price.upper++;
    } else {
      if (this.price.lower === this.price.upper) this.price.lower--;
    }
    this.lastLower = this.price.lower;
    this.lastUpper = this.price.upper;
    console.log(e);
  }
}
