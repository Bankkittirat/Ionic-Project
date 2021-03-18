import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThrowPage } from './throw.page';

const routes: Routes = [
  {
    path: '',
    component: ThrowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThrowPageRoutingModule {}
