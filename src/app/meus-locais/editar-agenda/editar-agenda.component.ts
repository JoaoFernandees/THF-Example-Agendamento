import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DadosAgendaComponent } from '../dados-agenda/dados-agenda.component';
import { MeusLocaisComponent } from '../meus-locais.component';


@Component({
  selector: 'app-editar-agenda',
  templateUrl: './editar-agenda.component.html',
  styleUrls: ['./editar-agenda.component.css']
})
export class EditarAgendaComponent implements OnInit {

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;
  @Output() alterarAgenda = new EventEmitter;

  editarAgendaForm: FormGroup;
  agenda: DadosAgendaComponent;
  local: MeusLocaisComponent;
  oldAgenda: { nomeLocal: string; nomeAgenda: string; };
  private _acaoPrimaria: ThfModalAction;
  private _acaoSecundaria: ThfModalAction;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editarAgendaForm = this._formBuilder.group({
      nomeLocal: [''],
      nomeAgenda: [''],
    });
    this.setAcaoPrimaria();
    this.setAcaoSecundaria();
  }

  onAlterarAgenda(evento) {
    this.alterarAgenda.emit(evento);
  }

  get acaoPrimaria() {
    return this._acaoPrimaria;
  }

  get acaoSecundaria() {
    return this._acaoSecundaria;
  }

  setAcaoPrimaria() {
    this._acaoPrimaria = {
      action: () => {
        this.confirmarEdicao();
      },
      label: 'salvar'
    };
  }

  setAcaoSecundaria() {
    this._acaoSecundaria = {
      action: () => {
        this.fecharModal();
      },
      label: 'cancelar'
    };
  }

  abrirModal(agenda, local) {
    this.agenda = agenda;
    this.local = local;
    this.setaValoresAgenda();
    this.thfModal.open();
  }

  fecharModal() {
    this.thfModal.close();
    this.editarAgendaForm.reset();
  }

  setaValoresAgenda() {
    this.editarAgendaForm.patchValue({
      nomeLocal: this.local,
      nomeAgenda: this.agenda,
    });
  }

  confirmarEdicao() {}
}
