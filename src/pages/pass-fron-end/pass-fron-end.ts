import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PassDriverPage } from '../pass-driver/pass-driver';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassFronEndPage');
  }
  back(){
    this.navCtrl.push(PassDriverPage);
  }

}
