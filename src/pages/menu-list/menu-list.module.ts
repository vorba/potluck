import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuListPage } from './menu-list';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  declarations: [
    MenuListPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuListPage),
    IonicRatingModule,
  ],
})
export class MenuListPageModule {}
