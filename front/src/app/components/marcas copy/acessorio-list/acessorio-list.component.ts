import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { CarrosDetailsComponent } from '../../carros-details/carros-details.component';
import { AcessorioDetailsComponent } from '../acessorio-details/acessorio-details.component';
import { Acessorio } from '../../../models/acessorio';
import { AcessorioService } from '../../../services/acessorio.service';

@Component({
  selector: 'app-acessorio-list',
  imports: [RouterLink, MdbModalModule, AcessorioDetailsComponent],
  templateUrl: './acessorio-list.component.html',
  styleUrl: './acessorio-list.component.scss',
})
export class AcessorioListComponent {
  lista: Acessorio[] = [];

  @Input() modoModal: boolean = false;
  @Output() retorno = new EventEmitter<any>();

  modalService = inject(MdbModalService);
  AcessorioService = inject(AcessorioService);

  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  constructor() {
    let marca = history.state.marca;
    this.findAcessorio();
  }

  findAcessorio() {
    this.AcessorioService.findALl().subscribe({
      next: (acessorio) => {
        this.lista = acessorio;
      },
      error: (err) => {
        console.error('Error fetching acessorio:', err);
      },
    });
  }
  deleteByid(id: any) {
    Swal.fire({
      title: 'Deseja deletar?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
    }).then((result) => {
      if (result.isConfirmed) {
        this.AcessorioService.deleteById(id).subscribe({
          next: (res) => {
            Swal.fire({
              title: 'Deleted!',
              text: res,
              icon: 'success',
            });
            this.findAcessorio();
          },
          error: (err) => {
            Swal.fire({
              title: 'ERRO!',
              text: 'Erro ao deletar.',
              icon: 'error',
            });
          },
        });
      }
    });
  }

  editCar(marca: Acessorio) {
    console.log('Editando marca:', marca);
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  new() {
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  fecharModal(marca: Acessorio) {
    this.findAcessorio();
    this.modalRef.close();
  }
  enviarEventoAcessorio(acessorio: Acessorio) {
    this.retorno.emit(acessorio);
  }
}
