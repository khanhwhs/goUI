import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PassFronEndPage } from '../pass-fron-end/pass-fron-end';
import { DriverFrontEndPage } from '../driver-front-end/driver-front-end';
import { DriverHomePage } from '../driver-home/driver-home';
import { MorePage } from '../more/more';
import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from '../../services/constants';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController,private translate: TranslateService, public constant: ConstantService) {
  }

  presentPopover(myEvent) {
    let data = this.navParams.get('data');
    let popover = this.popoverCtrl.create(MorePage, {data:data});
    popover.present({
      ev: myEvent
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ionViewDidLoad() {
    this.switchLanguage(this.constant.isChinese?'cn':'en');
    console.log('ionViewDidLoad PassDriverPage');
    // console.log(this.navParams.get('data'));
  }

  passClick(){
    let data = this.navParams.get('data');
    this.navCtrl.push(PassFronEndPage,{
      data: data
    });
  }

  driverClick(){
    let data = this.navParams.get('data');
    this.navCtrl.push(DriverHomePage,  {
      data: data
    });
  }

}
