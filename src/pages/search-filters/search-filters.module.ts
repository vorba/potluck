import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchFiltersPage } from './search-filters';

@NgModule({
  declarations: [
    SearchFiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchFiltersPage),
  ],
})
export class SearchFiltersPageModule {}
