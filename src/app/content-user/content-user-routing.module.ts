import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentUserPage } from './content-user.page';

const routes: Routes = [
  {
    path: '',
    component: ContentUserPage,
    children: [
      {
        path: 'user-library',
        loadChildren: () =>
          import('./user-library/user-library.module').then(
            (m) => m.UserLibraryPageModule
          )
      },
      {
        path: 'user-library-content-overview',
        loadChildren: () =>
          import(
            './user-library-content-overview/user-library-content-overview.module'
          ).then((m) => m.UserLibraryContentOverviewPageModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user-library'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentUserPageRoutingModule {}
