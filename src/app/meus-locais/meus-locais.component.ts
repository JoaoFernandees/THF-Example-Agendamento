import { Component, OnInit, ViewChild } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';
import { thfPageEditLiteralsDefault } from '@totvs/thf-ui/components/thf-page/thf-page-edit/thf-page-edit-base.component';

@Component({
  selector: 'app-meus-locais',
  templateUrl: './meus-locais.component.html',
  styleUrls: ['./meus-locais.component.css']
})
export class MeusLocaisComponent implements OnInit {

  colunas: Array<ThfTableColumn>;
  locais: Array<any>;

  constructor() { }

  ngOnInit() {
    this.colunas = this.getColunas();
    this.locais = this.getItems();
  }

  getColunas(): Array<ThfTableColumn> {
    return [
      { property: 'descricao'},
      { property: 'acao', label: this['acoes'], width: '85px', type: 'icon',
        icons: [{ value: 'editar', icon: 'thf-icon-edit'},
                {value: 'excluir', icon: 'thf-icon-delete'}
        ]
      }
    ];
  }

  private getItems(): Array<any> {
    return [
      {
        id: 'af5560b0-8c37-4944-8207-0a1aab2cbe85',
        descricao: 'Enseada',
        listaAgendas: [
          {
            id: 'fc880507-dfd5-4fcd-9542-8af140b32fbf',
            descricao: 'Rua 12',
            acoes: ['editar']
          },
          {
            id: 'f211a012-5d7d-4bd9-bb13-e39ac21cf3ea',
            descricao: 'Rua 13',
            acoes: ['editar']
          },
        ],
      },
    ];
  }

  onAlterarAgenda(evento) {
    const local = this.locais.filter(x => x.id === evento.id)[0];
    const agenda = local.listaAgendas.filter(x => x.id === evento.agendaId);
    agenda.map(x => x.descricao = evento.descricao);
  }
}
