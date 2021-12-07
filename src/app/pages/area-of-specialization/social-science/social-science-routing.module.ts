import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialSciencePage } from './social-science.page';

const routes: Routes = [
  {
    path: '',
    component: SocialSciencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialSciencePageRoutingModule {}
