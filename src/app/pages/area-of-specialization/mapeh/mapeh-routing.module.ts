import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapehPage } from './mapeh.page';

const routes: Routes = [
  {
    path: '',
    component: MapehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapehPageRoutingModule {}
