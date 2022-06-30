import { Router } from '@angular/router';
import { StorageService } from './../services/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-nota',
  templateUrl: './nova-nota.component.html',
  styleUrls: ['./nova-nota.component.css'],
})
export class NovaNotaComponent {
  titulo!: string;
  texto!: string;

  constructor(private storageService: StorageService, private router: Router) {}

  public enviarNota(): void {
    let nota = { titulo: this.titulo, texto: this.texto };
    this.storageService.adicionaNota(nota).subscribe((resp) => {
      this.router.navigateByUrl('minhas-notas');
    });
  }
}
