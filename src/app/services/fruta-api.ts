import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrutaModel } from '../models/fruta-model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrutaApi {
  private readonly apiUrlFruta: string;
  private readonly httpClient: HttpClient = inject(HttpClient);

  constructor() {
    this.apiUrlFruta = `${environment.apiUrl}/frutas`;
  }
   GetAll(): Observable<FrutaModel[]>{
    return this.httpClient.get<FrutaModel[]>(this.apiUrlFruta);
  }

  GetById(id:number|string): Observable<FrutaModel>{
    return this.httpClient.get<FrutaModel>(`${this.apiUrlFruta}/${id}`);
  }

  GetByName(nome:string): Observable<FrutaModel[]>{
    return this.httpClient.get<FrutaModel[]>(`${this.apiUrlFruta}/${nome}`);
  }

  Add(fruta: FrutaModel): Observable<FrutaModel>{
    return this.httpClient.post<FrutaModel>(this.apiUrlFruta, fruta);
  }

  Update(fruta: FrutaModel): Observable<FrutaModel>{
    return this.httpClient.put<FrutaModel>(`${this.apiUrlFruta}/${fruta.Id}`, fruta);
  }

  Delete(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrlFruta}/${id}`);
  }

}
