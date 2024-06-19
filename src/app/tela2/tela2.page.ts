import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
})
export class Tela2Page implements OnInit {

  temperaturaMedia:any;
  culturas: any[] = [];

  temperaturaCulturas = [
    { name: 'Couve', temperaturaMinima: -5, temperaturaMaxima: 15 },
    { name: 'Cenoura', temperaturaMinima: -3, temperaturaMaxima: 24 },
    { name: 'Espinafre', temperaturaMinima: -5, temperaturaMaxima: 18 },
    { name: 'Beterraba', temperaturaMinima: -3, temperaturaMaxima: 20 },
    { name: 'Alho', temperaturaMinima: -5, temperaturaMaxima: 20 },
    { name: 'Quiabo', temperaturaMinima: 20, temperaturaMaxima: 35 },
    { name: 'Melancia', temperaturaMinima: 16, temperaturaMaxima: 35 },
    { name: 'Pimenta', temperaturaMinima: 21, temperaturaMaxima: 35 },
    { name: 'Milho', temperaturaMinima: 20, temperaturaMaxima: 32 },
    { name: 'Tomate', temperaturaMinima: 18, temperaturaMaxima: 30 }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.temperaturaMedia = this.activatedRoute.snapshot.paramMap.get('temperaturaMedia')
    this.ChecarTemperatura()
  }

  ChecarTemperatura(){
    this.culturas = this.temperaturaCulturas.filter(planta => this.temperaturaMedia >= planta.temperaturaMinima && this.temperaturaMedia <= planta.temperaturaMaxima)
  }

}
