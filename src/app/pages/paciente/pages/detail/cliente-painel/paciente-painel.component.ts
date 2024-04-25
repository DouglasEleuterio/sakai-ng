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

    constructor(private contatoService: ContatoService, private windowService: WindowService) {
        this.loadValues()
    }

    private loadValues() {
        console.log(`Inicío do loadValues`)
        this.windowService.isRecebeuEvento().subscribe(() => {
            this.windowService.getEventModel().subscribe((value2) => {
                console.log(`Load Values getEventModel()`)
                if (value2.data.contact.phone_number) {
                    console.log(`Recebeu o numero: ${value2.data.contact.phone_number}`)
                    this.numero = value2.data.contact.phone_number
                    this.contatoService.getContato(this.numero).subscribe((value3) => {
                        console.log('Contato construído')
                        this.contato = value3
                    })
                }
            })
        })
    }

    getIdade(dataNascimento: Date) {
        if (dataNascimento) {
            return new Date().getFullYear() - dataNascimento.getFullYear()
        }
        return ''
    }
}
