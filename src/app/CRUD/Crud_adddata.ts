import { Injectable, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';
@Injectable({
    providedIn: 'root',
})

export class crudapi_adddata {
    temp:any;
constructor(private R1: AngularFirestore){}
readData() {
        const r2 = this.R1.collection('comment').snapshotChanges();
        return r2;
        
        // return this.movie;
    }
    addData(item:any) {
        this.temp= this.R1.collection('comment');
        this.temp.add({
            Role: item.Role,
            Comment: item.Comment,
            Name: item.Name,
            PostName: item.PostName,
            Password: item.Password,
           
            // Other info you want to add here
        });

    }
    delData(docId: any) {
        return this.R1.doc('comment/' + docId).delete();
    }
    updateData(id:any,item:any) {
        console.log(id)
        console.log(item)
        this.R1.doc('comment/' + id).update({
            
            Comment: item.Comment,
            Role: item.Role,
            

            // Other info you want to add here
        })}
    }