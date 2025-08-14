import { Component } from '@angular/core';
import { Carro } from '../../models/carro';

@Component({
  selector: 'app-carros-list',
  imports: [],
  templateUrl: './carros-list.component.html',
  styleUrl: './carros-list.component.scss'
})
export class CarrosListComponent {

  lista: Carro[] = []


  constructor() {
    this.lista = [
      { id: 1, nome: 'Fusca', marca: 'Volkswagen' },
      { id: 2, nome: 'Civic', marca: 'Honda' },
      { id: 3, nome: 'Corolla', marca: 'Toyota' }
    ];
  }
}
