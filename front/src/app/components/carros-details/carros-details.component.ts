import { Acessorio } from './../../models/acessorio';
import { MarcaService } from './../../services/marca.service';
import { Carro } from './../../models/carro';
import { Component, EventEmitter, inject, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { CarroService } from '../../services/carro.service';
import Swal from 'sweetalert2';
import { Marca } from '../../models/marca';
import { AcessorioListComponent } from '../marcas copy/acessorio-list/acessorio-list.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-carros-details',
  imports: [MdbFormsModule, FormsModule, MdbDropdownModule, AcessorioListComponent],
  templateUrl: './carros-details.component.html',
  styleUrl: './carros-details.component.scss',
})
export class CarrosDetailsComponent {
  carro: Carro = new Carro();
  listaMarcas: Marca[] = [];
  @Output('retorno') retorno = new EventEmitter<any>();
  @ViewChild('modalAcessoriosList') modalAcessoriosList!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  router = inject(ActivatedRoute);
  routerNavigate = inject(Router);
  carroService = inject(CarroService);
  marcaService = inject(MarcaService);
  modalService = inject(MdbModalService);

  constructor() {
    let id = this.router.snapshot.params['id'];
    this.listaMarca();
    if (id > 0) {
      this.findById(id);
    }
  }

  marcaSelecionada: string = 'Selecione a marca';

selecionarMarca(marca: string) {
  this.marcaSelecionada = marca;
}

  findById(id: number) {
    this.carroService.findByid(id).subscribe({
      next: (carro) => {
        this.carro = carro;
      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Carro não encontrado.',
          icon: 'error',
        });
      },
    });
  }

   listaMarca() {
    this.marcaService.findALl().subscribe({
      next: (marca) => {
        this.listaMarcas = marca;
      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Marcas não encontradas.',
          icon: 'error',
        });
      },
    });
  }

  save() {
    if (this.carro.id) {
      this.carroService.update(this.carro, this.carro.id).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'Update!',
            text: res,
            icon: 'success',
          });
          this.routerNavigate.navigate(['principal/carros'], {
            state: { carro: this.carro },
          });
        },
        error: (err) => {
          Swal.fire({
            title: 'Error!',
            text: 'Falha ao atualizar carro.',
            icon: 'error',
          });
        },
      });
    } else {
      console.log('Saving carro:', this.carro);
      this.carroService.save(this.carro).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'SALVO!',
            text: res,
            icon: 'success',
          });
          this.routerNavigate.navigate(['principal/carros'], {
            state: { carro: this.carro },
          });
          this.retorno.emit(this.carro);
        },
        error: (err) => {
          Swal.fire({
            title: 'Erro ao salvar!',
            text: 'Error Carro',
            icon: 'error',
          });
        },
      });
    }
  }

  abrirModalAcessorios() {
    this.modalRef = this.modalService.open(this.modalAcessoriosList);
  }

  meuEventoTratamentoAcessorio(acessorio: Acessorio){
    console.log('Acessorio selecionado:', acessorio);
    if (this.carro.acessorio) {
      this.carro.acessorio.push(acessorio);
    } else {
      this.carro.acessorio = [acessorio];
    }
    this.modalRef.close();
  }

  deleteAcessorio(acessorio: Acessorio) {
    if (this.carro.acessorio) {
      this.carro.acessorio = this.carro.acessorio.filter(a => a.id !== acessorio.id);
    }
  }

}
