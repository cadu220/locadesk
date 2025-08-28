import { Routes } from '@angular/router';
import { CarrosListComponent } from './components/carros-list/carros-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { CarrosDetailsComponent } from './components/carros-details/carros-details.component';
import { MarcasDetailsComponent } from './components/marcas/marcas-details/marcas-details.component';
import { MarcasListComponent } from './components/marcas/marcas-list/marcas-list.component';
import { AcessorioDetailsComponent } from './components/marcas copy/acessorio-details/acessorio-details.component';
import { AcessorioListComponent } from './components/marcas copy/acessorio-list/acessorio-list.component';
import { loginGuard } from './auth/login.guard';

export const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch:'full'},
  {path: "login", component:LoginComponent},
  {path: "principal", component:PrincipalComponent, canActivate:[loginGuard] ,children: [
    {path:"carros", component: CarrosListComponent},
    {path:"carros/new", component: CarrosDetailsComponent},
    {path:"carros/:id", component: CarrosDetailsComponent},
    {path:"marca", component: MarcasListComponent},
    {path:"marca/new", component: MarcasDetailsComponent},
    {path:"marca/:id", component: MarcasDetailsComponent},
    {path:"acessorio", component: AcessorioListComponent},
    {path:"acessorio/new", component: AcessorioDetailsComponent},
    {path:"acessorio/:id", component: AcessorioDetailsComponent},
    ]
  },
  {path: "dashboard", component:DashboardComponent},
  {path: "carros", component:CarrosListComponent}


];
