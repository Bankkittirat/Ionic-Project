import { Component } from '@angular/core';
import { from } from 'rxjs';
import {crudapi}from '../CRUD/crudapi';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  r3: any;
  constructor(private getcrud:crudapi,public router: Router) {}
  ngOnInit(){
      this.getcrud.readData().subscribe(data => { 
      this.r3 = data.map(e => { 
      return { 
      Role: e.payload.doc.data()['Role'.toString()], 
      Title: e.payload.doc.data()['Title'.toString()],
      }; 
      }); 
      console.log(this.r3); 
      
      }); 
      } 
      updateItem(item){
        let dataProduct = JSON.stringify(item);   
        this.router.navigate(["edit", dataProduct]);
      }
  }


