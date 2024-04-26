import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ContatoModel} from "../../model/contato-model";
import {HttpClient} from "@angular/common/http";
import {EnvService} from "../../env/env.service";

const API: string = '/cliente'

@Injectable({
    providedIn: 'root'
})
export class ContatoService {

    protected envService: EnvService;
    private _contatoObtido: ContatoModel;

    constructor(private http: HttpClient, envService: EnvService) {
        this.envService = envService
    }

    public getContato(numero: string): Observable<any> {
        return this.http.get(`${this.envService.environment.baseUrl}${API}/${numero}`)
    }

    private buildContato(numero: string): ContatoModel {
        return new ContatoModel('Nome do contato', numero, 'M', new Date(1990, 9, 1));
    }

    public getContatoObtido(): ContatoModel {
        return this._contatoObtido;
    }

    set contatoObtido(value: ContatoModel) {
        this._contatoObtido = value;
    }

}
