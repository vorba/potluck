import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SearchFiltersPage } from '../search-filters/search-filters';

@IonicPage()
@Component({
  selector: 'page-meals-sell-list',
  templateUrl: 'meals-sell-list.html',
})
export class MealsSellListPage {

  profile = {
    id: 1,
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
      review: 4,
      price: 3,
      description: "",
      serving: "250 ml",
      image: "https://pngimage.net/wp-content/uploads/2018/05/bowl-of-chili-png.png",
      sold: 3,
      available: 1,
      cook: {
        id: 1,
        name: "John Doe",
      },
    },
    {
      id: 1,
      name: "Chili",
      review: 3,
      price: 3,
      description: "",
      image: "https://pngimage.net/wp-content/uploads/2018/05/bowl-of-chili-png.png",
      sold: 3,
      available: 1,
      cook: {
        id: 1,
        name: "John Doe",
      },
    },
    {
      id: 1,
      name: "Chili",
      review: 4,
      price: 3,
      description: "",
      image: "https://pngimage.net/wp-content/uploads/2018/05/bowl-of-chili-png.png",
      sold: 3,
      available: 1,
      cook: {
        id: 1,
        name: "John Doe",
      },
    },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuListPage');
    console.log(this.list);
  }

  navPush(item:any) {
    this.navCtrl.push("MenuDetailPage");
  }

  currentItems: any[];

  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.list; /* this.items.query({
      name: val
    }); */
  }

  showSearchFiltersModal() {
    const modal = this.modalCtrl.create("SearchFiltersPage");
    modal.present();
  }

}
