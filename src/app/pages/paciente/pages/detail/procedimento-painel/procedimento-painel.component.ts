import {Component} from '@angular/core';

class TipoProcedimento{
    name: string
}

class Procedimento {
    procedimentos: TipoProcedimento[]
    date: Date
    valor: number
    satisfacao: number
    motivacao: string
}

@Component({
  selector: 'app-procedimento-painel',
  templateUrl: './procedimento-painel.component.html',
  styleUrl: './procedimento-painel.component.scss'
})
export class ProcedimentoPainelComponent {
    edit: boolean
    visible: boolean = false
    procedimento: Procedimento
    procedimentos: Procedimento[] = [
        {procedimentos: [{name: 'Clareamento de Pele'}], date: new Date(2023,1,1), valor: 1800, satisfacao: 4, motivacao: 'Manchas de Sol'},
        {procedimentos: [{name: 'Pelling de Cristal'}], date: new Date(2023, 9, 1), valor: 800, satisfacao: 2, motivacao: 'Acnes e espinhas'}
    ]
    tiposProcedimentos: TipoProcedimento[] | undefined = [
        {name: 'Botox'},
        {name: 'Clareamento de Pele'},
        {name: 'Pelling de Cristal'},
    ]

    incluir() {
        this.visible = true
        this.procedimento = new Procedimento()
    }

    editar(proc: Procedimento) {
        this.visible = true
        this.procedimento = proc
        console.log(proc)
    }

    salvar() {
        this.visible = false
        this.procedimentos.push(this.procedimento)
        this.procedimento = new Procedimento()
    }
}
