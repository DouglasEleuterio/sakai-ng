import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Procedimento} from "../../model/procedimento-model";
import {TipoProcedimento} from "../../model/tipo-procedimento-model";

@Injectable({
    providedIn: 'root'
})
export class ProcedimentoService {

    private procedimentos: Procedimento[]
    private tiposProcedimento: TipoProcedimento[]

    constructor() {
        this.procedimentos = [
            {
                id: '1',
                procedimentos: [{id: '1', name: 'Clareamento de Pele'}],
                date: new Date(2023, 1, 1),
                valor: 1800,
                satisfacao: 4,
                motivacao: 'Manchas de Sol'
            },
            {
                id: '2',
                procedimentos: [{id: '2', name: 'Pelling de Cristal'}],
                date: new Date(2023, 9, 1),
                valor: 800,
                satisfacao: 2,
                motivacao: 'Acnes e espinhas'
            }
        ]

        this.tiposProcedimento = [
            {id: '1', name: 'Botox'},
            {id: '2', name: 'Clareamento de Pele'},
            {id: '3', name: 'Pelling de Cristal'},
        ]
    }

    public getProcedimentos(phone: string): Observable<any> {
        return of(this.procedimentos)
    }

    public getTiposProcedimentos(): Observable<any> {
        return of(this.tiposProcedimento)
    }

    public editarProcedimento(procedimento: Procedimento): Observable<any> {
        for (let i = 0; i < this.procedimentos.length; i++) {
            if(this.procedimentos[i].id == procedimento.id) {
                this.procedimentos[i] = {...procedimento}
            }
        }
        return of(this.procedimentos)
    }

    criar(procedimento: Procedimento): Observable<any> {
        const id =  this.procedimentos.length + 1
        procedimento.id = id.toString()
        this.procedimentos.push(procedimento)
        return of(this.procedimentos)
    }

    apagar(procedimento: Procedimento) {
        for (let i = 0; i < this.procedimentos.length; i++) {
            if(this.procedimentos[i].id == procedimento.id) {
                this.procedimentos.splice(i,1)
            }
        }
        return of(this.procedimentos)
    }
}
