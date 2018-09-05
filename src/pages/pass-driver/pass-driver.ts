import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PassFronEndPage } from '../pass-fron-end/pass-fron-end';
import { DriverFrontEndPage } from '../driver-front-end/driver-front-end';

/**
 * Generated class for the PassDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pass-driver',
  templateUrl: 'pass-driver.html',
})
export class PassDriverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassDriverPage');
  }

  passClick(){
    this.navCtrl.push(PassFronEndPage);
  }

  driverClick(){
    this.navCtrl.push(DriverFrontEndPage);
  }

}
