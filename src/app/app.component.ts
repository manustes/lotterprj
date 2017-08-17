import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/index.pages';

//translate
import { TranslateService } from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})
export class lotterprj {
  rootPage:any = TabsPage;

  constructor(platform: Platform, 
              translate: TranslateService, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen ) {
    
    translate.setDefaultLang('es');
    translate.use('es');            

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

