import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

import { IonicModule } from '@ionic/angular';

import { ProfessionalEducationPageRoutingModule } from './professional-education-routing.module';

import { ProfessionalEducationPage } from './professional-education.page';

export function playerFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionalEducationPageRoutingModule
  ],
  declarations: [ProfessionalEducationPage]
})
export class ProfessionalEducationPageModule {}
