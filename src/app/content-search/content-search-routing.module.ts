import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentSearchPage } from './content-search.page';

const routes: Routes = [
  {
    path: '',
    component: ContentSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentSearchPageRoutingModule {}
