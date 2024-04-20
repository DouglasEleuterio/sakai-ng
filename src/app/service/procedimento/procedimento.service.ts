import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Procedimento} from "../../model/procedimento-model";

@Injectable({
    providedIn: 'root'
})
export class ProcedimentoService {

    private procedimentos: Procedimento[]

    constructor() {
        this.procedimentos = [
            {
                procedimentos: [{name: 'Clareamento de Pele'}],
                date: new Date(2023, 1, 1),
                valor: 1800,
                satisfacao: 4,
                motivacao: 'Manchas de Sol'
            },
            {
                procedimentos: [{name: 'Pelling de Cristal'}],
                date: new Date(2023, 9, 1),
                valor: 800,
                satisfacao: 2,
                motivacao: 'Acnes e espinhas'
            }
        ]
    }

    public getProcedimentos(phone: string): Observable<any> {
        return of(this.procedimentos)
    }

}
