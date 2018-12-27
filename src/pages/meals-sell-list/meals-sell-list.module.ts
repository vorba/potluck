import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealsSellListPage } from './meals-sell-list';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  declarations: [
    MealsSellListPage,
  ],
  imports: [
    IonicPageModule.forChild(MealsSellListPage),
    IonicRatingModule,
  ],
})
export class MealsSellListPageModule {}
