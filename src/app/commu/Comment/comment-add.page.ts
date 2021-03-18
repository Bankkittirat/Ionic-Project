import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { crudapi_adddata} from '../Crud_adddata';

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
todo1:any;
todo:any = {};
constructor(private getcrud:crudapi_adddata,public activate:ActivatedRoute){}

  ngOnInit() {
    this.todo1=this.activate.snapshot.paramMap.get('g1');
    
    
  }
    Send(){
      this.getcrud.addData(this.todo)
    }
}
