import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-throw',
  templateUrl: './throw.page.html',
  styleUrls: ['./throw.page.scss'],
})
export class ThrowPage implements OnInit {
  vidUrl:SafeResourceUrl;
  vidUrl2:SafeResourceUrl;
  vidUrl3:SafeResourceUrl;
  vidUrl4:SafeResourceUrl;
  vidUrl5:SafeResourceUrl;
  constructor(private domSanitizer:DomSanitizer){

  }

  ngOnInit() {
    this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/KxN90cBggAA")
    this.vidUrl2 = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/PilVl6CgK80")
    this.vidUrl3 = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/gXWGEKIjcps")
    this.vidUrl4 = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/ceWE8btKqe4")
    this.vidUrl5 = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/BcMQNNRrcao")

  }

}
