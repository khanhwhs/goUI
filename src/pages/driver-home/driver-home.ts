import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { DriverFrontEndPage } from '../driver-front-end/driver-front-end';
import { Http } from '@angular/http';
import { PassDriverPage } from '../pass-driver/pass-driver';

/**
 * Generated class for the DriverHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-home',
  templateUrl: 'driver-home.html',
})
export class DriverHomePage {
  @ViewChild(Navbar) navBar: Navbar;
  passingJson = null;

  data : any;
  isDataAvai : boolean;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.passingJson = JSON.parse(this.navParams.get('data')); 
  }

  ionViewDidLoad() {
    this.setBackButtonAction();
    let url = document.URL.split('#')[0];
    let headers = new Headers();
    console.log('ionViewDidLoad DriverHomePage');
    if( url.indexOf("localhost") > 0) url = "http://localhost:8080/";
    else url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
      headers.append('Content-Type', 'application/json');
      this.http.get(url + 'getDriverTrips', {
        params: {
          driverId: this.passingJson.userId
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

  createTrip(){
    console.log(this.navParams.get('data'));
    let data = this.navParams.get('data');
    this.navCtrl.push(DriverFrontEndPage,  {
      data: data
    });

  }

  back() {
    let data = this.navParams.get('data');
    this.navCtrl.push(PassDriverPage,  {
      data: data
    });
  }

  //Method to override the default back button action
  setBackButtonAction(){
    this.navBar.backButtonClick = () => {
      //Write here wherever you wanna do
      let data = this.navParams.get('data');
        this.navCtrl.push(PassDriverPage,  {
          data: data
        });
      }
 }

}
