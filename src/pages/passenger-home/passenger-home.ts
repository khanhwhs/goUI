import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the PassengerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passenger-home',
  templateUrl: 'passenger-home.html',
})
export class PassengerHomePage {

  passingJson = null;

  data : any;
  isDataAvai : boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.passingJson = JSON.parse(this.navParams.get('data')); 
  }

  ionViewDidLoad() {
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

}
