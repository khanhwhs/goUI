import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, PopoverController } from 'ionic-angular';
import { DriverFrontEndPage } from '../driver-front-end/driver-front-end';
import { Http } from '@angular/http';
import { PassDriverPage } from '../pass-driver/pass-driver';
import { MorePage } from '../more/more';
import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from '../../services/constants';

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
  currentIndex : any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public popoverCtrl: PopoverController
    ,private translate: TranslateService, public constant: ConstantService) {
    this.passingJson = JSON.parse(this.navParams.get('data'));
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

  openMore(d,i){
    this.currentIndex = i;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ionViewDidLoad() {
    this.switchLanguage(this.constant.isChinese?'cn':'en');
    this.setBackButtonAction();
  }

  presentPopover(myEvent) {
    let data = this.navParams.get('data');
    let popover = this.popoverCtrl.create(MorePage, {data:data});
    popover.present({
      ev: myEvent
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
