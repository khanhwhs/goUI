import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from '../../services/constants';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private translate: TranslateService, public constant: ConstantService) {
    this.data =this.navParams.get('data');
    console.log(this.data);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ionViewDidLoad() {
    this.switchLanguage(this.constant.isChinese?'cn':'en');
    console.log('ionViewDidLoad ProfilePage');
  }

}
