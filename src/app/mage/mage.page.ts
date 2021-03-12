import { Component, OnInit } from '@angular/core';
import {curdapi_mage}from '../CRUD/curdapi_mage';
@Component({
  selector: 'app-mage',
  templateUrl: './mage.page.html',
  styleUrls: ['./mage.page.scss'],
})
export class MagePage implements OnInit {
  r3: any;
  constructor(private getcrud:curdapi_mage) {}
  ngOnInit(){
      this.getcrud.readData().subscribe(data => { 
      this.r3 = data.map(e => { 
      return { 
        Role: e.payload.doc.data()['Role'.toString()], 
        Title: e.payload.doc.data()['Title'.toString()],
        Img: e.payload.doc.data()['Img'.toString()],
        Title2: e.payload.doc.data()['Title2'.toString()],
        Img2: e.payload.doc.data()['Img2'.toString()],
        Title3: e.payload.doc.data()['Title3'.toString()],
        Img3: e.payload.doc.data()['Img3'.toString()],
        Title4: e.payload.doc.data()['Title4'.toString()],
        Img4: e.payload.doc.data()['Img4'.toString()],
      }; 
      }); 
      console.log(this.r3); 
      }); 
      } 
}