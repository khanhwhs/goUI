import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { PassFronEndPage } from '../pass-fron-end/pass-fron-end';

/**
 * Generated class for the CancelTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancel-trip',
  templateUrl: 'cancel-trip.html',
})
export class CancelTripPage {
  passingJson : any;
  tripJson: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    this.passingJson = JSON.parse(this.navParams.get('data')); 
    this.tripJson = this.navParams.get('trip'); 

    console.log(this.passingJson);
    console.log(this.tripJson);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancelTripPage');
  }

  async cancelTrip(){
    let data = this.navParams.get('data');
    let url = document.URL.split('#')[0];
    if( url.indexOf("localhost") > 0) url = "http://localhost:8080/";
    else url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";

    console.log(this.tripJson.tripId);
    console.log(this.passingJson.userId);
    let myParams = new URLSearchParams();
    myParams.append('tripId', this.tripJson.tripId);
    myParams.append('userId', this.passingJson.userId);
    await this.http.delete(url + 'deletePtrip',{
      params: {
        userId: this.passingJson.userId,
        tripId : this.tripJson.tripId
      }}).subscribe(() => console.log("trip deleted"));
      setTimeout( () => {
        this.navCtrl.push(PassFronEndPage,{data: this.navParams.get('data')});
      } , 400 );
    
  }

}
