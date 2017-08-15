import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { lotterprj } from './app.component';

import { AboutPage, ProjectionsPage, ResultsPage, TabsPage } from "../pages/index.pages";


@NgModule({
  declarations: [
    lotterprj,
    AboutPage,
    ProjectionsPage,
    ResultsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(lotterprj)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    lotterprj,
    AboutPage,
    ProjectionsPage,
    ResultsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
