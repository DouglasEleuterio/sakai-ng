import {Component, EventEmitter, OnInit} from '@angular/core';
import {PagamentosService} from "../../../../service/pagamentos.service";
import {HttpParams} from "@angular/common/http";
import {PagamentoModel} from "../../../../_model/pagamento.model";
import {MessageService} from "primeng/api";
import {FinanceiroFilter} from "../../../../_model/financeiro-filter";
import {InstituicaoBancariaModel} from "../../../../_model/instituicao-bancaria.model";
import {TransportadoraService} from "../../../../service/transportadora.service";
import {InstituicaoBancariaService} from "../../../../service/instituicao-bancaria.service";
import {FormaPagamentoService} from "../../../../service/forma-pagamento.service";

@Component({
    providers:[MessageService],
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

    pagamentos: any [] = []
    loading: boolean = false
    informarPagamentoDialog: boolean = false
    pagamento: PagamentoModel = this.buidPagamento()
    submitted: boolean = false;

    public filter!: FinanceiroFilter

    public onPagamentoEdit = new EventEmitter<PagamentoModel>()

    //Paginator
    first: number = 0;
    rows: number = 7;
    totalElements: number = 0
    rowsPerPage = [5, 10, 15, 20, 30]
    private numberPage: number = 0;
    private pages: number = 1;
    pagamentoParaEdicao!: PagamentoModel;

    constructor(private service: PagamentosService,
                public transportadoraService: TransportadoraService,
                private messageService: MessageService,
                public formaPagamentoService: FormaPagamentoService,
                public instituicaoBancariaService: InstituicaoBancariaService) {
        this.filter = {
            page: 0,
            sort: 'dataPagamento,desc',
            search: {
                ativo: true,
                dataPagamentoAte: null,
                ctr: {numero: null},
                dataPagamentoDe: null,
                origem: 'Todos',
                transportadora: {id: null},
                formaPagamento: {id: null},
                instituicaoBancaria: []
            }
        }


    }

    ngOnInit(): void {
        this.loadDatas()
    }

    public loadDatas() {
        this.loading = true
        let params = new HttpParams();
        params = params.append('sort', this.filter.sort)
        params = params.append('size', this.rows)
        // params = params.append('search', 'ativo!=null;formaPagamento.nome!=Combo')
        params = params.append('search', this.processaFiltroSearch())
        params = params.append('page', this.numberPage)
        this.service.getAll(params).subscribe(value => {
            this.pagamentos = value.content
            this.rows = value.pageable.pageSize
            this.numberPage = value.pageable.pageNumber
            this.loading = false
            this.pages = value.totalPages
            this.totalElements = value.totalElements
        }, error => {
            this.messageService.add({key: 'tst', severity: 'error', summary: 'Error', detail: error.message ?  error.message: error  , life: 5000});
            this.loading = false
        })
    }

    getTransportadoraService() {
        return this.transportadoraService
    }

    onDialogClick(pagamento: PagamentoModel) {
        this.informarPagamentoDialog = true
        this.onPagamentoEdit.emit(pagamento)
    }

    atualizarDataPagamento($event: any) {
        this.pagamento.dataPagamento = $event
    }

    buidPagamento(): PagamentoModel {
        return {
            id: '',
            valor: 0,
            formaPagamento: {id: '', nome: ''},
            dataPagamento: new Date(),
            instituicaoBancaria: {id: '', nome: ''}
        }
    }

    pageChange(event: { first: number, page: number, rows: number, pageCount: number }) {
        this.numberPage = event.page
        this.first = event.first;
        this.rows = event.rows
        this.loadDatas()
    }

    private processaFiltroSearch(): string {
        let isCtr = false
        let isCombo = false
        let search = 'ativo!=null'
        if (this.filter.search.formaPagamento.id != null && this.filter.search.formaPagamento.id != '')
            search = search.concat(';formaPagamento.id==' + this.filter.search.formaPagamento.id)
        if (this.filter.search.instituicaoBancaria.length > 0 && this.filter.search.instituicaoBancaria[0].id !== "")
            search = search.concat(';instituicaoBancaria.id=in=(' + this.buildIdsFromList(this.filter.search.instituicaoBancaria) + ')')
        if (this.filter.search.dataPagamentoDe != null)
            search = search.concat(`;dataPagamento=ge=${this.filter.search.dataPagamentoDe.toISOString().split("T")[0]}`)
        if (this.filter.search.dataPagamentoAte != null)
            search = search.concat(`;dataPagamento=le=${this.filter.search.dataPagamentoAte.toISOString().split("T")[0]}`)
        if (this.filter.search.ctr.numero != null)
            search = search.concat(`;ctr.numero==${this.filter.search.ctr.numero}`)
        if (this.filter.search.origem !== 'Todos')
            if (this.filter.search.origem === 'CTR') {
                isCtr = true
                search = search.concat(`;ctr.id!=null`)
            } else if (this.filter.search.origem === 'Combo') {
                search = search.concat(`;combo.id!=null`)
                isCombo = true
            }
        if (this.filter.search.transportadora.id != null && this.filter.search.transportadora.id != '')
            if (isCtr) {
                search = search.concat(`;ctr.transportador.id==${this.filter.search.transportadora.id}`)
            } else if (isCombo) {
                search = search.concat(`;ctr.combo.id==${this.filter.search.transportadora.id}`)
            }
        return search
    }


    removerInstituicao(event: { id: string, nome: string }) {
        const a = this.filter.search.instituicaoBancaria.indexOf({id: event.id, nome: event.nome})
        this.filter.search.instituicaoBancaria.splice(a, 1)
    }

    onFiltroAplicadoHandler(filtro: FinanceiroFilter): void {
        this.filter = filtro
        this.loadDatas()
    }

    private buildIdsFromList(instituicaoBancaria: InstituicaoBancariaModel[]) {
        let ids = ''
        for (let i = 0; i < instituicaoBancaria.length; i++) {
            if (i == instituicaoBancaria.length - 1) {
                ids = ids.concat(instituicaoBancaria[i].id)
            } else {
                ids = ids.concat(instituicaoBancaria[i].id + ',')
            }
        }
        return ids;
    }

}
