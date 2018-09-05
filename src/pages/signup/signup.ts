import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  user = new User();
  public signupForm: FormGroup;
  // loading: Loading;
  constructor(public navCtrl: NavController, public http: Http,
    public formBuilder: FormBuilder) {

      this.signupForm = formBuilder.group({
        name: ['', Validators.compose([Validators.required, Validators.required])],
        email: ['', Validators.compose([Validators.required, Validators.required])],
        phoneNumber: ['', Validators.compose([Validators.required, Validators.required])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
    }

  ionViewDidLoad() {
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

      this.navCtrl.push(PassDriverPage); 
      


      // this.http.get('http://localhost:8080/getAllUsers').subscribe(
      //   (data: any) => console.log(data)
      // );
      // this.navCtrl.push(PassDriverPage); 
    }
  }



  goToLogin(){
    // this.navCtrl.push('loginPage');
  }

}
