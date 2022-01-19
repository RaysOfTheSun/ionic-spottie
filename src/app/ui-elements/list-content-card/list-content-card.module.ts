import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContentCardComponent } from './list-content-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ListContentCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [ListContentCardComponent]
})
export class ListContentCardModule {}
