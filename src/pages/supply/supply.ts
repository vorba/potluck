import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supply',
  templateUrl: 'supply.html',
})
export class SupplyPage {

  profile = {
    name: "John Doe",
    location: "50 Graydon Hall Drive, North York ON M3A 3A4", // google place
    review: {
      rating: 4.3, // out of 5
      comments: [
        {
          comment: "",
          rate: 4.3,
        }
      ]
    },
    cuisine: [
      "Mexicana",
    ]
  };

  data = {
    title: "Menu",
    menu: [
      {
        start: {
          label: "From",
          value: "Dec 23, 2018",
        },
        end: {
          label: "Thru", 
          value: null,
        },
        serving:
        {
          description: "Small bowl (7oz)",
          available: 3,
        },
        recipe: {
          title: "Chili",
          image: "https://pngimage.net/wp-content/uploads/2018/05/bowl-of-chili-png.png",
          ingredients: [
            {
              name: "beef",
              quantity: "1 lbs", // could be measure + quantity
            }
          ]
        }
      }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupplyPage');
    console.log(this.data);
  }

}
