import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, PopoverController } from 'ionic-angular';
import { PassDriverPage } from '../pass-driver/pass-driver';
import { Http } from '@angular/http';
import { DriverHomePage } from '../driver-home/driver-home';
import { PassengerHomePage } from '../passenger-home/passenger-home';
import { CancelTripPage } from '../cancel-trip/cancel-trip';
import { MorePage } from '../more/more';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
  @ViewChild(Navbar) navBar: Navbar;
  passingJson : any;

  data : any;
  isDataAvai : boolean;
  trips: Observable<any>;

  constructor(public navCtrl: NavController,private httpClient: HttpClient, public navParams: NavParams, public http: Http, public popoverCtrl: PopoverController) {
    
    this.passingJson = JSON.parse(this.navParams.get('data')); 
    this.loadPassengersTrip();

  }

  loadPTrips(){
    let url = document.URL.split('#')[0];
    let headers = new Headers();
    console.log('ionViewDidLoad: ' + this.passingJson.userId);
    if( url.indexOf("localhost") > 0) url = "http://localhost:8080/";
    else url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
    let params = new HttpParams().set('passId', this.passingJson.userId);
    this.trips = this.httpClient.get(url + 'getPassengerTrips',{ params: params });
    this.trips
    .subscribe(data => {
      console.log('my data: ', data);
      this.data = data;
    })
  }

  async loadPassengersTrip(){
    let url = document.URL.split('#')[0];
    let headers = new Headers();
    console.log('ionViewDidLoad: ' + this.passingJson.userId);
    if( url.indexOf("localhost") > 0) url = "http://localhost:8080/";
    else url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
      headers.append('Content-Type', 'application/json');
      await this.http.get(url + 'getPassengerTrips', {
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

  presentPopover(myEvent) {
    let data = this.navParams.get('data');
    let popover = this.popoverCtrl.create(MorePage, {data:data});
    popover.present({
      ev: myEvent
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    this.setBackButtonAction();
    
  }
  back(){
    let data = this.navParams.get('data');
    this.navCtrl.push(PassDriverPage,  {
      data: data
    });
  }
  searchTrip(){
      let data = this.navParams.get('data');
    this.navCtrl.push(PassengerHomePage,  {
      data: data
    });
  }

  cancelTrip(i){
    let trip = this.data[i];
    console.log(trip);
    let data = this.navParams.get('data');
    console.log(data);
    this.navCtrl.push(CancelTripPage,  {
      data,trip
    });

  }

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
