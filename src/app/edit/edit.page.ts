import { Component, OnInit } from '@angular/core';
import { crudapi_adddata} from '../CRUD/Crud_adddata';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
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
  constructor(private getcrud:crudapi_adddata,private yui: ActivatedRoute,private route:Router,public alertController: AlertController){}
  
    ngOnInit() {
      
      const yui3 = this.yui.snapshot.paramMap.get('d1')
      this.yui2 = JSON.parse(yui3)
    }
      Send(){
        this.getcrud.updateData(this.yui2.id,this.todo)
      }
      async presentAlertConfirm2() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Confirm!',
          message: 'ยืนยันหรือไม่?',
          buttons: [
            {
              text: 'ยกเลิก',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'ยอมรับ',
              handler: () => {
                console.log('Confirm Okay');
                this.route.navigate(['home']);
                ;
              }
            }
          ]
        });
    
        await alert.present();
      }
  }