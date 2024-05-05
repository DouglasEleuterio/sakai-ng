import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EnvService} from "../../env/env.service";
import {PacienteProcedimento} from "../../model/paciente-procedimento-model";
import {ContatoService} from "../contato/contato.service";
import {ProcedimentoRequestModel} from "../../model/procedimento-request-model";

const API: string = '/procedimento'

@Injectable({
    providedIn: 'root'
})
export class ProcedimentoService {

    protected envService: EnvService;
    public procedimentos: PacienteProcedimento[]

    constructor(private http: HttpClient,
                envService: EnvService,
                private contatoService: ContatoService) {
        this.envService = envService
        this.getTiposProcedimentos()
    }

    public getTiposProcedimentos(): void{
        this.http.get(`${this.envService.environment.baseUrl}${API}`).subscribe((procedimentos: PacienteProcedimento[]) => {
            this.procedimentos = procedimentos
        })
    }

    public editarProcedimento(procedimento: PacienteProcedimento): void {
        for (let i = 0; i < this.procedimentos.length; i++) {
            if(this.procedimentos[i].id == procedimento.id) {
                this.procedimentos[i] = {...procedimento}
                //todo enviar alteração contato api
            }
        }
    }

    criar(procedimento: ProcedimentoRequestModel): Observable<any> {
        return this.http.post(`${this.envService.environment.baseUrl}${API}`, procedimento)
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
