import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { PassDriverPage } from '../pages/pass-driver/pass-driver';
import { PassFronEndPage } from '../pages/pass-fron-end/pass-fron-end';
import { DriverFrontEndPage } from '../pages/driver-front-end/driver-front-end';
import { SignupPage } from '../pages/signup/signup';
import {UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DriverHomePage } from '../pages/driver-home/driver-home';
import { PassengerHomePage } from '../pages/passenger-home/passenger-home';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    PassDriverPage,
    PassFronEndPage,
    DriverFrontEndPage,SignupPage,
    DriverHomePage,
    PassengerHomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PassDriverPage,
    PassFronEndPage,
    DriverFrontEndPage,
    SignupPage,
    DriverHomePage,
    PassengerHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
