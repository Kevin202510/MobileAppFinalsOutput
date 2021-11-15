import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralEducationPageRoutingModule } from './general-education-routing.module';

import { GeneralEducationPage } from './general-education.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralEducationPageRoutingModule
  ],
  declarations: [GeneralEducationPage]
})
export class GeneralEducationPageModule {}
