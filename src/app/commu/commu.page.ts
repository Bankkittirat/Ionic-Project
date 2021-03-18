import { Component, OnInit } from '@angular/core';
import { crudapi } from '../CRUD/crudapi';
import { jungleC } from '../commentCRUD/JuggleC';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-commu',
  templateUrl: './commu.page.html',
  styleUrls: ['./commu.page.scss'],
})
export class CommuPage implements OnInit {

  g1: any;
  
 
  r3: any;
  r5: any;
  constructor(private getcrud: crudapi, private getcrud2: jungleC, private route: Router,public actionSheetController: ActionSheetController,public alertController: AlertController) { }
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
          name: e.payload.doc.data()['Name'.toString()],
          Postname: e.payload.doc.data()['PostName'.toString()],

        }
      })
      console.log(this.r5);
    })

  }
  updateData(item: any) {
    //  this.getcrud2.updateData(item);
    const d1 = JSON.stringify(item)
    this.route.navigate(['edit', d1])

    // Other info you want to add here


  }
  delData(item: any) {
    this.getcrud2.delData(item);
  }
  async openAS(item) {
    const actionSheet = await this.actionSheetController.create({
      header: 'เลือกหัวข้อ',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          
          this.presentAlertConfirm(item);
          
        }
        
      }, {
        text: 'EditData',
        icon: 'share',
        handler: () => {
          this.presentAlertConfirm2(item);
        }
      }, 
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
        
      }]
    });
    await actionSheet.present();
  }
  sendG1(){
    console.log(this.g1);
    this.route.navigate(['comment-add',this.g1])
    
  }
  async presentAlertConfirm(item) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'ยืนยันการลบโพสต์หรือไม่?',
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
            this.delData(item);
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertConfirm2(item) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'ยืนยันการแก้ไขโพสต์หรือไม่?',
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
            this.updateData(item);
            
          }
        }
      ]
    });

    await alert.present();
  }
};