import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = 'http://localhost:8080/api/v1/locais';

@Injectable()
export class EditarAgendaService {

  constructor(private _httpClient: HttpClient) { }

  alterarDescricaoAgenda(agenda) {
    const agendaAtualizada = {
      descricao: agenda.descricao,
      agendaId: agenda.agendaId,
      id: agenda.id
    };
    return this._httpClient.post(`${API_URL}/agenda/alterarDescricao`, agendaAtualizada);
  }
}
