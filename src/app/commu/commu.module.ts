import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommuPageRoutingModule } from './commu-routing.module';

import { CommuPage } from './commu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommuPageRoutingModule
  ],
  declarations: [CommuPage]
})
export class CommuPageModule {}
