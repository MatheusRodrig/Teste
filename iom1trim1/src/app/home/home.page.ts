import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string = 'Matheus'
  sobrenome: string = 'Rodrigues de Oliveira'

  constructor() {}

}
