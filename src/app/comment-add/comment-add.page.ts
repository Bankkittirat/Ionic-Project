import { Component, OnInit } from '@angular/core';
import { crudapi_adddata} from '../CRUD/Crud_adddata';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.page.html',
  styleUrls: ['./comment-add.page.scss'],
})
export class CommentAddPage implements OnInit {
//  Password:any;
//  Username:string;
//  Comment:any;
//  Role:any;
todo1:any;

todo:any = {Comment:""};
constructor(private getcrud:crudapi_adddata,public activate:ActivatedRoute,public alertController: AlertController,private route: Router){}

  ngOnInit() {
    this.todo.Comment=this.activate.snapshot.paramMap.get('g1');
    console.log(this.todo1);
    
    
    
  }
    Send(){
      this.getcrud.addData(this.todo)
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
