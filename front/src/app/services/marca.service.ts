import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {


  http = inject(HttpClient);

  API =  environment.SERVIDOR + '/marca';
  constructor() { }


  findALl(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.API+"/find-marcas");
  }

   deleteById(id: number): Observable<string> {
    return this.http.delete<string>(this.API+"/delete/"+id, { responseType: 'text' as 'json' });
  }

  save(marca: Marca): Observable<string> {
    console.log(marca);
    return this.http.post<string>(this.API+"/save", marca, { responseType: 'text' as 'json' });
  }

  update(marca: Marca, id: number): Observable<string> {
    return this.http.put<string>(this.API+"/update/"+id, marca, { responseType: 'text' as 'json' });
  }

    findByid(id: number): Observable<Marca> {
    return this.http.get<Marca>(this.API+"/find-by-id/"+id);
  }
}
