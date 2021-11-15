import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaOfSpecializationPageRoutingModule } from './area-of-specialization-routing.module';

import { AreaOfSpecializationPage } from './area-of-specialization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaOfSpecializationPageRoutingModule
  ],
  declarations: [AreaOfSpecializationPage]
})
export class AreaOfSpecializationPageModule {}
