import {Component, OnInit} from '@angular/core';
import {Procedimento} from "../../../../../model/procedimento-model";
import {ProcedimentoService} from "../../../../../service/procedimento/procedimento.service";
import {TipoProcedimento} from "../../../../../model/tipo-procedimento-model";
import {ContatoService} from "../../../../../service/contato/contato.service";
import {PacienteProcedimento} from "../../../../../model/paciente-procedimento-model";


@Component({
  selector: 'app-procedimento-painel',
  templateUrl: './procedimento-painel.component.html',
  styleUrl: './procedimento-painel.component.scss'
})
export class ProcedimentoPainelComponent implements OnInit{

    procedimentos: PacienteProcedimento[] = []
    procedimento: PacienteProcedimento
    tiposProcedimentos: TipoProcedimento[] = []
    edit: boolean
    visible: boolean = false
    modalApagarVisible = false
    procParaApagar: PacienteProcedimento;

    constructor(private procedimentoService: ProcedimentoService, protected contatoService: ContatoService) {
        this.procedimento = new PacienteProcedimento();
    }

    ngOnInit(): void {
        // this.procedimentoService.getProcedimentos('').subscribe((value) => {
        //     this.procedimentos = value
        // })

        this.procedimentos = this.contatoService.getContatoObtido().procedimentos

        this.procedimentoService.getTiposProcedimentos().subscribe((value) => {
            this.tiposProcedimentos = value
        })
    }

    incluir() {
        this.visible = true
        this.procedimento = new PacienteProcedimento()
    }

    editar(proc: PacienteProcedimento) {
        this.procedimento = {...proc}
        this.visible = true
    }

    salvar() {
        this.visible = false
        if(this.procedimento.id) {
        this.procedimentoService.editarProcedimento(this.procedimento).subscribe((value) => {
                this.procedimentos = value
            })
        } else {
            this.procedimentoService.criar(this.procedimento).subscribe((value) => {
                this.procedimentos = value
            })
        }
        this.procedimento = new PacienteProcedimento()
    }

    cancelar() {
        this.visible = false
        this.procedimento = new PacienteProcedimento()
    }

    validarForm() {
        return !(this.procedimento.procedimento &&
        this.procedimento.procedimento.length > 0 &&
        this.procedimento.data &&
        this.procedimento.valor &&
        this.procedimento.satisfacao &&
        this.procedimento.motivacao)
    }

    exibirModalApagarProcedimento(proc: PacienteProcedimento) {
        this.procParaApagar = proc
        this.modalApagarVisible = true
    }

    apagarProcedimento() {
        this.procedimentoService.apagar(this.procParaApagar)
        this.modalApagarVisible = false
    }
}
