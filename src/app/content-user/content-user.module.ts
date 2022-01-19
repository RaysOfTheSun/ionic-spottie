import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentUserPageRoutingModule } from './content-user-routing.module';

import { ContentUserPage } from './content-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentUserPageRoutingModule
  ],
  declarations: [ContentUserPage]
})
export class ContentUserPageModule {}
