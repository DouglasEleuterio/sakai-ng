import { Component } from '@angular/core';
import {FomaPagamentoService} from "../../../../service/foma-pagamento.service";

@Component({
  selector: 'app-relatorio-financeiro',
  templateUrl: './relatorio-financeiro.component.html'
})
export class RelatorioFinanceiroComponent {

    constructor(public formaPagamento: FomaPagamentoService) {
    }

    getService() {
        return this.formaPagamento;
    }

    onFormaPagamentoSelecionado(event: any) {
        console.log(event)
    }
}
