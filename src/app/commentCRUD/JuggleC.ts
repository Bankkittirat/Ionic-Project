import { Injectable, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
    providedIn: 'root',
})

export class jungleC {
constructor(private R5:AngularFirestore){}
readData() {
        const r4 = this.R5.collection('comment').snapshotChanges();
        return r4;
        
        // return this.movie;
    }
    addData(item:any) {

    }
    delData(item: any) {
        return this.R5.doc('comment/' + item.id).delete();
    }
    updateData(item) {
        return this.R5.doc('comment/' + item.id).update({
            Comment:item.Comment,
            Role:item.Role,

            // Other info you want to add here
        })
    }
}