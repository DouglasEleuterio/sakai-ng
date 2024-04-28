import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EnvService} from "../../env/env.service";

const API: string = '/cliente'

@Injectable({
    providedIn: 'root'
})
export class ContatoService {

    protected envService: EnvService;
    private _contatoObtido: Observable<any>;
    private numeroContato: string = ''

    constructor(private http: HttpClient, envService: EnvService) {
        this.envService = envService
    }

    public getContato(numero: string): void {
        this._contatoObtido = this
            .http
            .get(`${this.envService.environment.baseUrl}${API}/${numero}`)
    }

    public getContatoObtido(): Observable<any> {
        return this._contatoObtido
    }

    public recarregarContato(): void {
        this.getContato(this.numeroContato)
    }
}
