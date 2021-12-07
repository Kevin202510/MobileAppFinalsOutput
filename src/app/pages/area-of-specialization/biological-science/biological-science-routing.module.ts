import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiologicalSciencePage } from './biological-science.page';

const routes: Routes = [
  {
    path: '',
    component: BiologicalSciencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiologicalSciencePageRoutingModule {}
