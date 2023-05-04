import { Component } from '@angular/core';
import {TransportadoraService} from "../../../../service/transportadora.service";
import {VeiculoService} from "../../../../service/veiculo.service";

@Component({
  selector: 'app-lancar',
  templateUrl: './lancar.component.html',
  styleUrls: ['./lancar.component.scss']
})
export class LancarComponent {

    ctr = {
        id: '',
        numero: 0,
        data: new Date(),
        transportadora: {id: '', nome: ''},
        veiculo: {id: '', nome: ''}
    }

    constructor(public transportadoraService: TransportadoraService,
                public veiculoService: VeiculoService) {
    }

    onTransportadorSelecionado($event: {id: string, nome: string} ) {
        this.ctr.transportadora.id = $event.id
    }

    onVeiculoSelecionado($event: {id: string, nome: string} ) {
        this.ctr.veiculo.id = $event.id
    }
}
