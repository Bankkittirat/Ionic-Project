import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThrowPageRoutingModule } from './throw-routing.module';

import { ThrowPage } from './throw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThrowPageRoutingModule
  ],
  declarations: [ThrowPage]
})
export class ThrowPageModule {}
