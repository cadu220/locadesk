import { Usuario } from './../../auth/usuario';
import { Component, inject } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { LoginService } from '../../auth/login.service';

@Component({
  selector: 'app-menu',
  imports: [MdbCollapseModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  loginService = inject(LoginService);
  usuario!: Usuario;

  constructor() {
    this.usuario = this.loginService.getUsuarioLogado();
  }

}
