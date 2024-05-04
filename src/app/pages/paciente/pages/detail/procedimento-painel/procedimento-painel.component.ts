import {Component} from '@angular/core';
import {ProcedimentoService} from "../../../../../service/procedimento/procedimento.service";
import {TipoProcedimento} from "../../../../../model/tipo-procedimento-model";
import {ContatoService} from "../../../../../service/contato/contato.service";
import {PacienteProcedimento} from "../../../../../model/paciente-procedimento-model";
import {ContatoModel} from "../../../../../model/contato-model";


@Component({
  selector: 'app-procedimento-painel',
  templateUrl: './procedimento-painel.component.html',
  styleUrl: './procedimento-painel.component.scss'
})
export class ProcedimentoPainelComponent {

    //Procedimento de Cadastro/Edição
    procedimentoEditar: PacienteProcedimento
    tiposProcedimentos: TipoProcedimento[] = []
    edit: boolean
    visible: boolean = false
    modalApagarVisible = false
    procParaApagar: PacienteProcedimento;

    public contatoObtido: ContatoModel;

    constructor(private procedimentoService: ProcedimentoService,
                protected contatoService: ContatoService) {
        this.procedimentoEditar = new PacienteProcedimento();
    }

/*
    ngOnInit(): void {
        this.procedimentoService.getTiposProcedimentos().subscribe((value) => {
            this.tiposProcedimentos = value
        })
    }
*/

    incluir() {
        this.visible = true
        this.procedimentoEditar = new PacienteProcedimento()
    }


    editar(proc: PacienteProcedimento) {
        this.procedimentoEditar = {...proc}
        this.visible = true
    }

/*
    salvar() {
        this.visible = false
        if(this.procedimento.id) {
            this.procedimentoService.editarProcedimento(this.procedimento)
        } else {
            this.procedimentoService.criar(this.procedimento)

        }
        this.procedimento = new PacienteProcedimento()
    }
*/

/*
    cancelar() {
        this.visible = false
        this.procedimento = new PacienteProcedimento()
    }
*/

/*
    validarForm() {
        return !(this.procedimento.procedimento &&
        this.procedimento.procedimento.length > 0 &&
        this.procedimento.data &&
        this.procedimento.valor &&
        this.procedimento.satisfacao &&
        this.procedimento.motivacao)
    }
*/

    exibirModalApagarProcedimento(proc: PacienteProcedimento) {
        this.procParaApagar = {...proc}
        this.modalApagarVisible = true
    }

    apagarProcedimento() {
        this.procedimentoService.apagar(this.procParaApagar)
        this.modalApagarVisible = false
    }
}
