import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import { IonicModule } from '@ionic/angular';

import { FinalScorePageRoutingModule } from './final-score-routing.module';

import { FinalScorePage } from './final-score.page';

export function playerFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    FinalScorePageRoutingModule
  ],
  declarations: [FinalScorePage]
})
export class FinalScorePageModule {}
