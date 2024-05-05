import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvService} from "../../env/env.service";
import {ContatoModel} from "../../model/contato-model";

const API: string = '/cliente'

@Injectable({
    providedIn: 'root'
})
export class ContatoService {

    protected envService: EnvService;
    public contatoObtido: ContatoModel
    public phone: string = '9999999999999'

    constructor(private http: HttpClient, envService: EnvService) {
        this.envService = envService
    }

    public getContato(numero: string): void {
        this.http
            .get(`${this.envService.environment.baseUrl}${API}/${numero}`).subscribe((contato) => {
                this.contatoObtido = contato
            console.log(`Contato Obtido: ${this.contatoObtido}`)
        })
    }
/*
    public editarContato(contato: ContatoModel) {
        this.http
            .put(`${this.envService.environment.baseUrl}${API}`, contato)
    }
*/

/*
    public criarContato(contato: ContatoModel) {
        this.http
            .post(`${this.envService.environment.baseUrl}${API}`, contato)
    }
*/

    createContato(clienteCadastrar: { name: string; phone: string, dataNascimento: Date; genero: string }) {
        return this.http
            .post(`${this.envService.environment.baseUrl}${API}`, clienteCadastrar)

    }
}
