import { Component, OnInit } from '@angular/core';
import { crudapi_adddata} from '../CRUD/Crud_adddata';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.page.html',
  styleUrls: ['./comment-add.page.scss'],
})
export class CommentAddPage implements OnInit {
//  Password:any;
//  Username:string;
//  Comment:any;
//  Role:any;

todo:any = {};
constructor(private getcrud:crudapi_adddata){}

  ngOnInit() {

  }
    Send(){
      this.getcrud.addData(this.todo)
    }
}
