import { CarroService } from './../../services/carro.service';
import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Carro } from '../../models/carro';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { CarrosDetailsComponent } from '../carros-details/carros-details.component';

@Component({
  selector: 'app-carros-list',
  imports: [RouterLink, MdbModalModule, CarrosDetailsComponent],
  templateUrl: './carros-list.component.html',
  styleUrl: './carros-list.component.scss',
})
export class CarrosListComponent {
  lista: Carro[] = [];

  modalService = inject(MdbModalService);
  CarroService = inject(CarroService);

  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  constructor() {
    let carro = history.state.carro;
    this.findCarros();
  }

  findCarros() {
    this.CarroService.findALl().subscribe({
      next: (carros) => {
        this.lista = carros;
      },
      error: (err) => {
         Swal.fire({
              title: 'Erro!',
              text: 'Erro ao Carregar os carros',
              icon: 'error',
            });
      },
    });
  }
  deleteByid(id: any) {
    Swal.fire({
      title: 'Deseja deletar carro?',
      text: "Essa aação não é reversível!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.CarroService.deleteById(id).subscribe({
          next: (res) => {
            Swal.fire({
              title: 'Deletado!',
              text: res,
              icon: 'success',
            });
            this.findCarros();
          },
          error: (err) => {
            Swal.fire({
              title: 'Erro!',
              text: 'Erro ao deletar o carro',
              icon: 'error',
            });
          },
        });
      }
    });
  }

  editCar(carro: Carro) {
    console.log('Editando carro:', carro);
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  new() {
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  fecharModal(carro: Carro) {
    this.findCarros();
    this.modalRef.close();
  }
}
