import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabbutton',
    pathMatch: 'full'
  },
  {
    path: 'general-education',
    loadChildren: () => import('./pages/general-education/general-education.module').then( m => m.GeneralEducationPageModule)
  },
  {
    path: 'professional-education',
    loadChildren: () => import('./pages/professional-education/professional-education.module').then( m => m.ProfessionalEducationPageModule)
  },
  {
    path: 'area-of-specialization',
    loadChildren: () => import('./pages/area-of-specialization/area-of-specialization.module').then( m => m.AreaOfSpecializationPageModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./pages/Authentication/authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
