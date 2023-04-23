import {Component, OnInit} from '@angular/core';
import {FomaPagamentoService} from "../../../../service/foma-pagamento.service";
import {InstituicaoBancariaService} from "../../../../service/instituicao-bancaria.service";
import {OrigemService} from "../../../../service/origem.service";
import {FinanceiroFilter} from "../../../../_model/financeiro-filter";
import {RelatorioService} from "../../../../service/relatorio.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-relatorio-financeiro',
  templateUrl: './relatorio-financeiro.component.html',
    providers:[MessageService]
})
export class RelatorioFinanceiroComponent implements OnInit {
    public filter: FinanceiroFilter = this.buildFiltro()
    loading: boolean = false;

    constructor(private fomaPagamentoService: FomaPagamentoService,
                private instituicaoBancariaService: InstituicaoBancariaService,
                private origemService: OrigemService,
                private relatorioService: RelatorioService,
                private messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    getFomaPagamentoServiceService() {
        return this.fomaPagamentoService;
    }
    getInstituicaoBancariaServiceService() {
        return this.instituicaoBancariaService;
    }
    getOrigemServiceService() {
        return this.origemService;
    }

    onFormaPagamentoSelecionado(event: {id: string}) {
        this.filter.search.formaPagamento.id = event.id
    }
    onInstituicaBancariaSelecionado(event: {id: string}) {
        this.filter.search.instituicaoBancaria.id = event.id

    }
    onOrigemSelecionado(event: {nome: string}) {
        this.filter.search.origem = event.nome
    }

    private buildFiltro() {
        return {
            sort: "",
            page: 0,
            search: {
                ativo: null,
                ctr: {numero: null},
                dataPagamentoAte: new Date(),
                dataPagamentoDe: new Date(),
                origem: "TODOS",
                formaPagamento: {id: ""},
                instituicaoBancaria: {id: ""}
            }
        }
    }

    gerarRelatorio() {
        this.loading = true
        this.relatorioService.gerarRelatorio(this.filter).subscribe((value) => {
            // console.log(value)
            // let fileName = value.headers.get('Content-Disposition')?.split(';')[1].split('=')[1]
            let fileName = `relatorio-financeiro-${new Date().toLocaleString('pt-BR', { timeZone: 'UTC' })}`
            let blob: Blob = value.body as Blob
            let a = document.createElement('a')
            // @ts-ignore
            a.download = fileName
            a.href = window.URL.createObjectURL(blob)
            a.click()
            this.loading = false
        }, error => {
            this.loading = false
            this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error, life: 10000 });
        })
    }
}
