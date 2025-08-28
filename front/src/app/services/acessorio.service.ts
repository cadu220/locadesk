import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acessorio } from '../models/acessorio';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcessorioService {

  http = inject(HttpClient);

  API = environment.SERVIDOR + '/acessorio';
  constructor() { }


  findALl(): Observable<Acessorio[]> {
    return this.http.get<Acessorio[]>(this.API+"/find-acessorio");
  }

   deleteById(id: number): Observable<string> {
    return this.http.delete<string>(this.API+"/delete/"+id, { responseType: 'text' as 'json' });
  }

  save(Acessorio: Acessorio): Observable<string> {
    console.log(Acessorio);
    return this.http.post<string>(this.API+"/save", Acessorio, { responseType: 'text' as 'json' });
  }

  update(Acessorio: Acessorio, id: number): Observable<string> {
    return this.http.put<string>(this.API+"/update/"+id, Acessorio, { responseType: 'text' as 'json' });
  }

    findByid(id: number): Observable<Acessorio> {
    return this.http.get<Acessorio>(this.API+"/find-by-id/"+id);
  }
}
