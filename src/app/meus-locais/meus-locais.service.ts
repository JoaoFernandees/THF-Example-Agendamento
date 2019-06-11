import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const APIURL = 'http://localhost:4200/api/agendamento/v1/meusLocais';
@Injectable({
  providedIn: 'root'
})
export class MeusLocaisService {

  constructor(private _httpClient: HttpClient) { }

  buscarSubLocais(idLocal: string) {
    return this._httpClient.get(`${APIURL}/${idLocal}`);
  }

  excluirLocal(idLocal: string) {
    /* TODO utilizar o Id da Janela posteriormente para comunição com o backend*/
    return this._httpClient.delete(`${APIURL}`);
  }

  buscarMeusLocais() {
    return this._httpClient.get(`${APIURL}`);
  }
}
