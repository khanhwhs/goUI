import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PassDriverPage } from '../pass-driver/pass-driver';
import { Http } from '@angular/http';
import { DriverHomePage } from '../driver-home/driver-home';
import { PassengerHomePage } from '../passenger-home/passenger-home';

/**
 * Generated class for the PassFronEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pass-fron-end',
  templateUrl: 'pass-fron-end.html',
})
export class PassFronEndPage {
  passingJson : any;

  data : any;
  isDataAvai : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    
    this.passingJson = JSON.parse(this.navParams.get('data')); 
  }

  ionViewDidLoad() {
    // console.log(this.navParams.get('data'));
    let url = document.URL.split('#')[0];
    let headers = new Headers();
    console.log('ionViewDidLoad: ' + this.passingJson.userId);
    if( url.indexOf("localhost") > 0) url = "http://localhost:8080/";
    else url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
      headers.append('Content-Type', 'application/json');
      this.http.get(url + 'getPassengerTrips', {
        params: {
          passId: this.passingJson.userId
          // driverId: 2
        }
      })
      .toPromise()
      .then((result: any) => {
        
        this.data = JSON.parse(result._body);
        console.log('LENGTH: ' + this.data.length);
        if(this.data.length >0) this.isDataAvai = true;
        else this.isDataAvai = false;
        console.log(this.data);
      });
  }
  back(){
    this.navCtrl.push(PassDriverPage);
  }
  searchTrip(){
      let data = this.navParams.get('data');
    this.navCtrl.push(PassengerHomePage,  {
      data: data
    });
  }

}
