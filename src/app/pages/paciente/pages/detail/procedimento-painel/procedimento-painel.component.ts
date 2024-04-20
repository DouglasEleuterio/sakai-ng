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

    procedimentos: Procedimento[]


    constructor(private procedimentoService: ProcedimentoService) {
    }

    ngOnInit(): void {
        this.procedimentoService.getProcedimentos('').subscribe((value) => {
            this.procedimentos.push(value)
        })
    }

    edit: boolean
    visible: boolean = false
    procedimento: Procedimento
        // [
        // {procedimentos: [{name: 'Clareamento de Pele'}], date: new Date(2023,1,1), valor: 1800, satisfacao: 4, motivacao: 'Manchas de Sol'},
        // {procedimentos: [{name: 'Pelling de Cristal'}], date: new Date(2023, 9, 1), valor: 800, satisfacao: 2, motivacao: 'Acnes e espinhas'}
        // ]
    tiposProcedimentos: TipoProcedimento[] | undefined = [
        {name: 'Botox'},
        {name: 'Clareamento de Pele'},
        {name: 'Pelling de Cristal'},
    ]

    incluir() {
        this.visible = true
    }

    editar(proc: Procedimento) {
        this.visible = true
        this.procedimento = proc
        console.log(proc)
    }

    salvar() {
        this.visible = false
        this.procedimentos.push(this.procedimento)
    }
}
