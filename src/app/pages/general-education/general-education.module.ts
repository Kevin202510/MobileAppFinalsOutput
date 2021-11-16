import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

import { IonicModule } from '@ionic/angular';

import { GeneralEducationPageRoutingModule } from './general-education-routing.module';

import { GeneralEducationPage } from './general-education.page';

export function playerFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralEducationPageRoutingModule
  ],
  declarations: [GeneralEducationPage]
})
export class GeneralEducationPageModule {}
