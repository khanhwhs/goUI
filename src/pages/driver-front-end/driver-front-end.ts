import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PassDriverPage } from '../pass-driver/pass-driver';

/**
 * Generated class for the DriverFrontEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-front-end',
  templateUrl: 'driver-front-end.html',
})
export class DriverFrontEndPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverFrontEndPage');
  }
  back(){
    this.navCtrl.push(PassDriverPage);
  }

}
