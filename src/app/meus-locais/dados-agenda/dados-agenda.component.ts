import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';
import { EditarAgendaComponent } from '../editar-agenda/editar-agenda.component';

@Component({
  selector: 'app-dados-agenda',
  templateUrl: './dados-agenda.component.html',
  styleUrls: ['./dados-agenda.component.css']
})
export class DadosAgendaComponent implements OnInit {

  local: Array<ThfTableColumn> = this.getColunas();
  agenda: Array<ThfTableColumn> = this.getAgendas();

  @Output() alterarAgenda = new EventEmitter();
  @ViewChild(EditarAgendaComponent) editarAgendaComponent: EditarAgendaComponent;

  constructor() { }

  ngOnInit() {
    this.agenda = this.getAgendas();
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

  getAgendas(): Array<any> {
    return [
      {
        descricao: 'Rua 12',
        acoes: ['editar']
      },
      {
        descricao: 'Rua 13',
        acoes: ['editar']
      }
    ];
  }

  abrirModalEdicaoAgenda(agenda, local) {
    this.editarAgendaComponent.abrirModal(agenda, local);
  }
}
