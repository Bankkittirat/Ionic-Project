import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JunglePage } from './jungle.page';

const routes: Routes = [
  {
    path: '',
    component: JunglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JunglePageRoutingModule {}
