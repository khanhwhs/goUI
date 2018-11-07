import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AboutUsPage } from '../about-us/about-us';
import { ProfilePage } from '../profile/profile';
import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from '../../services/constants';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="profileMe()"><div translate>mProfile</div></button>
      <button ion-item (click)="aboutUs()"><div translate>mAboutUs</div></button>
      <button ion-item (click)="launchDialer('3176456777')"><div translate>mService</div></button>
      <button ion-item (click)="launchDialer('911')"><div translate>m911</div></button>
    </ion-list>
  `
})

export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController, private callNumber: CallNumber,private translate: TranslateService, public constant: ConstantService) {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ionViewDidLoad() {
    this.switchLanguage(this.constant.isChinese?'cn':'en');
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
