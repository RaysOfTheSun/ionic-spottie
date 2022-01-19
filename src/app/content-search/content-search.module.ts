import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentSearchPageRoutingModule } from './content-search-routing.module';

import { ContentSearchPage } from './content-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentSearchPageRoutingModule
  ],
  declarations: [ContentSearchPage]
})
export class ContentSearchPageModule {}
