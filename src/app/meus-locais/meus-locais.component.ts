import { Component, OnInit, ViewChild } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';

@Component({
  selector: 'app-meus-locais',
  templateUrl: './meus-locais.component.html',
  styleUrls: ['./meus-locais.component.css']
})
export class MeusLocaisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editarLocal() {}

  excluiMeusLocais() {}

  getColunas(): Array<ThfTableColumn> {
    return [
      {
        property: 'descricao', width: '45%',
      },
      {
        property: 'capacidadeSimultanea',
      },
      {
        property: 'acao',
        width: '85px',
        type: 'icon',
        icons: [
          {
            value: 'editar',
            icon: 'thf-icon-edit',
            action: this.editarLocal.bind(this)
          },
          {
            value: 'excluir',
            icon: 'thf-icon-delete',
            action: this.excluiMeusLocais.bind(this)
          }
        ]
      }
    ];
  }
}
