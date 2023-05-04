import { Component } from '@angular/core';
import {TransportadoraService} from "../../../../service/transportadora.service";
import {VeiculoService} from "../../../../service/veiculo.service";
import {MotoristaService} from "../../../../service/motorista.service";
import {TipoDescarteService} from "../../../../service/tipo-descarte.service";

@Component({
  selector: 'app-lancar',
  templateUrl: './lancar.component.html',
  styleUrls: ['./lancar.component.scss']
})
export class LancarComponent {

    tipoDescarteSelecionado = {id: '', nome: '', quantidade: 0, valor: 0}
    quantidadeDescarte = 1
    valorTotal: number = 0;

    ctr = {
        id: '',
        numero: 0,
        data: new Date(),
        transportadora: {id: '', nome: ''},
        veiculo: {id: '', nome: ''},
        motorista: {id: '', nome: ''},
        tipoDescarte: [{id: '', nome: '', quantidade: 0, valor: 0}]
    }

    constructor(public transportadoraService: TransportadoraService,
                public veiculoService: VeiculoService,
                public motoristaService: MotoristaService,
                public tipoDescarteService: TipoDescarteService) {
        this.ctr.tipoDescarte.splice(0,1)
    }

    onTransportadorSelecionado($event: {id: string, nome: string} ) {
        this.ctr.transportadora.id = $event.id
    }

    onVeiculoSelecionado($event: {id: string, placa: string} ) {
        this.ctr.veiculo.id = $event.id
    }

    onMotoristaSelecionado($event: {id: string, nome: string} ) {
        this.ctr.motorista.id = $event.id
    }

    onTipoDescarteSelecionado($event: {id: string, nome: string, quantidade: number, valor: number} ) {
        this.tipoDescarteSelecionado = $event
    }

    adicionarDescarte() {
        for (let i = 0; i < this.quantidadeDescarte; i++) {
            this.ctr.tipoDescarte.push(this.tipoDescarteSelecionado)
        }
        this.valorTotal += this.tipoDescarteSelecionado.valor
        this.quantidadeDescarte = 1
    }

    removerItemDescarte($event: any) {
        const index = this.ctr.tipoDescarte.indexOf($event, 0);
        if (index > -1) {
            this.valorTotal -= $event.valor
            this.ctr.tipoDescarte.splice(index, 1);
        }
    }
}
