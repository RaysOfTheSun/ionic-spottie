import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MusicPlaylistOverviewComponent } from './music-playlist-overview.component';
import { ListContentCardModule } from '../list-content-card/list-content-card.module';

@NgModule({
  declarations: [MusicPlaylistOverviewComponent],
  imports: [CommonModule, IonicModule, ListContentCardModule],
  exports: [MusicPlaylistOverviewComponent]
})
export class MusicPlaylistOverviewModule {}
