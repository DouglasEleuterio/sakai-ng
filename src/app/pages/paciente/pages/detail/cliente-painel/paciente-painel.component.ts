import {Component} from '@angular/core';
import {ContatoService} from "../../../../../service/contato/contato.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-cliente-painel',
    templateUrl: './paciente-painel.component.html',
    styleUrl: './paciente-painel.component.scss',
    providers: [MessageService]
})
export class PacientePainelComponent {
    edit: boolean = false;
    clienteCadastrar: {id?: number, name: string, phone: string, dataNascimento: Date, genero?: string}
    loading: boolean = false;

    constructor(protected contatoService: ContatoService,
                private messageService: MessageService) {
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
        this.edit = false
    }

    private createClienteCadastrar(){
        this.clienteCadastrar = {name: '', phone: this.contatoService.phone, dataNascimento: new Date(), genero: ''}
    }

    validarForm() {
        return !this.clienteCadastrar.name || !this.clienteCadastrar.genero || !this.clienteCadastrar.dataNascimento;
    }

    salvar() {
        this.loading = true
        this.contatoService.createContato(this.clienteCadastrar).subscribe( () => {
            this.contatoService.getContato(this.contatoService.phone)
            this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Contato salvo' });
            this.loading = false
            this.edit = false
        }, error => {
            this.loading = false
            this.edit = false
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível realizar a alteração' });
        })
    }

    editarContato() {
        this.edit = true
        this.clienteCadastrar = {
            id: this.contatoService.contatoObtido.id,
            name: this.contatoService.contatoObtido.name,
            phone: this.contatoService.contatoObtido.phone,
            dataNascimento: this.contatoService.contatoObtido.dataNascimento,
            genero: this.contatoService.contatoObtido.genero
        }
    }
}
