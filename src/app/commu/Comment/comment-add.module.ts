import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentAddPageRoutingModule } from './comment-add-routing.module';

import { CommentAddPage } from './comment-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentAddPageRoutingModule
  ],
  declarations: [CommentAddPage]
})
export class CommentAddPageModule {}
