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

    public contato: ContatoModel = new ContatoModel()

    constructor(private contatoService: ContatoService) {
        this.contatoService.getContatoObtido().subscribe(cont => {
            this.contato = cont
        })
    }

    getIdade(dataNascimento: Date) {
        if (dataNascimento) {
            return new Date().getFullYear() - new Date(dataNascimento).getFullYear()
        }
        return ''
    }
}
