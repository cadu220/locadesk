import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from '../../../services/marca.service';
import { Marca } from '../../../models/marca';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-marcas-details',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './marcas-details.component.html',
  styleUrl: './marcas-details.component.scss'
})
export class MarcasDetailsComponent {
marca: Marca = new Marca();
  @Output('retorno') retorno = new EventEmitter<any>();

  router = inject(ActivatedRoute);
  routerNavigate = inject(Router);
  marcaService = inject(MarcaService);

  constructor() {
    let id = this.router.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.marcaService.findByid(id).subscribe({
      next: (marca) => {
        this.marca = marca;
       },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Marca não encontrada.',
          icon: 'error',
        });
      },
    });
  }

  save() {
    if (this.marca.id) {
      this.marcaService.update(this.marca, this.marca.id).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'Update!',
            text: res,
            icon: 'success',
          });
          this.routerNavigate.navigate(['principal/marca'], {
            state: { marca: this.marca },
          });
        },
        error: (err) => {
          Swal.fire({
            title: 'Error!',
            text: 'Falha para atualizar marca.',
            icon: 'error',
          });
        },
      });
    } else {
      this.marcaService.save(this.marca).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'SALVO!',
            text: res,
            icon: 'success',
          });
          this.routerNavigate.navigate(['principal/marca'], {
            state: { marca: this.marca },
          });
          this.retorno.emit(this.marca);
        },
        error: (err) => {
          Swal.fire({
            title: 'Erro ao salvar!',
            text: 'Error ao salvar Marca',
            icon: 'error',
          });
        },
      });
    }
  }
}
