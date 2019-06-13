import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';
import { EditarAgendaComponent } from '../editar-agenda/editar-agenda.component';
import { MeusLocaisComponent } from '../meus-locais.component';

@Component({
  selector: 'app-dados-agenda',
  templateUrl: './dados-agenda.component.html',
  styleUrls: ['./dados-agenda.component.css']
})
export class DadosAgendaComponent {

  colunas: Array<ThfTableColumn> = this.getColunas();
  @Input() local;
  @Output() alterarAgenda = new EventEmitter();
  @ViewChild(EditarAgendaComponent) editarAgendaComponent: EditarAgendaComponent;

  constructor() {
  }

  onAlterarAgenda(evento) {
    this.alterarAgenda.emit(evento);
  }

  getColunas(): Array<ThfTableColumn> {
    return [
      {
        property: 'descricao'
      },
      {
        property: 'acoes',
        width: '15%',
        label: this['acoes'],
        type: 'icon',
        icons:
        [
          {
            value: 'editar',
            icon: 'thf-icon-edit',
            action: this.abrirModalEdicaoAgenda.bind(this)
          }
        ]
      }
    ];
  }

  abrirModalEdicaoAgenda(agenda) {

    this.editarAgendaComponent.abrirModal(agenda, this.local);
  }
}
