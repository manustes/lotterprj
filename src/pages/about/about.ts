import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private transCtrl: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  cambioIdioma(value: any){    
    this.transCtrl.use(value);
  }

}
