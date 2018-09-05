import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController } from 'ionic-angular';
import { PassDriverPage } from '../pass-driver/pass-driver';
import { HomePage } from '../home/home';
import { User } from '../../models/User';
import { Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import {Location} from '@angular/common';

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
  user = new User();
  loading: Loading;
  emailColor: string = 'green';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public navParams: NavParams, public http: Http, private _location: Location) {
    // console.log("This url is:" + this.location.href);
  }

  ionViewDidLoad() {
     
    
  }


  onSignInClick(){
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let params = new HttpParams().set("userName",this.user.userName).set("userPassword", this.user.userPassword);

      this.http.get('http://Gouspring.us-east-2.elasticbeanstalk.com/authenticateUser', {
        params: {
          userName: this.user.userName,
          userPassword: this.user.userPassword
        }
      })
      .toPromise()
      .then((data: any) => {
            if( data._body == "true"){
              this.navCtrl.push(PassDriverPage);
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

  back(){
    this.navCtrl.push(HomePage);
  }
}
