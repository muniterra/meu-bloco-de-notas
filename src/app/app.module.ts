import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NovaNotaComponent } from './nova-nota/nova-nota.component';
import { FormsModule } from '@angular/forms';
import { MinhasNotasComponent } from './minhas-notas/minhas-notas.component';

registerLocaleData(localePt, 'pt-BR')
@NgModule({
  declarations: [
    AppComponent,
    NovaNotaComponent,
    MinhasNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
