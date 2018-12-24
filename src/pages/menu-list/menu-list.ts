import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {

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

  list = [
    {
      id: 1,
      name: "Chili",
      price: "3",
      description: "",
      image: "https://pngimage.net/wp-content/uploads/2018/05/bowl-of-chili-png.png",
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuListPage');
    console.log(this.list);
  }

}
