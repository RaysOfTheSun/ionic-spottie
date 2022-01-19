import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLibraryContentOverviewPageRoutingModule } from './user-library-content-overview-routing.module';

import { UserLibraryContentOverviewPage } from './user-library-content-overview.page';
import { MusicPlaylistOverviewModule } from 'src/app/ui-elements/music-playlist-overview/music-playlist-overview.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicPlaylistOverviewModule,
    UserLibraryContentOverviewPageRoutingModule
  ],
  declarations: [UserLibraryContentOverviewPage]
})
export class UserLibraryContentOverviewPageModule {}
