import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathematicsPage } from './mathematics.page';

const routes: Routes = [
  {
    path: '',
    component: MathematicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathematicsPageRoutingModule {}
