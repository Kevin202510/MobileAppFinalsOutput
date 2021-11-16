import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaOfSpecializationPageRoutingModule } from './area-of-specialization-routing.module';

import { AreaOfSpecializationPage } from './area-of-specialization.page';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    AreaOfSpecializationPageRoutingModule
  ],
  declarations: [AreaOfSpecializationPage]
})
export class AreaOfSpecializationPageModule {}
