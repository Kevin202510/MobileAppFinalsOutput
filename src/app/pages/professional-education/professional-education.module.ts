import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionalEducationPageRoutingModule } from './professional-education-routing.module';

import { ProfessionalEducationPage } from './professional-education.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionalEducationPageRoutingModule
  ],
  declarations: [ProfessionalEducationPage]
})
export class ProfessionalEducationPageModule {}
