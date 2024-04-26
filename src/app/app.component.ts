import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {WindowService} from "./service/window/window.service";
import {ContatoService} from "./service/contato/contato.service";
import {ContatoModel} from "./model/contato-model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    host: {
        '(window:message)': 'receiveMessage($event)'
    }
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig,
        private eventDataService: WindowService,
        private contatoService: ContatoService) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.setTranslation({
            'dayNames': ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
            'dayNamesShort': ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            'dayNamesMin': ['Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa', 'Do'],
            'monthNames': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            'monthNamesShort': ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        })
    }

    receiveMessage(event: any) {
        if (!this.isJSONValid(event.data)) {
            return;
        }
        const eventData = JSON.parse(event.data);
        this.eventDataService.setEventModel(event.data)
        this.contatoService.getContato(eventData.data.contact.phone_number).subscribe((cont: ContatoModel) => {
            this.contatoService.contatoObtido = cont
        })
        console.log('Dados recebidos:', this.contatoService.contatoObtido);
    }

    isJSONValid(data: any): boolean {
        try {
            JSON.parse(data);
            return true;
        } catch (error) {
            return false;
        }
    }
}
