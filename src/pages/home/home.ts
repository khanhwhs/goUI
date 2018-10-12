import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ConstantService } from '../../services/constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public constantService: ConstantService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  languageChange(){
    this.constantService.isChinese = true;
    console.log("this.constantService.isChinese:  " +  this.constantService.isChinese)
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  update(){
    this.constantService.isChinese = this.constantService.isChinese?true:false;
    var lang = this.constantService.isChinese?'cn':'en';
    console.log(lang)
    this.switchLanguage(lang) 
  }

  toLogin(){
    this.navCtrl.push(LoginPage);
  }
  toSignup(){ 
    this.navCtrl.push(SignupPage);
  }


}
