import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InstituicaoBancariaService} from "../../../../service/instituicao-bancaria.service";
import {FinanceiroFilter} from "../../../../_model/financeiro-filter";
import {FormaPagamentoService} from "../../../../service/forma-pagamento.service";
import {TransportadoraService} from "../../../../service/transportadora.service";

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {

    @Input() instituicaoBancariaService!: InstituicaoBancariaService
    @Input() formaPagamentoService!: FormaPagamentoService
    @Input() transportadoraService!: TransportadoraService
    @Output() filtroHandler = new EventEmitter<FinanceiroFilter>()

    maxDate: Date;
    minDate: Date;

    public filter: FinanceiroFilter = this.buildFiltro()

    constructor() {
        this.maxDate = new Date()
        this.minDate = new Date()
    }

    removerInstituicao(event: {id: string, nome: string}) {
        const a = this.filter.search.instituicaoBancaria.indexOf({id: event.id, nome: event.nome})
        this.filter.search.instituicaoBancaria.splice(a, 1)
    }

    onInstituicaBancariaSelecionado(event: {id: string, nome: string}) {
        // @ts-ignore
        this.filter.search.instituicaoBancaria = event
    }

    onFormaPagamentoSelecionado(event: { id: string }) {
        // @ts-ignore
        this.filter.search.formaPagamento.id = event.id
    }

    onTransportadorSelecionado(event: { id: string }) {
        // @ts-ignore
        this.filter.search.transportadora.id = event.id
    }

    atualizarDataAte($event : any) {
        this.maxDate = $event
        this.filter.search.dataPagamentoAte = $event
    }

    atualizarDataDe($event: any) {
        this.minDate = $event
        this.filter.search.dataPagamentoDe = $event
    }

    private buildFiltro() {
        let instituicaoBancaria = [{id: '', nome: ''}]
        return {
            sort: "",
            page: 0,
            search: {
                ativo: null,
                ctr: {numero: null},
                dataPagamentoAte: null,
                dataPagamentoDe: null,
                origem: "TODOS",
                formaPagamento: {id: ""},
                instituicaoBancaria: instituicaoBancaria,
                transportadora: {id: ''}
            }
        }
    }

    onFilterClick() {
        this.filtroHandler.emit(this.filter)
    }
}
