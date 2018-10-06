import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AboutUsPage } from '../about-us/about-us';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="profileMe()">Profile</button>
      <button ion-item (click)="aboutUs()">About Us</button>
      <button ion-item (click)="launchDialer('3176456777')">Customer Service</button>
      <button ion-item (click)="launchDialer('911')">Call 911</button>
    </ion-list>
  `
})

export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }
  close() {
    this.viewCtrl.dismiss();
  }

 async launchDialer(n:string){
  window.open("tel:" + n,"_self");
  }

  aboutUs(){
    this.navCtrl.push(AboutUsPage);
  }

  profileMe(){
    let data = JSON.parse(this.navParams.get('data'));
    console.log(data);
    this.navCtrl.push(ProfilePage, {data:data});
  }

}
