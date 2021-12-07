import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';


import { BiologicalSciencePageRoutingModule } from './biological-science-routing.module';

import { BiologicalSciencePage } from './biological-science.page';

export function playerFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    BiologicalSciencePageRoutingModule
  ],
  declarations: [BiologicalSciencePage]
})
export class BiologicalSciencePageModule {}
