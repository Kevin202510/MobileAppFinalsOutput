import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

import { EnglishPageRoutingModule } from './english-routing.module';

import { EnglishPage } from './english.page';

export function playerFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishPageRoutingModule
  ],
  declarations: [EnglishPage]
})
export class EnglishPageModule {}
