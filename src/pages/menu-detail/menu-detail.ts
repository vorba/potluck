import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-menu-detail',
  templateUrl: 'menu-detail.html',
})
export class MenuDetailPage {

  item = {
    name: "Chili",
    price: 3,
  }

  customer = {
    payment: {
      source: {
      type: "VISA",
      },
      name: "Adam B. Cox",
      description: "**** 4242",
      expiry: "01/22"
    }
  }

  @ViewChild('map') map: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDetailPage');

    this.loadMap();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.map.nativeElement, mapOptions);
 
  }

}
