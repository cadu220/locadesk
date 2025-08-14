import { Routes } from '@angular/router';
import { CarrosListComponent } from './components/carros-list/carros-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {path: "", redirectTo:"dashboard", pathMatch:'full'},
  {path: "dashboard", component:DashboardComponent},
  {path: "carros", component:CarrosListComponent}


];
