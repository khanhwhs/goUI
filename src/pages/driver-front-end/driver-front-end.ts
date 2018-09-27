import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trip } from '../../models/Trip';
import { Http, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { DriverHomePage } from '../driver-home/driver-home';

/**
 * Generated class for the DriverFrontEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-front-end',
  templateUrl: 'driver-front-end.html',
})
export class DriverFrontEndPage {

  public tripForm: FormGroup;
  trip = new Trip();
  data = null;
  json = null;
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder, public http : Http) {
   this.data = this.navParams.get('data');
   this.json = JSON.parse(this.data);    
   this.tripForm = this.formBuilder.group({
      userCarId : [''],
      createdOn : ['',Validators.compose([Validators.required, Validators.required])],
      seats : [''],
      destAddrId : [''],
      startAddrId : [''],
      startTime : [''],
      carId : [''],
      luggageDesc : [''],
      isRoundTrip : ['']
    });
  }

  onPostTrip() {
    let url = document.URL.split('#')[0];

    if( url.indexOf("localhost") > 0) url = "http://localhost:8080/";
    else url = "http://Gouspring.us-east-2.elasticbeanstalk.com/";
    
    var headers = new Headers();
        headers["Access-Control-Allow-Origin"] = "*";
        headers.append('Content-Type', 'application/json');
     console.log(this.json);
     this.trip.userCarId = this.json.userId;
     
 
    if( Object.keys(this.trip).length < 8){
      alert("Please fill the missing field(s)")
    }else{
      this.http.post(url + 'addTrip', JSON.stringify(this.trip), {headers: headers})
      .map(res => res.json())
      .subscribe(res => console.log("MAP")
                ,error => console.log(error),
                () => console.log("Finished"));
        this.navCtrl.push(DriverHomePage,  {
          data: this.data, from : "tripCreate"
        });
    }
     
  }

  onForgotPassword() {
    // this.logger.info('SignInPage: onForgotPassword()');
  }

}
