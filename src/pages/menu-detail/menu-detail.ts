import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDetailPage');

    this.loadMap();
  }
 
  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let address = "31 Prestwick Cres, North York ON"; // document.getElementById('address').value;
      latLng = this.codeAddress(address);
  
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        
      }
  
      this.map = new google.maps.Map(this.map.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: "test",
      });

    }, (err) => {
      console.log(err);
    });
  }

 codeAddress(address:string) {
    let geocoder = new google.geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        this.map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}
