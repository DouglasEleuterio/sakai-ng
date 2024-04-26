import {Component} from '@angular/core';
import {ContatoModel} from "../../../../../model/contato-model";
import {ContatoService} from "../../../../../service/contato/contato.service";
import {WindowService} from "../../../../../service/window/window.service";

@Component({
    selector: 'app-cliente-painel',
    templateUrl: './paciente-painel.component.html',
    styleUrl: './paciente-painel.component.scss'
})
export class PacientePainelComponent {
    edit: boolean = false;

    public contato: ContatoModel = new ContatoModel()
    public numero: string

    constructor(protected contatoService: ContatoService,
                private windowService: WindowService) {
        setTimeout(() => {
            this.loadValues()
        }, 3000)
    }

    private loadValues() {
        console.log(`Inicío do loadValues`)
        this.windowService.isRecebeuEvento().subscribe(() => {
            this.windowService.getEventModel().subscribe((value2) => {
                console.log(`Load Values getEventModel()`)
                console.log(`Valor de (Value2) metodo loadValues linha 40`)
                console.log(`Valor de value2.contact ${value2.contact}`)
                console.log(value2)
                const jsonObject = JSON.parse(value2);
                const phoneNumber = jsonObject.data.contact.phone_number;
                if (phoneNumber) {
                    console.log(`Recebeu o numero: ${phoneNumber}`)
                    this.numero = phoneNumber
                    this.contatoService.getContato(this.numero).subscribe((value3) => {
                        console.log('Contato construído')
                        this.contato = value3
                        this.contatoService.contatoObtido = {...this.contato}
                    })
                }
            })
        })
    }

    getIdade(dataNascimento: Date) {
        if (dataNascimento) {
            return new Date().getFullYear() - new Date(dataNascimento).getFullYear()
        }
        return ''
    }
}
