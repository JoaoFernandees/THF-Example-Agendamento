import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThfModule } from '@totvs/thf-ui';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MeusLocaisComponent } from './meus-locais/meus-locais.component';
import { DadosAgendaComponent } from './meus-locais/dados-agenda/dados-agenda.component';
import { EditarAgendaComponent } from './meus-locais/editar-agenda/editar-agenda.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MeusLocaisComponent,
    DadosAgendaComponent,
    EditarAgendaComponent,
  ],
  exports: [
    MeusLocaisComponent,
    DadosAgendaComponent,
    EditarAgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
