import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JunglePageRoutingModule } from './jungle-routing.module';

import { JunglePage } from './jungle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JunglePageRoutingModule
  ],
  declarations: [JunglePage]
})
export class JunglePageModule {}
