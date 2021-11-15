import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalEducationPage } from './professional-education.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalEducationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalEducationPageRoutingModule {}
