import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaOfSpecializationPage } from './area-of-specialization.page';

const routes: Routes = [
  {
    path: '',
    component: AreaOfSpecializationPage
  },
  {
    path: 'english',
    loadChildren: () => import('./english/english.module').then( m => m.EnglishPageModule)
  },
  {
    path: 'filipino',
    loadChildren: () => import('./filipino/filipino.module').then( m => m.FilipinoPageModule)
  },
  {
    path: 'mathematics',
    loadChildren: () => import('./mathematics/mathematics.module').then( m => m.MathematicsPageModule)
  },
  {
    path: 'mapeh',
    loadChildren: () => import('./mapeh/mapeh.module').then( m => m.MapehPageModule)
  },
  {
    path: 'values-education',
    loadChildren: () => import('./values-education/values-education.module').then( m => m.ValuesEducationPageModule)
  },
  {
    path: 'tle',
    loadChildren: () => import('./tle/tle.module').then( m => m.TLEPageModule)
  },
  {
    path: 'social-science',
    loadChildren: () => import('./social-science/social-science.module').then( m => m.SocialSciencePageModule)
  },
  {
    path: 'physical-science',
    loadChildren: () => import('./physical-science/physical-science.module').then( m => m.PhysicalSciencePageModule)
  },
  {
    path: 'biological-science',
    loadChildren: () => import('./biological-science/biological-science.module').then( m => m.BiologicalSciencePageModule)
  },
  {
    path: 'afa',
    loadChildren: () => import('./afa/afa.module').then( m => m.AFAPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaOfSpecializationPageRoutingModule {}
