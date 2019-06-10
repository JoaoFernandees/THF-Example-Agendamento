import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MeusLocaisComponent } from './meus-locais/meus-locais.component';

const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'meus-locais', component: MeusLocaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }