import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ThfModalAction, ThfModalComponent } from '@totvs/thf-ui';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DadosAgendaComponent } from '../dados-agenda/dados-agenda.component';
import { MeusLocaisComponent } from '../meus-locais.component';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { EditarAgendaService } from './editar-agenda.service';


@Component({
  selector: 'app-editar-agenda',
  templateUrl: './editar-agenda.component.html',
  styleUrls: ['./editar-agenda.component.css']
})
export class EditarAgendaComponent implements OnInit {

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;
  @Output() alterarAgenda = new EventEmitter;

  identificadorLocal: string;
  oldAgenda: { nomeAgenda: string; };
  private _descricaoAlterada: boolean;
  private _editarAgendaService: EditarAgendaService;
  editarAgendaForm: FormGroup;
  agenda: any;
  local: any;
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

  get isFormularioAlterado(): boolean {
    return this._descricaoAlterada;
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
      nomeLocal: this.local.descricao,
      nomeAgenda: this.agenda.descricao,
    });
  }

  confirmarEdicao() {
    this.fecharModal();
  }

  // confirmarEdicao() {
  //   this._editarAgendaService.alterarDescricaoAgenda().subscribe(
  //   (res: any) => {
  //     this.apresentarToaster(res.mensagem);
  //     this.fecharModal();
  //   },
  //   (error) => {
  //     console.log(error)
  //   })
  // }

  informarModalSemAlteracao() {
    this.fecharModal();
  }
}
