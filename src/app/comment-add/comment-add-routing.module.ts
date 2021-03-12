import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentAddPage } from './comment-add.page';

const routes: Routes = [
  {
    path: '',
    component: CommentAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentAddPageRoutingModule {}
