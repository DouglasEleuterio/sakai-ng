import {Component} from '@angular/core';
import {ProcedimentoService} from "../../../../../service/procedimento/procedimento.service";
import {TipoProcedimento} from "../../../../../model/tipo-procedimento-model";
import {ContatoService} from "../../../../../service/contato/contato.service";
import {PacienteProcedimento} from "../../../../../model/paciente-procedimento-model";
import {ContatoModel} from "../../../../../model/contato-model";
import {ProcedimentoRequestModel} from "../../../../../model/procedimento-request-model";
import {MessageService} from "primeng/api";


@Component({
    selector: 'app-procedimento-painel',
    templateUrl: './procedimento-painel.component.html',
    styleUrl: './procedimento-painel.component.scss',
    providers: [MessageService]
})
export class ProcedimentoPainelComponent {

    //Procedimento de Cadastro/Edição
    procedimentoEditar: PacienteProcedimento
    procedimentoSalvar: ProcedimentoRequestModel
    edit: boolean
    visible: boolean = false
    modalApagarVisible = false
    procParaApagar: PacienteProcedimento;

    public contatoObtido: ContatoModel;
    loading: boolean = false;

    constructor(protected procedimentoService: ProcedimentoService,
                protected contatoService: ContatoService,
                private messageService: MessageService) {
        this.procedimentoEditar = new PacienteProcedimento();
        this.procedimentoSalvar = new ProcedimentoRequestModel();
    }

    incluir() {
        this.visible = true
        this.procedimentoEditar = new PacienteProcedimento()
    }


    editar(proc: PacienteProcedimento) {
        this.procedimentoEditar = {...proc}
        this.visible = true
    }


    salvar() {
        this.loading = true
        if (this.procedimentoEditar.id) {
            this.procedimentoService.editarProcedimento(this.procedimentoEditar)
        } else {
            this.procedimentoSalvar.clienteNumero = Number(this.contatoService.phone)
            this.procedimentoService.criar(this.procedimentoSalvar).subscribe(() => {
                this.contatoService.getContato(this.contatoService.phone)
                this.loading = false
                this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Procedimento salvo' });
                this.visible = false

            }, error => {
                this.loading = false
                this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível salvar o procedimento' });
                this.visible = false

            })

        }
        this.procedimentoEditar = new PacienteProcedimento()
    }

    cancelar() {
        this.visible = false
        this.procedimentoEditar = new PacienteProcedimento()
    }


    validarForm() {
        return !(this.procedimentoEditar.procedimento &&
            this.procedimentoEditar.data &&
            this.procedimentoEditar.valor &&
            this.procedimentoEditar.satisfacao &&
            this.procedimentoEditar.motivacao)
    }


    exibirModalApagarProcedimento(proc: PacienteProcedimento) {
        this.procParaApagar = {...proc}
        this.modalApagarVisible = true
    }

    apagarProcedimento() {
        this.procedimentoService.apagar(this.procParaApagar)
        this.modalApagarVisible = false
    }
}
