import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommuPage } from './commu.page';

const routes: Routes = [
  {
    path: '',
    component: CommuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommuPageRoutingModule {}
