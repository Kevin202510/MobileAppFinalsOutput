import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralEducationPage } from './general-education.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralEducationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralEducationPageRoutingModule {}
