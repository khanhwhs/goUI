import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverFrontEndPage } from './driver-front-end';

@NgModule({
  declarations: [
    DriverFrontEndPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverFrontEndPage),
  ],
})
export class DriverFrontEndPageModule {}
