import { Component, OnInit } from '@angular/core';
import { crudapi_adddata} from '../CRUD/Crud_adddata';

import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit { 
  //  Password:any;
  //  Username:string;
  //  Comment:any;
  //  Role:any;
  yui2:any;
  todo:any = {};
  constructor(private getcrud:crudapi_adddata,private yui: ActivatedRoute){}
  
    ngOnInit() {
      
      const yui3 = this.yui.snapshot.paramMap.get('d1')
      this.yui2 = JSON.parse(yui3)
    }
      Send(){
        this.getcrud.updateData(this.yui2.id,this.todo)
      }
  }