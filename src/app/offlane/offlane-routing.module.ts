import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflanePage } from './offlane.page';

const routes: Routes = [
  {
    path: '',
    component: OfflanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflanePageRoutingModule {}
