import { Component } from '@angular/core';
import {FomaPagamentoService} from "../../../../service/foma-pagamento.service";
import {InstituicaoBancariaService} from "../../../../service/instituicao-bancaria.service";

@Component({
  selector: 'app-relatorio-financeiro',
  templateUrl: './relatorio-financeiro.component.html'
})
export class RelatorioFinanceiroComponent {

    constructor(private fomaPagamentoService: FomaPagamentoService,
                private instituicaoBancariaService: InstituicaoBancariaService) {
    }

    getFomaPagamentoServiceService() {
        return this.fomaPagamentoService;
    }

    getInstituicaoBancariaServiceService() {
        return this.instituicaoBancariaService;
    }

    onFormaPagamentoSelecionado(event: any) {
        console.log(event)
    }

    onInstituicaBancariaSelecionado($event: any) {
        console.log($event)
    }
}
