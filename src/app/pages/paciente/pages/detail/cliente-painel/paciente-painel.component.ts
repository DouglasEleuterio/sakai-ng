import {Component} from '@angular/core';
import {ContatoService} from "../../../../../service/contato/contato.service";

@Component({
    selector: 'app-cliente-painel',
    templateUrl: './paciente-painel.component.html',
    styleUrl: './paciente-painel.component.scss'
})
export class PacientePainelComponent {
    edit: boolean = false;
    clienteCadastrar: {name: string, phone: string, dataNascimento: Date, genero: string}

    constructor(protected contatoService: ContatoService) {
        this.createClienteCadastrar()
    }

    getIdade(dataNascimento: Date) {
        if (dataNascimento) {
            return new Date().getFullYear() - new Date(dataNascimento).getFullYear()
        }
        return 'Não informado'
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

    cancelar() {
        this.createClienteCadastrar()
    }

    private createClienteCadastrar(){
        this.clienteCadastrar = {name: '', phone: this.contatoService.phone, dataNascimento: new Date(), genero: ''}
    }

    validarForm() {
        return !this.clienteCadastrar.name || !this.clienteCadastrar.genero || !this.clienteCadastrar.dataNascimento;
    }

    salvar() {
        this.contatoService.createContato(this.clienteCadastrar).subscribe( () => {
            this.contatoService.getContato(this.contatoService.phone)
        })
    }
}
