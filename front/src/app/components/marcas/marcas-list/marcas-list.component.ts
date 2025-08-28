import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Marca } from '../../../models/marca';
import { MarcaService } from '../../../services/marca.service';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { CarrosDetailsComponent } from '../../carros-details/carros-details.component';
import { MarcasDetailsComponent } from '../marcas-details/marcas-details.component';

@Component({
  selector: 'app-marcas-list',
  imports: [RouterLink, MdbModalModule, MarcasDetailsComponent],
  templateUrl: './marcas-list.component.html',
  styleUrl: './marcas-list.component.scss',
})
export class MarcasListComponent {
  lista: Marca[] = [];

  modalService = inject(MdbModalService);
  MarcaService = inject(MarcaService);

  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  constructor() {
    let marca = history.state.marca;
    this.findMarcas();
  }

  findMarcas() {
    this.MarcaService.findALl().subscribe({
      next: (marcas) => {
        this.lista = marcas;
      },
      error: (err) => {
      },
    });
  }
  deleteByid(id: any) {
    Swal.fire({
      title: 'Deseja continuar?',
      text: "Essa alteração não pode ser revertida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
    }).then((result) => {
      if (result.isConfirmed) {
        this.MarcaService.deleteById(id).subscribe({
          next: (res) => {
            Swal.fire({
              title: 'Deletado!',
              text: res,
              icon: 'success',
            });
            this.findMarcas();
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

  editCar(marca: Marca) {
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  new() {
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  fecharModal(marca: Marca) {
    this.findMarcas();
    this.modalRef.close();
  }
}
