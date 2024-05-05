import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EnvService} from "../../env/env.service";
import {PacienteProcedimento} from "../../model/paciente-procedimento-model";
import {ContatoService} from "../contato/contato.service";

const API: string = '/cliente'

@Injectable({
    providedIn: 'root'
})
export class ProcedimentoService {

    protected envService: EnvService;
    private procedimentos: PacienteProcedimento[]

    constructor(private http: HttpClient,
                envService: EnvService,
                private contatoService: ContatoService) {
        this.envService = envService
    }

    public getTiposProcedimentos(): Observable<any> {
        //todo Consultar procedimentos ativos
        return null
    }

    public editarProcedimento(procedimento: PacienteProcedimento): void {
        for (let i = 0; i < this.procedimentos.length; i++) {
            if(this.procedimentos[i].id == procedimento.id) {
                this.procedimentos[i] = {...procedimento}
                //todo enviar alteração contato api
            }
        }
    }

    criar(procedimento: PacienteProcedimento): void {
        procedimento.id = this.procedimentos.length + 1
        //todo salvar procedimento API
        // this.procedimentos.push(procedimento)
    }

    apagar(procedimento: PacienteProcedimento) {
        for (let i = 0; i < this.procedimentos.length; i++) {
            if(this.procedimentos[i].id == procedimento.id) {
                //todo apagar procedimento
                this.procedimentos.splice(i,1)
            }
        }
    }
}
