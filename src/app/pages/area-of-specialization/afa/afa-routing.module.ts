import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AFAPage } from './afa.page';

const routes: Routes = [
  {
    path: '',
    component: AFAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AFAPageRoutingModule {}
