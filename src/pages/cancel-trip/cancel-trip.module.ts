import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancelTripPage } from './cancel-trip';

@NgModule({
  declarations: [
    CancelTripPage,
  ],
  imports: [
    IonicPageModule.forChild(CancelTripPage),
  ],
})
export class CancelTripPageModule {}
