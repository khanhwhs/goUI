webpackJsonp([11],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverFrontEndPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Trip__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_home_driver_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__more_more__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_constants__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the DriverFrontEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverFrontEndPage = /** @class */ (function () {
    function DriverFrontEndPage(navCtrl, popoverCtrl, navParams, formBuilder, http, translate, constant) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.translate = translate;
        this.constant = constant;
        this.trip = new __WEBPACK_IMPORTED_MODULE_3__models_Trip__["a" /* Trip */]();
        this.data = null;
        this.json = null;
        this.data = this.navParams.get('data');
        this.json = JSON.parse(this.data);
        this.tripForm = this.formBuilder.group({
            userCarId: [''],
            createdOn: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            seats: [''],
            destAddrId: [''],
            startAddrId: [''],
            startTime: [''],
            carId: [''],
            luggageDesc: [''],
            isRoundTrip: ['']
        });
    }
    DriverFrontEndPage.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    DriverFrontEndPage.prototype.ionViewDidLoad = function () {
        this.switchLanguage(this.constant.isChinese ? 'cn' : 'en');
    };
    DriverFrontEndPage.prototype.presentPopover = function (myEvent) {
        var data = this.navParams.get('data');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__more_more__["a" /* MorePage */], { data: data });
        popover.present({
            ev: myEvent
        });
    };
    DriverFrontEndPage.prototype.onPostTrip = function () {
        var _this = this;
        var url = document.URL.split('#')[0];
        if (url.indexOf("localhost") > 0)
            url = "http://localhost:8080/";
        else
            url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers["Access-Control-Allow-Origin"] = "*";
        headers.append('Content-Type', 'application/json');
        console.log(this.json);
        this.trip.userCarId = this.json.userId;
        if (Object.keys(this.trip).length < 8) {
            alert("Please fill the missing field(s)");
        }
        else {
            this.http.post(url + 'addTrip', JSON.stringify(this.trip), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) { return console.log("MAP"); }, function (error) { return console.log(error); }, function () { return console.log("Finished"); });
            setTimeout(function () {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__driver_home_driver_home__["a" /* DriverHomePage */], { data: _this.navParams.get('data') });
            }, 400);
        }
    };
    DriverFrontEndPage.prototype.onForgotPassword = function () {
        // this.logger.info('SignInPage: onForgotPassword()');
    };
    DriverFrontEndPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-front-end',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/driver-front-end/driver-front-end.html"*/'<ion-header no-border>\n    <ion-navbar color="nav-color">\n      <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n      <ion-buttons end>\n        <button ion-button icon-only (click) = "presentPopover($event)">\n            <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content id="welcome">\n\n    <ion-grid>\n      <ion-row >\n        <ion-col>\n            <form>\n                <ion-item>\n                     <div class="Lets-plan-your-trip" translate>dplanTrip</div>\n                </ion-item>\n                <ion-item>\n                    <ion-label><div translate>dFrom</div></ion-label>\n                    <ion-input type="text" [(ngModel)]="trip.startAddrId" name="startAddrId" required></ion-input>\n                </ion-item>\n                  \n                  <ion-item>\n                    <ion-label ><div translate>dTo</div></ion-label>\n                    <ion-input type="text" [(ngModel)]="trip.destAddrId" name="destAddrId" required> </ion-input>\n                  </ion-item>   \n\n                  <ion-item>\n                      <ion-label><div translate>dDate</div></ion-label>\n                      <ion-datetime displayFormat="MMM DD, YYYY"  [(ngModel)]="trip.createdOn"  name="createdOn" required></ion-datetime>\n                    </ion-item>\n  \n                    <ion-item>\n                        <ion-label><div translate>ddTime</div></ion-label>\n                        <ion-datetime displayFormat="HH:mm A" [(ngModel)]="trip.startTime" name="startTime"></ion-datetime>\n                      </ion-item> \n  \n                      <ion-item>\n                          <ion-label ><div translate>dRoundT</div></ion-label>\n                          <ion-select [(ngModel)]="trip.isRoundTrip" name="isRoundTrip" interface="action-sheet">\n                              <ion-option value="1" selected = "true">Yes</ion-option>\n                              <ion-option value="0">No</ion-option>\n                          </ion-select>\n                      </ion-item> \n                \n                      <ion-item>\n                          <ion-label ><div translate>dSeats</div></ion-label>\n                          <ion-input type="text" [(ngModel)]="trip.seats" name="seats"></ion-input>\n                      </ion-item> \n  \n                      <ion-item>\n                          <ion-label floating><div translate>dCarInfo</div></ion-label>\n                          <ion-input type="text" [(ngModel)]="trip.luggageDesc" name="luggageDesc"></ion-input>\n                      </ion-item> \n\n                      <ion-item>\n                            <ion-label floating><div translate>dTripCost</div></ion-label>\n                            <ion-input type="text" [(ngModel)]="trip.tripCost" name="tripCost"></ion-input>\n                        </ion-item> \n\n                    <!-- <button ion-button type="submit" (click)="onPostTrip()" block>Done</button> -->\n                        <button ion-button block\n                            color="button"\n                            class= "longButton" \n                            (click)="onPostTrip()"><div translate>dDone</div>\n                        </button>\n\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/driver-front-end/driver-front-end.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_8__services_constants__["a" /* ConstantService */]])
    ], DriverFrontEndPage);
    return DriverFrontEndPage;
}());

//# sourceMappingURL=driver-front-end.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pass_fron_end_pass_fron_end__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_User__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PassengerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PassengerHomePage = /** @class */ (function () {
    function PassengerHomePage(navCtrl, navParams, http, popoverCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.passingJson = null;
        this.passingJson = JSON.parse(this.navParams.get('data'));
        this.isExpand = false;
        var url = document.URL.split('#')[0];
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        console.log('ionViewDidLoad: ' + this.passingJson.userId);
        if (url.indexOf("localhost") > 0)
            url = "http://localhost:8080/";
        else
            url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
        headers.append('Content-Type', 'application/json');
        this.http.get(url + 'getAllTrips', {})
            .toPromise()
            .then(function (result) {
            _this.data = JSON.parse(result._body);
            // console.log('LENGTH: ' + this.data.length);
            if (_this.data.length > 0)
                _this.isDataAvai = true;
            else
                _this.isDataAvai = false;
            // console.log(this.data);
        });
    }
    PassengerHomePage.prototype.presentPopover = function (myEvent) {
        var data = this.navParams.get('data');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__more_more__["a" /* MorePage */], { data: data });
        popover.present({
            ev: myEvent
        });
    };
    PassengerHomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    PassengerHomePage.prototype.openMore = function (data, i) {
        console.log('EXPANDING index: --- ' + i + " --- and data is : " + data);
        this.currentIndex = i;
        // if(i){
        //   this.isExpand = this.isExpand == true ? false : true;
        // }
    };
    PassengerHomePage.prototype.book = function (data) {
        console.log(data);
    };
    PassengerHomePage.prototype.ionViewDidLoad = function () {
    };
    PassengerHomePage.prototype.back = function () {
        var data = this.navParams.get('data');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pass_fron_end_pass_fron_end__["a" /* PassFronEndPage */], {
            data: data
        });
    };
    PassengerHomePage.prototype.bookTrip = function () {
        var _this = this;
        var data = this.navParams.get('data');
        var url = document.URL.split('#')[0];
        var user = new __WEBPACK_IMPORTED_MODULE_4__models_User__["a" /* User */];
        if (url.indexOf("localhost") > 0)
            url = "http://localhost:8080/";
        else
            url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers["Access-Control-Allow-Origin"] = "*";
        headers.append('Content-Type', 'application/json');
        console.log(this.data[this.currentIndex]);
        var PTrip = { "tripId": this.data[this.currentIndex].tripId, "userId": this.passingJson.userId };
        console.log(PTrip);
        this.http.post(url + 'addPTrip', JSON.stringify(PTrip), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return console.log("MAP"); }, function (error) { return console.log("HAS AN ERROR: " + error); }, function () { return console.log("Finished"); });
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pass_fron_end_pass_fron_end__["a" /* PassFronEndPage */], { data: _this.navParams.get('data') });
        }, 400);
    };
    PassengerHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-passenger-home',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/passenger-home/passenger-home.html"*/'<!-- <ion-header no-border>\n    <ion-toolbar>\n      <div class = "center">\n          <img src="assets/imgs/back@3x.png" (click) = "back()"/>\n          <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n          <img src="assets/imgs/profile@2x.png" (click) = "back()"/>\n        </div>\n       \n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header>\n\n        <ion-navbar color="nav-color">\n          <button ion-button icon-only menuToggle (click) = "back()">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      \n                <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n      \n          <ion-buttons end>\n            <button ion-button icon-only (click) = "presentPopover($event)">\n              <ion-icon name="more"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-navbar>\n      \n      </ion-header>\n\n \n\n<ion-content padding>\n    <div class = "question" >Trips Available</div>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div *ngIf = "isDataAvai">\n        <div *ngFor="let d of data; let i = index;">\n            <ion-grid class="tripsContent">\n                <!-- <button id=\'hidden-button\' ion-button (click)="openMore()"> -->\n              <ion-row (click)="openMore(d,i)" >\n\n                  <div class= "tableCol">\n                      <img class= "tableProfile" src="assets/imgs/user.png"/>\n                      <!-- <img *ngIf= "i%2!=0" class= "tableProfile" src="assets/imgs/man.png"/> -->\n                  </div>\n                  <div class= "tableCol2">\n                        <ion-row>\n                              <ion-col>\n                                  <div class = "name"> {{ d.driver.firstName }}  {{ d.driver.lastName }} </div> \n                              </ion-col>\n                          </ion-row>\n                        <ion-row>\n                            <ion-col>\n                               <div class="fromTo" >From: {{ d.startAddrId }}</div> \n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col>\n                                <div class="fromTo" > To: {{ d.destAddrId }}</div> \n                            </ion-col>\n                        </ion-row>\n                      </div>\n             </ion-row>\n            <ion-row *ngIf = "i == currentIndex" class="Departure">\n                  <div class= "tableCol2">\n                      <ion-row>\n                          <ion-col>\n                             <div class="Departure" >Depature: {{ d.createdOn }}</div> \n                          </ion-col>\n                      </ion-row>\n                      <ion-row>\n                          <ion-col>\n                              <div class="Departure" > Time: {{ d.startTime }}</div> \n                          </ion-col>\n                      </ion-row>\n                      <ion-row x class="tripsTable2">\n                          <ion-col>\n                              <div > Seats Available: {{ d.seats}}</div> \n                          </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                           <div>Car Info: {{ d.luggageDesc }}</div> \n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                            <div class="TripCost" >Trip Cost: {{ d.tripCost }}</div> \n                        </ion-col>\n                      </ion-row>\n                  </div>\n                  <div class= "tableCol">\n                      <button  (click)="book(d)" class= "buttonBottom" (click)="bookTrip()">Book</button>\n                  </div>\n\n              </ion-row>\n\n            </ion-grid>\n\n        </div>\n    </div>\n  \n    <div  *ngIf = "isDataAvai != true">\n        loading...\n    </div>\n      \n  </ion-content>'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/passenger-home/passenger-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], PassengerHomePage);
    return PassengerHomePage;
}());

//# sourceMappingURL=passenger-home.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/about-us/about-us.html"*/'<ion-header>\n    <ion-navbar color="nav-color" >\n            <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n        <ion-buttons end>\n        <button ion-button icon-only>\n            <ion-icon name="person"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-grid class = "body" >\n        <ion-row>\n            <ion-col center text-center>\n                <h1 class = "The-Future-of-Ridesh">About Us</h1>\n            </ion-col>\n          </ion-row>\n      <ion-row>\n        <div>\n            GoU is a simple web app for travellers to find each other on road trips across the Great Lakes region in the USA and Canada. It’s a wholly owned product by 3MA LLC. All rights reserved.            \n        </div>\n      </ion-row>\n    <br>\n      <ion-row>\n          <div>\n              GoU “走你” 是一个简单的网络平台用来帮助在五大湖地区出行的朋友们找到用车伙伴（包括美国和加拿大）。不管你有没有车，我们都欢迎您的使用！本产品全部属于 3MA LLC。侵权必究。             \n          </div>\n        </ion-row>\n    </ion-grid>\n    \n</ion-content>'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/about-us/about-us.html"*/,
        })
        // @NgModule({
        //   imports: [
        //       SharedModule    
        //       //..
        //   ],
        //   //..
        // })
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = this.navParams.get('data');
        console.log(this.data);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar color="nav-color" >\n            <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n        <ion-buttons end>\n        <button ion-button icon-only (click) = "presentPopover($event)">\n            <ion-icon name="more"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n        <h1 class = "question" >My Profile</h1>\n          <ion-grid class="tripsTable">\n              <ion-row>\n                  <ion-col class = "col col-50">\n                       Name: {{ data.firstName }}  {{ data.lastName }}\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      Phone Number: {{ data.phoneNo }}\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      Username: {{ data.userName }}\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      Email: {{ data.email }}\n                  </ion-col>\n            </ion-row>  \n          </ion-grid>  \n  </ion-content>'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pass_fron_end_pass_fron_end__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the CancelTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CancelTripPage = /** @class */ (function () {
    function CancelTripPage(navCtrl, navParams, http, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.passingJson = JSON.parse(this.navParams.get('data'));
        this.tripJson = this.navParams.get('trip');
        console.log(this.passingJson);
        console.log(this.tripJson);
    }
    CancelTripPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancelTripPage');
    };
    CancelTripPage.prototype.cancelTrip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, url, myParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.navParams.get('data');
                        url = document.URL.split('#')[0];
                        if (url.indexOf("localhost") > 0)
                            url = "http://localhost:8080/";
                        else
                            url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
                        console.log(this.tripJson.tripId);
                        console.log(this.passingJson.userId);
                        myParams = new URLSearchParams();
                        myParams.append('tripId', this.tripJson.tripId);
                        myParams.append('userId', this.passingJson.userId);
                        return [4 /*yield*/, this.http.delete(url + 'deletePtrip', {
                                params: {
                                    userId: this.passingJson.userId,
                                    tripId: this.tripJson.tripId
                                }
                            }).subscribe(function () { return console.log("trip deleted"); })];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pass_fron_end_pass_fron_end__["a" /* PassFronEndPage */], { data: _this.navParams.get('data') });
                        }, 400);
                        return [2 /*return*/];
                }
            });
        });
    };
    CancelTripPage.prototype.presentPopover = function (myEvent) {
        var data = this.navParams.get('data');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__more_more__["a" /* MorePage */], { data: data });
        popover.present({
            ev: myEvent
        });
    };
    CancelTripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancel-trip',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/cancel-trip/cancel-trip.html"*/'<ion-header>\n    <ion-navbar color="nav-color" >\n            <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n        <ion-buttons end>\n        <button ion-button icon-only (click) = "presentPopover($event)">\n            <ion-icon name="more"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-grid class = "body" >\n        <ion-row>\n            <ion-col center text-center>\n                <h1 class = "The-Future-of-Ridesh">Please Confirm Cancellation</h1>\n            </ion-col>\n          </ion-row>\n      <ion-row>\n        <ion-col center text-center>\n          <div class = "Main-button"> \n            <button ion-button block\n            color="button"\n            class= "longButton" \n            (click)="cancelTrip()">Confirm\n            </button></div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <div>\n            No charges if either party cancels at any time prior to departure time. If deposit was paid by the passenger ahead of time, driver must refund full deposit.                \n        </div>\n      </ion-row>\n    </ion-grid>\n    \n</ion-content>'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/cancel-trip/cancel-trip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], CancelTripPage);
    return CancelTripPage;
}());

//# sourceMappingURL=cancel-trip.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_User__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_constants__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    // loading: Loading;
    function SignupPage(navCtrl, http, formBuilder, constantService, translate, constant) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.constantService = constantService;
        this.translate = translate;
        this.constant = constant;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_User__["a" /* User */]();
        this.signupForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(12)])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        }, { validator: this.matchingPasswords('password', 'confirmPassword') });
    }
    //, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
    SignupPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    SignupPage.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        this.switchLanguage(this.constant.isChinese ? 'cn' : 'en');
        this.setBackButtonAction();
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signupUser = function () {
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            // this.userService.addUserWithPromise(this.user);
            this.user.userName = this.user.email;
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers["Access-Control-Allow-Origin"] = "*";
            headers.append('Content-Type', 'application/json');
            var options = {
                headers: headers
            };
            this.http.post('http://Gouspring.us-east-2.elasticbeanstalk.com/addUser', JSON.stringify(this.user), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) { return console.log("MAP"); }, function (error) { return console.log(error); }, function () { return console.log("Finished"); });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        }
    };
    SignupPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
        };
    };
    SignupPage.prototype.goToLogin = function () {
        // this.navCtrl.push('loginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Navbar */])
    ], SignupPage.prototype, "navBar", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/signup/signup.html"*/'<ion-header no-border>\n    <ion-navbar color="nav-color">\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content class="no-scroll" padding>\n    <div>\n      <img\n        class="goyu_logo"\n         src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n      <div class = "question" translate>sUTitle</div>\n    </div>\n    \n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n      <ion-input formControlName="name" type="name" placeholder="{{\'suname\' | translate}}" [(ngModel)]="user.firstName">\n        </ion-input>  \n      <ion-input [(ngModel)]="user.email" formControlName="email" type="email" placeholder="{{\'suemail\' | translate}}"\n        [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty">\n      </ion-input>\n    \n      <ion-input [(ngModel)]="user.userPassword" formControlName="password" type="password" placeholder="{{\'supass\' | translate}}"\n        [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty">\n      </ion-input>\n\n        <ion-input type="password" [(ngModel)]="confirmPassword" formControlName="confirmPassword" placeholder="{{\'surepass\' | translate}}"></ion-input>\n      <div class=\'form-text error\' *ngIf="signupForm.controls.confirmPassword.touched && signupForm.hasError(\'mismatchedPasswords\') && signupForm.controls.password.valid">\n        <ion-label no-margin stacked>Passwords do not match</ion-label>\n      </div>\n\n      <ion-input class="inputText" [(ngModel)]="user.phoneNo" formControlName="phoneNumber" type="phoneNumber" placeholder="{{\'suphone\' | translate}}">\n      </ion-input>\n\n\n    <!-- <button padding ion-button block type="submit" [disabled]="!signupForm.valid">\n      Create an Account\n    </button> -->\n    <button ion-button block type="submit" [disabled]="!signupForm.valid"\n          color="button"\n          class= "longButton"><div translate>cucreate</div>\n    </button>\n    \n    \n  </form>\n\n  <!-- <button color=\'light\'ion-button block (click)="goToLogin()">\n     Login.\n    </button> -->\n</ion-content>'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/signup/signup.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_10__services_constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_10__services_constants__["a" /* ConstantService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		699,
		10
	],
	"../pages/cancel-trip/cancel-trip.module": [
		696,
		9
	],
	"../pages/driver-front-end/driver-front-end.module": [
		695,
		8
	],
	"../pages/driver-home/driver-home.module": [
		697,
		7
	],
	"../pages/login/login.module": [
		698,
		6
	],
	"../pages/main/main.module": [
		700,
		0
	],
	"../pages/pass-driver/pass-driver.module": [
		701,
		5
	],
	"../pages/pass-fron-end/pass-fron-end.module": [
		702,
		4
	],
	"../pages/passenger-home/passenger-home.module": [
		703,
		3
	],
	"../pages/profile/profile.module": [
		704,
		2
	],
	"../pages/signup/signup.module": [
		705,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConstantService = /** @class */ (function () {
    function ConstantService() {
        this.isChinese = false;
    }
    ConstantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ConstantService);
    return ConstantService;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pass_driver_pass_driver__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pass_fron_end_pass_fron_end__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_driver_front_end_driver_front_end__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_driver_home_driver_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_passenger_home_passenger_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_test_test__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cancel_trip_cancel_trip__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_more_more__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_about_us_about_us__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_constants__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ngx_translate_http_loader__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pass_driver_pass_driver__["a" /* PassDriverPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pass_fron_end_pass_fron_end__["a" /* PassFronEndPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_driver_front_end_driver_front_end__["a" /* DriverFrontEndPage */], __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_driver_home_driver_home__["a" /* DriverHomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_passenger_home_passenger_home__["a" /* PassengerHomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cancel_trip_cancel_trip__["a" /* CancelTripPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/driver-front-end/driver-front-end.module#DriverFrontEndPageModule', name: 'DriverFrontEndPage', segment: 'driver-front-end', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancel-trip/cancel-trip.module#CancelTripPageModule', name: 'CancelTripPage', segment: 'cancel-trip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-home/driver-home.module#DriverHomePageModule', name: 'DriverHomePage', segment: 'driver-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pass-driver/pass-driver.module#PassDriverPageModule', name: 'PassDriverPage', segment: 'pass-driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pass-fron-end/pass-fron-end.module#PassFronEndPageModule', name: 'PassFronEndPage', segment: 'pass-fron-end', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/passenger-home/passenger-home.module#PassengerHomePageModule', name: 'PassengerHomePage', segment: 'passenger-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_27__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_27__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_26__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pass_driver_pass_driver__["a" /* PassDriverPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pass_fron_end_pass_fron_end__["a" /* PassFronEndPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_driver_front_end_driver_front_end__["a" /* DriverFrontEndPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_driver_home_driver_home__["a" /* DriverHomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_passenger_home_passenger_home__["a" /* PassengerHomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cancel_trip_cancel_trip__["a" /* CancelTripPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_25__services_constants__["a" /* ConstantService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_28__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient);
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trip; });
var Trip = /** @class */ (function () {
    function Trip() {
    }
    return Trip;
}());

//# sourceMappingURL=Trip.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate) {
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        translate.setDefaultLang('en');
    }
    MyApp.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = "http://localhost:8080";
    }
    UserService.prototype.getUsersWithObservable = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    UserService.prototype.addUserWithObservable = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var addUrl = this.url + "/addUser";
        return this.http.post(addUrl, user, options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    UserService.prototype.getUsersWithPromise = function () {
        return this.http.get(this.url).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    UserService.prototype.addUserWithPromise = function (user) {
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var addUrl = this.url + "/addUser";
        return this.http.post(addUrl, user, options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.message || error);
    };
    UserService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_us_about_us__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MorePage = /** @class */ (function () {
    function MorePage(navCtrl, navParams, viewCtrl, callNumber, translate, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.callNumber = callNumber;
        this.translate = translate;
        this.constant = constant;
    }
    MorePage.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    MorePage.prototype.ionViewDidLoad = function () {
        this.switchLanguage(this.constant.isChinese ? 'cn' : 'en');
        console.log('ionViewDidLoad MorePage');
    };
    MorePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MorePage.prototype.launchDialer = function (n) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.open("tel:" + n, "_self");
                return [2 /*return*/];
            });
        });
    };
    MorePage.prototype.aboutUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_us_about_us__["a" /* AboutUsPage */]);
    };
    MorePage.prototype.profileMe = function () {
        var data = JSON.parse(this.navParams.get('data'));
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], { data: data });
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"profileMe()\">Profile</button>\n      <button ion-item (click)=\"aboutUs()\">About Us</button>\n      <button ion-item (click)=\"launchDialer('3176456777')\">Customer Service</button>\n      <button ion-item (click)=\"launchDialer('911')\">Call 911</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* ConstantService */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassDriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pass_fron_end_pass_fron_end__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_home_driver_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PassDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PassDriverPage = /** @class */ (function () {
    function PassDriverPage(navCtrl, navParams, popoverCtrl, translate, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.translate = translate;
        this.constant = constant;
    }
    PassDriverPage.prototype.presentPopover = function (myEvent) {
        var data = this.navParams.get('data');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__more_more__["a" /* MorePage */], { data: data });
        popover.present({
            ev: myEvent
        });
    };
    PassDriverPage.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    PassDriverPage.prototype.ionViewDidLoad = function () {
        this.switchLanguage(this.constant.isChinese ? 'cn' : 'en');
        console.log('ionViewDidLoad PassDriverPage');
        // console.log(this.navParams.get('data'));
    };
    PassDriverPage.prototype.passClick = function () {
        var data = this.navParams.get('data');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pass_fron_end_pass_fron_end__["a" /* PassFronEndPage */], {
            data: data
        });
    };
    PassDriverPage.prototype.driverClick = function () {
        var data = this.navParams.get('data');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__driver_home_driver_home__["a" /* DriverHomePage */], {
            data: data
        });
    };
    PassDriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pass-driver',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/pass-driver/pass-driver.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton>\n       <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n       <ion-buttons end>\n          <button ion-button icon-only (click) = "presentPopover($event)">\n            <ion-icon name="more"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content id="welcome">\n\n\n<ion-content id="welcome" >\n    \n    <div class = "question" translate>dpTitle</div>\n    <ion-grid >\n      <ion-row>\n      <ion-col center text-center>\n          <div class = "passenger-button"> <img src="assets/imgs/passenger@3x.png" style = "width: 55%" (click) = "passClick()"> </div>\n          <div class = "text" translate>dpPass</div>\n      </ion-col>\n      </ion-row>\n      <ion-row class="driverRow">\n        <ion-col center text-center>\n          <div class = "driver-button"> <img src="assets/imgs/driver@3x.png" style = "width: 55%" (click) = "driverClick()"> </div>\n          <div class = "text" translate>dpDriver</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/pass-driver/pass-driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* ConstantService */]])
    ], PassDriverPage);
    return PassDriverPage;
}());

//# sourceMappingURL=pass-driver.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassFronEndPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pass_driver_pass_driver__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__passenger_home_passenger_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cancel_trip_cancel_trip__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__more_more__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_constants__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/**
 * Generated class for the PassFronEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PassFronEndPage = /** @class */ (function () {
    function PassFronEndPage(navCtrl, httpClient, navParams, http, popoverCtrl, translate, constant) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.navParams = navParams;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.translate = translate;
        this.constant = constant;
        this.passingJson = JSON.parse(this.navParams.get('data'));
        this.loadPassengersTrip();
    }
    PassFronEndPage.prototype.loadPTrips = function () {
        var _this = this;
        var url = document.URL.split('#')[0];
        var headers = new Headers();
        console.log('ionViewDidLoad: ' + this.passingJson.userId);
        if (url.indexOf("localhost") > 0)
            url = "http://localhost:8080/";
        else
            url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
        var params = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpParams */]().set('passId', this.passingJson.userId);
        this.trips = this.httpClient.get(url + 'getPassengerTrips', { params: params });
        this.trips
            .subscribe(function (data) {
            console.log('my data: ', data);
            _this.data = data;
        });
    };
    PassFronEndPage.prototype.loadPassengersTrip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = document.URL.split('#')[0];
                        headers = new Headers();
                        console.log('ionViewDidLoad: ' + this.passingJson.userId);
                        if (url.indexOf("localhost") > 0)
                            url = "http://localhost:8080/";
                        else
                            url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
                        headers.append('Content-Type', 'application/json');
                        return [4 /*yield*/, this.http.get(url + 'getPassengerTrips', {
                                params: {
                                    passId: this.passingJson.userId
                                    // driverId: 2
                                }
                            })
                                .toPromise()
                                .then(function (result) {
                                _this.data = JSON.parse(result._body);
                                console.log('LENGTH: ' + _this.data.length);
                                if (_this.data.length > 0)
                                    _this.isDataAvai = true;
                                else
                                    _this.isDataAvai = false;
                                console.log(_this.data);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PassFronEndPage.prototype.presentPopover = function (myEvent) {
        var data = this.navParams.get('data');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__more_more__["a" /* MorePage */], { data: data });
        popover.present({
            ev: myEvent
        });
    };
    PassFronEndPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    PassFronEndPage.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    PassFronEndPage.prototype.ionViewDidLoad = function () {
        this.switchLanguage(this.constant.isChinese ? 'cn' : 'en');
        this.setBackButtonAction();
    };
    PassFronEndPage.prototype.back = function () {
        var data = this.navParams.get('data');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pass_driver_pass_driver__["a" /* PassDriverPage */], {
            data: data
        });
    };
    PassFronEndPage.prototype.searchTrip = function () {
        var data = this.navParams.get('data');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__passenger_home_passenger_home__["a" /* PassengerHomePage */], {
            data: data
        });
    };
    PassFronEndPage.prototype.cancelTrip = function (i) {
        var trip = this.data[i];
        console.log(trip);
        var data = this.navParams.get('data');
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cancel_trip_cancel_trip__["a" /* CancelTripPage */], {
            data: data, trip: trip
        });
    };
    PassFronEndPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            //Write here wherever you wanna do
            var data = _this.navParams.get('data');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pass_driver_pass_driver__["a" /* PassDriverPage */], {
                data: data
            });
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */])
    ], PassFronEndPage.prototype, "navBar", void 0);
    PassFronEndPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pass-fron-end',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/pass-fron-end/pass-fron-end.html"*/'<ion-header>\n    <ion-navbar color="nav-color" >\n            <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n        <ion-buttons end>\n        <button ion-button icon-only (click) = "presentPopover($event)">\n            <ion-icon name="more"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n        <div class = "question" >Passenger Home</div>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div *ngIf = "isDataAvai">\n        <div *ngFor="let d of data; let i = index;">\n            <ion-grid class="tripsTable">\n              <ion-row>\n                  <ion-col class = "col col-50">\n                      Date: {{ d.createdOn }}\n                  </ion-col>\n                  <ion-col col-4 >\n                      Time: {{ d.startTime }}\n                  </ion-col >\n                  <ion-col col-1>\n                    <button (click)="cancelTrip(i)">\n                            <ion-icon name="close"></ion-icon>\n                    </button>\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      From: {{ d.startAddrId }}\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      To: {{ d.destAddrId }}\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                   <div>Car Info: {{ d.luggageDesc }}</div> \n                </ion-col>\n              </ion-row>\n              <ion-row>\n                    <ion-col>\n                        Trip Cost: {{ d.tripCost }}\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <div class="TripCost" >Driver: {{ d.driver.firstName}} {{ d.driver.lastName}} &emsp; &emsp;Phone: {{ d.driver.phoneNo}}   </div> \n                    </ion-col>\n                </ion-row>\n              <br>\n            </ion-grid>\n            </div>\n    </div>\n  \n    <div  *ngIf = "isDataAvai != true">\n        You don\'t have any trip\n    </div>\n    \n    <div>\n        <ion-item>\n            <!-- <button  color="button" ion-button block color="yellow" (click)="searchTrip()">\n              Search Trips\n            </button> -->\n            <button ion-button block\n            color="button"\n            class= "longButton" \n            (click)="searchTrip()">Search Trips\n            </button>\n          </ion-item> \n    </div>\n      \n  </ion-content>'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/pass-fron-end/pass-fron-end.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_9__services_constants__["a" /* ConstantService */]])
    ], PassFronEndPage);
    return PassFronEndPage;
}());

//# sourceMappingURL=pass-fron-end.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    TestPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/test/test.html"*/'<ion-menu [content]="mycontent">\n    <ion-content>\n      <ion-list>\n        <p>some menu content, could be list items</p>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/test/test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, constantService, translate) {
        this.navCtrl = navCtrl;
        this.constantService = constantService;
        this.translate = translate;
        translate.setDefaultLang('en');
    }
    HomePage.prototype.languageChange = function () {
        this.constantService.isChinese = true;
        console.log("this.constantService.isChinese:  " + this.constantService.isChinese);
    };
    HomePage.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    HomePage.prototype.update = function () {
        this.constantService.isChinese = this.constantService.isChinese ? true : false;
        var lang = this.constantService.isChinese ? 'cn' : 'en';
        console.log(lang);
        this.switchLanguage(lang);
    };
    HomePage.prototype.toLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.toSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/home/home.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton>\n       <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n    </ion-navbar>\n</ion-header>\n<!-- <link href="//code.ionicframework.com/nightly/css/ionic.css" rel="stylesheet"> -->\n<!-- <script src="//code.ionicframework.com/nightly/js/ionic.bundle.js"></script> -->\n\n<ion-content id="welcome">\n  <ion-grid class = "body" >\n      <ion-row>\n          <ion-col center text-center>\n              <img src="assets/imgs/logo-2-copy-2@2x.png" />\n              <h1  class = "The-Future-of-Ridesh" translate>homeTitle</h1>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col center text-center>\n                <div class = "The-easiest-solution" translate>homeDesc</div>\n            </ion-col>\n          </ion-row>\n    <ion-row>\n      <ion-col center text-center>\n        <div> \n          <!-- <img src="assets/imgs/main-button@3x.png"  (click)="toLogin()" >  -->\n          <button  ion-button block\n            color="button"\n            class= "longButton" \n            (click)="toLogin()"><div translate>homeLogin</div></button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col center text-center>\n        <div><a class="Sign-Up" (click)="toSignup()" translate>homeSignUp</a></div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col center text-center>\n        <div id="container">\n          <div>EN</div>\n          <div>\n            <ion-item class = "toggle">\n              <ion-toggle [(ngModel)]="constantService.isChinese" (ngModelChange)="update($event)">\n                </ion-toggle>\n            </ion-item>\n          </div>\n          <div>中文</div>\n        </div> \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* ConstantService */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_front_end_driver_front_end__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pass_driver_pass_driver__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_constants__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DriverHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverHomePage = /** @class */ (function () {
    function DriverHomePage(navCtrl, navParams, http, popoverCtrl, translate, constant) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.translate = translate;
        this.constant = constant;
        this.passingJson = null;
        this.passingJson = JSON.parse(this.navParams.get('data'));
        var url = document.URL.split('#')[0];
        var headers = new Headers();
        console.log('ionViewDidLoad DriverHomePage');
        if (url.indexOf("localhost") > 0)
            url = "http://localhost:8080/";
        else
            url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
        headers.append('Content-Type', 'application/json');
        this.http.get(url + 'getDriverTrips', {
            params: {
                driverId: this.passingJson.userId
                // driverId: 2
            }
        })
            .toPromise()
            .then(function (result) {
            _this.data = JSON.parse(result._body);
            console.log('LENGTH: ' + _this.data.length);
            if (_this.data.length > 0)
                _this.isDataAvai = true;
            else
                _this.isDataAvai = false;
            console.log(_this.data);
        });
    }
    DriverHomePage.prototype.openMore = function (d, i) {
        this.currentIndex = i;
    };
    DriverHomePage.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    DriverHomePage.prototype.ionViewDidLoad = function () {
        this.switchLanguage(this.constant.isChinese ? 'cn' : 'en');
        this.setBackButtonAction();
    };
    DriverHomePage.prototype.presentPopover = function (myEvent) {
        var data = this.navParams.get('data');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__more_more__["a" /* MorePage */], { data: data });
        popover.present({
            ev: myEvent
        });
    };
    DriverHomePage.prototype.createTrip = function () {
        console.log(this.navParams.get('data'));
        var data = this.navParams.get('data');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__driver_front_end_driver_front_end__["a" /* DriverFrontEndPage */], {
            data: data
        });
    };
    DriverHomePage.prototype.back = function () {
        var data = this.navParams.get('data');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pass_driver_pass_driver__["a" /* PassDriverPage */], {
            data: data
        });
    };
    //Method to override the default back button action
    DriverHomePage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            //Write here wherever you wanna do
            var data = _this.navParams.get('data');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pass_driver_pass_driver__["a" /* PassDriverPage */], {
                data: data
            });
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */])
    ], DriverHomePage.prototype, "navBar", void 0);
    DriverHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-home',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/driver-home/driver-home.html"*/'<ion-header>\n    <ion-navbar color="nav-color">\n        <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n      <ion-buttons end>\n        <button ion-button icon-only (click) = "presentPopover($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n <div class = "question" translate>DriverHome</div>\n  <div *ngIf = "isDataAvai">\n      <div *ngFor="let d of data; let i = index">\n          <ion-grid class="tripsContent">\n           \n                <ion-row (click)="openMore(d,i)" >\n                    <div class=\'tableCol2\'>\n                        <ion-row>\n                            <ion-col class= "col col-50">\n                                <div translate>dDate</div>: {{ d.createdOn }}\n                            </ion-col>\n                            <ion-col col-5 >\n                                Time: {{ d.startTime }}\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col>\n                                From: {{ d.startAddrId }}\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col>\n                                To: {{ d.destAddrId }}\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                                <ion-col>\n                                    Trip Cost Per Person: {{ d.tripCost }}\n                                </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class= "col col-50">Round Trip: {{ d.isRoundTrip == 1? \'Yes\':\'No\' }}</ion-col>\n                            <ion-col col-5>Car Model: {{ d.luggageDesc}}</ion-col>\n                        </ion-row>\n                    </div>\n                </ion-row>\n            \n            \n                <ion-row class="moreInfo" *ngIf = "i == currentIndex" >\n                    <div *ngFor="let i of d.passengerList;">\n                        <ion-row>\n                          <ion-col>\n                            <div class="TripCost" >Passenger: {{i.firstName}} {{i.lastName}} &emsp; &emsp;phone: {{ i.phoneNo}}   </div> \n                          </ion-col>\n                        </ion-row>\n                    </div>\n                </ion-row>\n          </ion-grid>\n          </div>\n  </div>\n\n  <div  *ngIf = "isDataAvai != true">\n      You don\'t have anytrips\n  </div>\n  \n  <div>\n      <ion-item>\n          <!-- <button  color="button" ion-button block color="yellow" (click)="createTrip()">\n            Create Trip\n          </button> -->\n          <button ion-button block\n            color="button"\n            class= "longButton" \n            (click)="createTrip()">Create Trip\n            </button>\n        </ion-item> \n  </div>\n    \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/driver-home/driver-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* ConstantService */]])
    ], DriverHomePage);
    return DriverHomePage;
}());

//# sourceMappingURL=driver-home.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pass_driver_pass_driver__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_User__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_constants__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alertCtrl, navParams, http, formBuilder, translate, constant) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.constant = constant;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_User__["a" /* User */]();
        this.emailColor = 'green';
        this.credentialsForm = this.formBuilder.group({
            email: [''],
            password: ['']
        });
    }
    LoginPage.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.switchLanguage(this.constant.isChinese ? 'cn' : 'en');
        this.setBackButtonAction();
    };
    LoginPage.prototype.onSignInClick = function () {
        var _this = this;
        var url = document.URL.split('#')[0];
        var headers = new Headers();
        if (url.indexOf("localhost") > 0)
            url = "http://localhost:8080/";
        else
            url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
        headers.append('Content-Type', 'application/json');
        this.http.get(url + 'getUser', {
            params: {
                userName: this.user.userName,
                userPassword: this.user.userPassword
            }
        })
            .toPromise()
            .then(function (data) {
            if (data._body) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pass_driver_pass_driver__["a" /* PassDriverPage */], {
                    data: data._body
                });
            }
            else {
                _this.emailColor = "red";
                alert("Wrong Username/Password");
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
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
        })
            .catch(console.log);
    };
    LoginPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            //Write here wherever you wanna do
            var data = _this.navParams.get('data');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
                data: data
            });
        };
    };
    LoginPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */])
    ], LoginPage.prototype, "navBar", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/khanhnguyen/goUI2018/src/pages/login/login.html"*/'<ion-header>\n        <ion-navbar>\n            <img src="assets/imgs/goyu-logo@3x.png" class="goyu_logo"/>\n         </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="credentialsForm">\n\n      <ion-item>\n        <ion-label floating translate>lEmail</ion-label>\n        <ion-input [formControl]="credentialsForm.controls[\'email\']"\n        [(ngModel)]="user.userName" type="email"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label floating translate>lPassword</ion-label>\n        <ion-input [formControl]="credentialsForm.controls[\'password\']"\n        [(ngModel)]="user.userPassword"  type="password"></ion-input>\n      </ion-item>      \n    \n      <!-- <ion-item>\n        <button  color="button" class="login-button" ion-button block color="blue" (click)="onSignInClick()">\n          Sign in\n        </button>\n      </ion-item>   -->\n  </form>\n<!--     \n      <ion-row>\n        <ion-col text-center>\n          <button ion-button clear color="light" (click)="onForgotPassword()">\n            Forgot your password?\n          </button>\n        </ion-col>\n      </ion-row> -->\n    \n\n\n  <!-- <button ion-button block\n          color="button"\n          class="login-button"\n          (click)="onSignInClick()">Sign In\n  </button> -->\n<br>\n  <div class = "Main-button">\n     <!-- <img src="assets/imgs/main-button@3x.png"  (click)="onSignInClick()" >  -->\n     <button ion-button block\n     color="button"\n     class= "longButton" \n     (click)="onSignInClick()" ><div translate>login</div>\n     </button>\n  </div>\n\n  <!-- <button ion-button\n          block\n          icon-start\n          color="google-button"\n          class="login-button"\n          (click)="onSignInClick()">\n    <ion-icon name="logo-googleplus"></ion-icon>\n    Google Sign In  \n  </button> -->\n<!-- \n  <button ion-button\n          block\n          icon-start\n          color="facebook-button"\n          class="login-button"\n          (click)="onSignInClick()">\n    <ion-icon name="logo-facebook"></ion-icon>\n    Facebook Login\n  </button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/khanhnguyen/goUI2018/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_8__services_constants__["a" /* ConstantService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map