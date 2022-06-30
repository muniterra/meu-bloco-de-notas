import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Nota } from '../models/nota.model';

@Component({
  selector: 'app-minhas-notas',
  templateUrl: './minhas-notas.component.html',
  styleUrls: ['./minhas-notas.component.css']
})
export class MinhasNotasComponent implements OnInit {

  notas: Nota[];

  constructor(private storageService: StorageService) {
    this.notas = [];
  }

  ngOnInit(): void {
    this.storageService.pegarNotas().subscribe(resposta => {
      this.notas = resposta;
      console.log(this.notas)
    })
  }

}
