import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from '../../services/constants';

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
// @NgModule({
//   imports: [
//       SharedModule    
//       //..
//   ],
//   //..
// })
export class AboutUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private translate: TranslateService, public constant: ConstantService) {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ionViewDidLoad() {
    this.switchLanguage(this.constant.isChinese?'cn':'en');
    console.log('ionViewDidLoad AboutUsPage');
  }

}
