import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

import { PhysicalSciencePageRoutingModule } from './physical-science-routing.module';

import { PhysicalSciencePage } from './physical-science.page';

export function playerFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    PhysicalSciencePageRoutingModule
  ],
  declarations: [PhysicalSciencePage]
})
export class PhysicalSciencePageModule {}
