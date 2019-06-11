import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';
import { EditarAgendaComponent } from '../editar-agenda/editar-agenda.component';
import { Observable } from 'rxjs';
import { MeusLocaisService } from '../meus-locais.service';
import { MeusLocaisComponent } from '../meus-locais.component';

@Component({
  selector: 'app-dados-agenda',
  templateUrl: './dados-agenda.component.html',
  styleUrls: ['./dados-agenda.component.css']
})
export class DadosAgendaComponent implements OnInit {

  colunas: Array<ThfTableColumn> = this.getColunas();
  agendas: Array<any> = this.getAgendas();
  subLocais: Array<any> = [];

  @Output() alterarAgenda = new EventEmitter();
  @ViewChild(EditarAgendaComponent) editarAgendaComponent: EditarAgendaComponent;
  @Input() local: MeusLocaisComponent;


  constructor(
    private _meusLocaisService: MeusLocaisService
  ) { }

  ngOnInit() {
    this.agendas = this.getAgendas();
  }

  onAlterarAgenda(evento) {
    console.log('xxx', evento);
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
}
