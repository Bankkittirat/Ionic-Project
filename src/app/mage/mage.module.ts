import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagePageRoutingModule } from './mage-routing.module';

import { MagePage } from './mage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagePageRoutingModule
  ],
  declarations: [MagePage]
})
export class MagePageModule {}
