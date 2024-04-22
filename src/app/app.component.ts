import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    host: {
        '(window:message)': 'receiveMessage($event)'
    }
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) {
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
        console.log('Dados recebidos:', eventData);
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
