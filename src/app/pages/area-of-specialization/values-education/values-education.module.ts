import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';


import { ValuesEducationPageRoutingModule } from './values-education-routing.module';

import { ValuesEducationPage } from './values-education.page';

export function playerFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    ValuesEducationPageRoutingModule
  ],
  declarations: [ValuesEducationPage]
})
export class ValuesEducationPageModule {}
