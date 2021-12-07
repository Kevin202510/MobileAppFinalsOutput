import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

import { SocialSciencePageRoutingModule } from './social-science-routing.module';

import { SocialSciencePage } from './social-science.page';

export function playerFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    SocialSciencePageRoutingModule
  ],
  declarations: [SocialSciencePage]
})
export class SocialSciencePageModule {}
