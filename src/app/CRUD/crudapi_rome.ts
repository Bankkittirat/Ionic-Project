import { Injectable, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
    providedIn: 'root',
})

export class curdapi_rome{
constructor(private R1: AngularFirestore){}
readData() {
        const r2 = this.R1.collection('RovData5').snapshotChanges();
        return r2;
        
        // return this.movie;
    }
    addData(item:any) {

    }
    delData(docId: any) {

    }
    updateData(item) {

        // for (let it = 0; it < this.movie.length; it++) {
        //     if (this.movie[it].id == item.id) {
        //       this.movie[it].img = item.img;
        //       this.movie[it].title = item.title;
        //       this.movie[it].review = Number(item.review);
        //       this.movie[it].type = item.type;
        //       console.log(this.movie);
            // }
 
         }
    }