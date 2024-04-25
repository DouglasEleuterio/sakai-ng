import {Component, OnInit} from '@angular/core';
import {Procedimento} from "../../../../../model/procedimento-model";
import {ProcedimentoService} from "../../../../../service/procedimento/procedimento.service";
import {TipoProcedimento} from "../../../../../model/tipo-procedimento-model";


@Component({
  selector: 'app-procedimento-painel',
  templateUrl: './procedimento-painel.component.html',
  styleUrl: './procedimento-painel.component.scss'
})
export class ProcedimentoPainelComponent implements OnInit{

    procedimentos: Procedimento[] = []
    procedimento: Procedimento
    tiposProcedimentos: TipoProcedimento[] = []
    edit: boolean
    visible: boolean = false
    modalApagarVisible = false
    procParaApagar: Procedimento;

    constructor(private procedimentoService: ProcedimentoService) {
        this.procedimento = new Procedimento();
    }

    ngOnInit(): void {
        this.procedimentoService.getProcedimentos('').subscribe((value) => {
            this.procedimentos = value
        })

        this.procedimentoService.getTiposProcedimentos().subscribe((value) => {
            this.tiposProcedimentos = value
        })
    }

    incluir() {
        this.visible = true
        this.procedimento = new Procedimento()
    }

    editar(proc: Procedimento) {
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
        this.procedimento = new Procedimento()
    }

    cancelar() {
        this.visible = false
        this.procedimento = new Procedimento()
    }

    validarForm() {
        return !(this.procedimento.procedimentos &&
        this.procedimento.procedimentos.length > 0 &&
        this.procedimento.date &&
        this.procedimento.valor &&
        this.procedimento.satisfacao &&
        this.procedimento.motivacao)
    }

    exibirModalApagarProcedimento(proc: Procedimento) {
        this.procParaApagar = proc
        this.modalApagarVisible = true
    }

    apagarProcedimento() {
        this.procedimentoService.apagar(this.procParaApagar)
        this.modalApagarVisible = false
    }
}
