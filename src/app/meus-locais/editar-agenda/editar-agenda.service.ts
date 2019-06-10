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
}
