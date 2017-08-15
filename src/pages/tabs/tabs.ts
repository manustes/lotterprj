import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage, ProjectionsPage, ResultsPage } from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = ResultsPage;
  tab2Root: any = ProjectionsPage;
  tab3Root: any = AboutPage;
  mySelectedIndex:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
