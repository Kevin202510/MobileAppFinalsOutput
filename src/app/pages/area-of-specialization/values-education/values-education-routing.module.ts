import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValuesEducationPage } from './values-education.page';

const routes: Routes = [
  {
    path: '',
    component: ValuesEducationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValuesEducationPageRoutingModule {}
