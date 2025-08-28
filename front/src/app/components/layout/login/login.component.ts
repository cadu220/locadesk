import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { LoginService } from '../../auth/login.service';
import { Login } from '../../auth/login';

@Component({
  selector: 'app-login',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login: Login = new Login();

  router = inject(Router);
  loginService = inject(LoginService);

  constructor() {
    this.loginService.removerToken();
  }

  onSubmit() {
    this.loginService.logar(this.login).subscribe({
      next: (token) => {
        if (token) {
          this.loginService.addToken(token);
          if (this.loginService.hasRole('ADMIN')) {
            this.router.navigate(['principal/carros']);
          } else if (this.loginService.hasRole('USER')) {
            this.router.navigate(['principal/marca']);
          }
        }
      },
      error: (err) => {
        alert('Login failed: ' + err.message);
      },
    });
  }
}
