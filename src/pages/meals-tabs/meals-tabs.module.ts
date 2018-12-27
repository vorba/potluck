import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealsTabsPage } from './meals-tabs';

@NgModule({
  declarations: [
    MealsTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(MealsTabsPage),
  ],
})
export class MealsTabsPageModule {}
