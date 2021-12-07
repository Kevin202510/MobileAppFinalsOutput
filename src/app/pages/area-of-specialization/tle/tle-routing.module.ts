import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TLEPage } from './tle.page';

const routes: Routes = [
  {
    path: '',
    component: TLEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TLEPageRoutingModule {}
