import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ConstantService } from '../../services/constants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public constantService: ConstantService) {
  }

  toLogin(){
    this.navCtrl.push(LoginPage);
  }
  toSignup(){ 
    this.navCtrl.push(SignupPage);
  }


}
