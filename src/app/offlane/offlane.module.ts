import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflanePageRoutingModule } from './offlane-routing.module';

import { OfflanePage } from './offlane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfflanePageRoutingModule
  ],
  declarations: [OfflanePage]
})
export class OfflanePageModule {}
