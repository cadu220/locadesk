import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Carro } from '../models/carro';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class CarroService {

  http = inject(HttpClient);

  API =  environment.SERVIDOR + '/carros';
  constructor() { }


  findALl(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API+"/find-carros");
  }

   deleteById(id: number): Observable<string> {
    return this.http.delete<string>(this.API+"/delete/"+id, { responseType: 'text' as 'json' });
  }

  save(carro: Carro): Observable<string> {
    console.log(carro);
    return this.http.post<string>(this.API+"/save", carro, { responseType: 'text' as 'json' });
  }

  update(carro: Carro, id: number): Observable<string> {
    return this.http.put<string>(this.API+"/update/"+id, carro, { responseType: 'text' as 'json' });
  }

    findByid(id: number): Observable<Carro> {
    return this.http.get<Carro>(this.API+"/find-by-id/"+id);
  }
}
