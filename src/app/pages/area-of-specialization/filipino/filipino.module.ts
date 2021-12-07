import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

import { FilipinoPageRoutingModule } from './filipino-routing.module';

import { FilipinoPage } from './filipino.page';
export function playerFactory(){
return player;
}


@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    FilipinoPageRoutingModule
  ],
  declarations: [FilipinoPage]
})
export class FilipinoPageModule {}
