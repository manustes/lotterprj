import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectionsPage } from './projections';

@NgModule({
  declarations: [
    ProjectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectionsPage),
  ],
})
export class ProjectionsPageModule {}
