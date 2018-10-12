import { Component, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { PassDriverPage } from '../pass-driver/pass-driver';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
@Injectable()
export class SignupPage {
  @ViewChild(Navbar) navBar: Navbar;
  user = new User();
  public signupForm: FormGroup;
  mismatchedPasswords : false;
  // loading: Loading;
  constructor(public navCtrl: NavController, public http: Http,
    public formBuilder: FormBuilder) {

      this.signupForm = formBuilder.group({
        name: ['', Validators.compose([Validators.required, Validators.required])],
        email: ['', Validators.compose([Validators.required, Validators.required])],
        phoneNumber: ['', Validators.compose([Validators.required, Validators.required])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
        confirmPassword: ['', Validators.required],
      }, {validator: this.matchingPasswords('password', 'confirmPassword')}); 
    }

    //, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],

    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {

      return (group: FormGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];
  
        if (password.value !== confirmPassword.value) {
          return {
            mismatchedPasswords: true
          };
        }
      }
    }

  ionViewDidLoad() {
    this.setBackButtonAction();
    console.log('ionViewDidLoad SignupPage');
  }


  signupUser(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      
      // this.userService.addUserWithPromise(this.user);
      this.user.userName = this.user.email;
      var headers = new Headers();
        headers["Access-Control-Allow-Origin"] = "*";
        headers.append('Content-Type', 'application/json');
      let options = {
          headers: headers
     };

      this.http.post('http://Gouspring.us-east-2.elasticbeanstalk.com/addUser', JSON.stringify(this.user), {headers: headers})
      .map(res => res.json())
      .subscribe(res => console.log("MAP")
                ,error => console.log(error),
                () => console.log("Finished"));
      this.navCtrl.push(LoginPage); 
      
    }
  }

  setBackButtonAction(){
    this.navBar.backButtonClick = () => {
        this.navCtrl.push(HomePage);
      }
  }



  goToLogin(){
    // this.navCtrl.push('loginPage');
  }

}
