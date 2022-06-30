import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from '../models/nota.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private url = 'http://localhost:3000/notas/';
  notasReservas: Nota[];

  constructor(private http: HttpClient) {
    this.notasReservas = [];
  }

  pegarNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.url);
  }

  pegarNotasReservas(): Nota[] {
    return this.notasReservas;
  }

  adicionaNota(nota: Nota): Observable<Nota> {
    this.hidratar(nota);
    this.adicionarNotaReserva(nota);
    return this.http.post<Nota>(this.url, nota);
  }

  private adicionarNotaReserva(nota: Nota): void {
    this.notasReservas.push(nota);
  }

  private hidratar(nota: Nota):void {
    nota.data = new Date();
  }
}
