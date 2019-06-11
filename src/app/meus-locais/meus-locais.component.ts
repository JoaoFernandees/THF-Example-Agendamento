import { Component, OnInit, ViewChild } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';
import { thfPageEditLiteralsDefault } from '@totvs/thf-ui/components/thf-page/thf-page-edit/thf-page-edit-base.component';

@Component({
  selector: 'app-meus-locais',
  templateUrl: './meus-locais.component.html',
  styleUrls: ['./meus-locais.component.css']
})
export class MeusLocaisComponent implements OnInit {

  local: Array<ThfTableColumn>;
  agenda: Array<any>;

  constructor() { }

  ngOnInit() {
    this.local = this.getColunas();
    this.agenda = this.getItems();
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
        descricao: 'Enseada',
        acao: ['editar', 'excluir']
      },
      {
        descricao: 'Ubatuba',
        acao: ['editar', 'excluir']
      },
      {
        descricao: 'Itaguaçu',
        acao: ['editar', 'excluir']
      },
      {
        descricao: 'Capri',
        acao: ['editar', 'excluir']
      }
    ];
  }
}
