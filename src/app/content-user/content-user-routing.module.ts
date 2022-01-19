import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentUserPage } from './content-user.page';

const routes: Routes = [
  {
    path: '',
    component: ContentUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentUserPageRoutingModule {}
