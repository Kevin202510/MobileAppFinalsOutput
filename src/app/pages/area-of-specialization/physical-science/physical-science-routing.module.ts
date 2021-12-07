import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicalSciencePage } from './physical-science.page';

const routes: Routes = [
  {
    path: '',
    component: PhysicalSciencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysicalSciencePageRoutingModule {}
