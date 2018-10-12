import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  constructor(public menuCtrl: MenuController) {}

  openMenu() {
    this.menuCtrl.open();
  }
 }
