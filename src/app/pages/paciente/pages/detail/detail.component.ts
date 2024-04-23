import {Component} from '@angular/core';
import {WindowService} from "../../../../service/window/window.service";
import {ProcedimentoService} from "../../../../service/procedimento/procedimento.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
    styles: [
        `
        .p-stepper {
            flex-basis: 50rem;
        }
        `
    ]
})
export class DetailComponent {

    constructor(private eventDataService: WindowService,
                private procedimentoService: ProcedimentoService) {

        console.log(`Buscando dados do cliente ${eventDataService.getEventModel().data}`)
        procedimentoService.getProcedimentos(eventDataService.getEventModel().data.contact.identifier)
    }
}
