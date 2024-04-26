import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {TipoProcedimento} from "../../model/tipo-procedimento-model";
import {HttpClient} from "@angular/common/http";
import {EnvService} from "../../env/env.service";
import {PacienteProcedimento} from "../../model/paciente-procedimento-model";

const API: string = '/cliente'

@Injectable({
    providedIn: 'root'
})
export class ProcedimentoService {

    protected envService: EnvService;
    private procedimentos: PacienteProcedimento[]
    private tiposProcedimento: TipoProcedimento[]

    constructor(private http: HttpClient, envService: EnvService) {
        this.envService = envService

        // this.procedimentos = [
        //     {
        //         id: '1',
        //         procedimentos: [{id: '1', name: 'Clareamento de Pele'}],
        //         date: new Date(2023, 1, 1),
        //         valor: 1800,
        //         satisfacao: 4,
        //         motivacao: 'Manchas de Sol'
        //     },
        //     {
        //         id: '2',
        //         procedimentos: [{id: '2', name: 'Pelling de Cristal'}],
        //         date: new Date(2023, 9, 1),
        //         valor: 800,
        //         satisfacao: 2,
        //         motivacao: 'Acnes e espinhas'
        //     }
        // ]

        this.tiposProcedimento = [
            {id: '1', name: 'Botox'},
            {id: '2', name: 'Clareamento de Pele'},
            {id: '3', name: 'Pelling de Cristal'},
        ]
    }

    public getProcedimentos(phone: string): Observable<any> {
        return this.http.get(`${this.envService.environment.baseUrl}${API}/${phone}`)
        // return of(this.procedimentos)
    }

    public getTiposProcedimentos(): Observable<any> {
        return of(this.tiposProcedimento)
    }

    public editarProcedimento(procedimento: PacienteProcedimento): Observable<any> {
        for (let i = 0; i < this.procedimentos.length; i++) {
            if(this.procedimentos[i].id == procedimento.id) {
                this.procedimentos[i] = {...procedimento}
            }
        }
        return of(this.procedimentos)
    }

    criar(procedimento: PacienteProcedimento): Observable<any> {
        const id =  this.procedimentos.length + 1
        procedimento.id = id
        this.procedimentos.push(procedimento)
        return of(this.procedimentos)
    }

    apagar(procedimento: PacienteProcedimento) {
        for (let i = 0; i < this.procedimentos.length; i++) {
            if(this.procedimentos[i].id == procedimento.id) {
                this.procedimentos.splice(i,1)
            }
        }
        return of(this.procedimentos)
    }
}
