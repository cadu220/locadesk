import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { AcessorioService } from '../../../services/acessorio.service';
import { Acessorio } from '../../../models/acessorio';

@Component({
  selector: 'app-acessorio-details',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './acessorio-details.component.html',
  styleUrl: './acessorio-details.component.scss'
})
export class AcessorioDetailsComponent {
marca: Acessorio = new Acessorio();
  @Output('retorno') retorno = new EventEmitter<any>();

  router = inject(ActivatedRoute);
  routerNavigate = inject(Router);
  marcaService = inject(AcessorioService);

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
          text: 'Acessorio não encontrado.',
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
            title: 'Updated!',
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
            text: 'Failha para atualizar.',
            icon: 'error',
          });
        },
      });
    } else {
      this.marcaService.save(this.marca).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'SAVE!',
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
            text: 'Error Acessorio',
            icon: 'error',
          });
        },
      });
    }
  }
}
