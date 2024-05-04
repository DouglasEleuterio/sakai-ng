import {Component} from '@angular/core';
import {ContatoModel} from "../../../../../model/contato-model";
import {ContatoService} from "../../../../../service/contato/contato.service";

@Component({
    selector: 'app-cliente-painel',
    templateUrl: './paciente-painel.component.html',
    styleUrl: './paciente-painel.component.scss'
})
export class PacientePainelComponent {
    edit: boolean = false;

    public contatoObtido: ContatoModel;

    constructor(private contatoService: ContatoService) {
        this.contatoObtido = this.contatoService.contatoObtido
    }

    getIdade(dataNascimento: Date) {
        if (dataNascimento) {
            return new Date().getFullYear() - new Date(dataNascimento).getFullYear()
        }
        return ''
    }

    getGenero(): string {
        if(this.contatoService.contatoObtido.genero === 'M') {
            return 'Masculino'
        } else if (this.contatoService.contatoObtido.genero === 'F') {
            return 'Feminino'
        } else {
            return 'Não informado'
        }
    }
}
