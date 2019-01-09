import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { PassFronEndPage } from '../pass-fron-end/pass-fron-end';
import { User } from '../../models/User';
import { PassDriverPage } from '../pass-driver/pass-driver';
import { MorePage } from '../more/more';
import { TranslateService } from '@ngx-translate/core';
import { ConstantService } from '../../services/constants';

/**
 * Generated class for the PassengerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passenger-home',
  templateUrl: 'passenger-home.html',
})
export class PassengerHomePage {
  user = new User();
  passingJson = null;

  data : any;
  isDataAvai : boolean;
  isExpand : boolean;
  currentIndex : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private popoverCtrl: PopoverController
    ,private translate: TranslateService, public constant: ConstantService) {
    this.passingJson = JSON.parse(this.navParams.get('data'));
    this.isExpand = false;
    let url = document.URL.split('#')[0];
    let headers = new Headers();
    console.log('ionViewDidLoad: ' + this.passingJson.userId);
    if( url.indexOf("localhost") > 0) url = "http://localhost:8080/";
    else url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
      headers.append('Content-Type', 'application/json');
      this.http.get(url + 'getAllTrips', {
      })
      .toPromise()
      .then((result: any) => {
        
        this.data = JSON.parse(result._body);
        // console.log('LENGTH: ' + this.data.length);
        if(this.data.length >0) this.isDataAvai = true;
        else this.isDataAvai = false;
        // console.log(this.data);
      });
  }

  presentPopover(myEvent) {
    let data = this.navParams.get('data');
    let popover = this.popoverCtrl.create(MorePage, {data:data});
    popover.present({
      ev: myEvent
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  openMore(data, i){
    console.log('EXPANDING index: --- ' + i +  " --- and data is : " + data);
    this.currentIndex = i;
    // if(i){
    //   this.isExpand = this.isExpand == true ? false : true;
    // }
  }

  book (data){
    console.log(data);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ionViewDidLoad() {
    this.switchLanguage(this.constant.isChinese?'cn':'en');
  }

  back(){
    let data = this.navParams.get('data');
    this.navCtrl.push(PassFronEndPage,  {
      data: data
    });
  }

  bookTrip(){
    let data = this.navParams.get('data');
    let url = document.URL.split('#')[0];
    let user = new User;
    if( url.indexOf("localhost") > 0) url = "http://localhost:8080/";
    else url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
    
    var headers = new Headers();
        // headers["Access-Control-Allow-Origin"] = "*";  
        headers.append('Content-Type', 'application/json');

    console.log(this.data[this.currentIndex]);
     let PTrip = {"tripId" : this.data[this.currentIndex].tripId, "userId" : this.passingJson.userId};

     console.log(PTrip);
     this.http.post(url + 'addPTrip', JSON.stringify(PTrip),{headers: headers})
     .map(res => res.json())
     .subscribe(res => console.log("MAP")
               ,error => console.log("HAS AN ERROR: " + error),
               () => console.log("Finished"));

      setTimeout( () => {
        this.navCtrl.push(PassFronEndPage,{data: this.navParams.get('data')});
      } , 400 );
    
  }

}
