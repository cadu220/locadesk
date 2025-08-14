import { Component } from '@angular/core';
import { Carro } from '../../models/carro';
import { CarrosListComponent } from '../carros-list/carros-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [CarrosListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
