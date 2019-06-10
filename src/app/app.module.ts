import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThfModule } from '@totvs/thf-ui';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MeusLocaisComponent } from './meus-locais/meus-locais.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MeusLocaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
