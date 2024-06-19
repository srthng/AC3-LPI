import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Temp1 =parseInt('');
  Temp2 =parseInt('');
  Temp3 =parseInt('');
  Temp4 =parseInt('');
  temperaturaMedia=0;

  

  constructor(public router: Router) {}

  TempMedia(){
    this.temperaturaMedia=(this.Temp1+this.Temp2+this.Temp3+this.Temp4)/4
    return this.temperaturaMedia
  }

  abrirTela(){
    this.router.navigateByUrl
    (`/tela2/${this.temperaturaMedia}`)
  }

  
}
