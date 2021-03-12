import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarryPageRoutingModule } from './carry-routing.module';

import { CarryPage } from './carry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarryPageRoutingModule
  ],
  declarations: [CarryPage]
})
export class CarryPageModule {}
