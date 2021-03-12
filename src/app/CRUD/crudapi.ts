import { Injectable, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
    providedIn: 'root',
})

export class crudapi {
constructor(private R1: AngularFirestore,private R5:AngularFirestore){}
readData() {
        const r2 = this.R1.collection('RovData').snapshotChanges();
        return r2;
        const r4 = this.R5.collection('comment').snapshotChanges();
        return r4;
        
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