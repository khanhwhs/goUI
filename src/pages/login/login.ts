import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, Navbar } from 'ionic-angular';
import { PassDriverPage } from '../pass-driver/pass-driver';
import { HomePage } from '../home/home';
import { User } from '../../models/User';
import { Http } from '@angular/http';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from '../../services/constants';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Navbar) navBar: Navbar;
  user = new User();
  loading: Loading;
  emailColor: string = 'green';
  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public navParams: NavParams, public http: Http, private formBuilder: FormBuilder, private translate: TranslateService, public constant: ConstantService) {
     
    this.credentialsForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ionViewDidLoad() {
    this.switchLanguage(this.constant.isChinese?'cn':'en');
    this.setBackButtonAction();
  }


  onSignInClick(){
    let url = document.URL.split('#')[0];
    let headers = new Headers();
    if( url.indexOf("localhost") > 0) url = "http://localhost:8080/";
    else url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
      headers.append('Content-Type', 'application/json');
      this.http.get(url + 'getUser', {
        params: {
          userName: this.user.userName,
          userPassword: this.user.userPassword
        }
      })
      .toPromise()
      .then((data: any) => {
            if( data._body){
              this.navCtrl.push(PassDriverPage,  {
                data: data._body
              });
            }else{
              this.emailColor = "red";
              alert("Wrong Username/Password");
              this.loading.dismiss().then( () => {
                let alert = this.alertCtrl.create({
                  message: "Wrong Username/Password",
                  buttons: [
                    {
                      text: "Ok",
                      role: 'cancel'
                    }
                  ]
                });
                alert.present();
              });
            }
  
          }
        )
      .catch(console.log);
  }

  setBackButtonAction(){
    this.navBar.backButtonClick = () => {
      //Write here wherever you wanna do
      let data = this.navParams.get('data');
        this.navCtrl.push(HomePage,  {
          data: data
        });
      }
  }

  back(){
    this.navCtrl.push(HomePage);
  }
}
