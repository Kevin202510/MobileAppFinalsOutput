import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilipinoPage } from './filipino.page';

const routes: Routes = [
  {
    path: '',
    component: FilipinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilipinoPageRoutingModule {}
