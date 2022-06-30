import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from '../models/nota.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private url = 'http://localhost:3000/notas/'

  constructor(private http: HttpClient) { }

  pegarNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.url);
  }

  adicionaNota(nota: Nota): Observable<Nota> {
    this.hidratar(nota);
    return this.http.post<Nota>(this.url, nota);
  }

  private hidratar(nota: Nota) {
    nota.data = new Date();
  }
}
