import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:4200/api/agendamento/v1/meusLocais';

@Injectable({
  providedIn: 'root'
})
export class EditarAgendaService {

  constructor(private _httpClient: HttpClient) {}

  salva(agenda) {
    return this._httpClient.put(apiUrl, agenda);
  }

  alterarDescricaoAgenda(nomeAgenda) {
    const agenda = {
      descricao: nomeAgenda,
      agendaId: 1,
      localId: 1
    };
    return this._httpClient.post(`${apiUrl}/agendas/alterarDescricao`, agenda);
  }
}
