import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadorFormService {

  /** Formulário da etapa de processo do configurador de janela */
  processoForm: FormGroup;

  /** Formulário da etapa de locais do configurador de janela  */
  localForm: FormGroup;

    /** Formulário do slider de duração na etapa tempo  */
  sliderForm: FormGroup;

  /** Formulário da modal de inclusão de novo local */
  adicionarLocalForm: FormGroup;

  /** Formulário da etapa de tempo do configurador de janela */
  tempoForm: FormGroup;

  /** Formulário da etapa de limitadores do configurador de janela */
  limitadoresForm: FormGroup;

  /** Formulário da modal de inclusão de novo produto do configurador de janela*/
  adicionarProdutoForm: FormGroup;

  /** Formulário da etapa de itens obrigatórios do configurador de janela  */
  itensObrigatoriosForm: FormGroup;

   /** Formulário da modal de inclusão de novo item obrigatório */
   adicionarItemObrigatorioForm: FormGroup;

   /** Formulário da etapa de aceite necessário do configurador de janela */
   aceiteNecessarioForm: FormGroup;


   /** Formulário de validação que destaca os campos inválidos */
   public executaValidacaoForm(form: FormGroup): boolean {
    let retorno = true;
    for (const x in form.controls) {
      if (form.controls[x].errors) {
        form.controls[x].markAsDirty();
        retorno = false;
      }
    }
    return retorno;
  }


  validaDeAte(nomeSwitch: string, campoDe: string, campoAte: string) {
    const valorDe = this.limitadoresForm.get(campoDe).value;
    const valorAte = this.limitadoresForm.get(campoAte).value;

    if (this.limitadoresForm && this.limitadoresForm.get(nomeSwitch).value) {
      return (valorDe && valorAte) && (Number(valorDe) <= Number(valorAte));
    }
  }
}
