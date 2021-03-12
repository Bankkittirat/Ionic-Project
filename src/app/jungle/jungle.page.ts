import { Component, OnInit } from '@angular/core';
import { crudapi } from '../CRUD/crudapi';
import { jungleC } from '../commentCRUD/JuggleC';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jungle',
  templateUrl: './jungle.page.html',
  styleUrls: ['./jungle.page.scss'],
})
export class JunglePage implements OnInit {
  r3: any;
  r5: any;
  constructor(private getcrud: crudapi, private getcrud2: jungleC,private route:Router) { }
  ngOnInit() {
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
        }
      })
      console.log(this.r3);
    })
    this.getcrud2.readData().subscribe(data => {
      this.r5 = data.map(e => {

        return {
          id: e.payload.doc.id,
          Role: e.payload.doc.data()['Role'.toString()],
          comment: e.payload.doc.data()['Comment'.toString()],
          name: e.payload.doc.data()['Username'.toString()],

        }
      })
      console.log(this.r5);
    })

  }
  updateData(item: any) {
    //  this.getcrud2.updateData(item);
      const d1 = JSON.stringify(item)
      this.route.navigate(['edit',d1])

      // Other info you want to add here
    

  }
  delData(item: any) {
     this.getcrud2.delData(item);
  }
};
