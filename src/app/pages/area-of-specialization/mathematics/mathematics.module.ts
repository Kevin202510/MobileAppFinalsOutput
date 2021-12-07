import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

import { MathematicsPageRoutingModule } from './mathematics-routing.module';

import { MathematicsPage } from './mathematics.page';

export function playerFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    MathematicsPageRoutingModule
  ],
  declarations: [MathematicsPage]
})
export class MathematicsPageModule {}
