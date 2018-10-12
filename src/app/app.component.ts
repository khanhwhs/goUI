import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { PassDriverPage } from '../pages/pass-driver/pass-driver';
import { DriverFrontEndPage } from '../pages/driver-front-end/driver-front-end';
import { DriverHomePage } from '../pages/driver-home/driver-home';
import { PassFronEndPage } from '../pages/pass-fron-end/pass-fron-end';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translate: TranslateService) {
    platform.ready().then(() => { 
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });

    translate.setDefaultLang('en');

   
    }
    switchLanguage(language: string) {
      this.translate.use(language);
  }
}
