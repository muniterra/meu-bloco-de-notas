import { MinhasNotasComponent } from './minhas-notas/minhas-notas.component';
import { NovaNotaComponent } from './nova-nota/nova-nota.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'nova-nota', pathMatch: 'full'},
  {path: 'nova-nota', component: NovaNotaComponent},
  {path: 'minhas-notas', component: MinhasNotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
