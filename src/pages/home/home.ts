import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ConstantService } from '../../services/constants';
import { TranslateService } from '@ngx-translate/core';
import { Facebook ,FacebookLoginResponse} from '@ionic-native/facebook';
import { Headers, RequestOptions, Http } from '@angular/http';
import { User } from '../../models/User';
import { PassDriverPage } from '../pass-driver/pass-driver';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,public http: Http, public constantService: ConstantService, private translate: TranslateService,public fb: Facebook) {
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



  fbLoginAction()
  {

    let url = document.URL.split('#')[0];
    if( url.indexOf("localhost") > 0) url = "http://localhost:8080/";
    else url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
    // Login with permissions
    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
    .then( (res: FacebookLoginResponse) => {

        // The connection was successful
        if(res.status == "connected") {

            // Get user ID and Token
            var fb_id = res.authResponse.userID;
            var fb_token = res.authResponse.accessToken;

            // Get user infos from the API
            this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {

                // Get the connected user details
                // var gender    = user.gender;
                // var birthday  = user.birthday;
                var name      = user.name;
                var email     = user.email;

                console.log("=== USER INFOS ===");
                // console.log("Gender : " + gender);
                // console.log("Birthday : " + birthday);
                console.log("Name : " + name);
                console.log("Email : " + email);
                var headers = new Headers();
                  headers["Access-Control-Allow-Origin"] = "*";
                  headers.append('Content-Type', 'application/json');
    
                user = new User();
                user.userName = email;
                user.firstName = name;
                user.userPassword = "facebook";
                this.http.post(url +' addUser', JSON.stringify(user), {headers: headers})
                .map(res => res.json())
                .subscribe(res => console.log("MAP")
                          ,error => console.log(error),
                          () => console.log("Finished"));
             

                // => Open user session and redirect to the next page
                this.navCtrl.push(PassDriverPage,  {
                  data: JSON.stringify(user)
                }); 

            });

        } 
        // An error occurred while loging-in
        else {

            console.log("An error occurred...");

        }

    })
    .catch((e) => {
        console.log('Error logging into Facebook', e);
    });
  }


}
