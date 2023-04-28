import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PagamentosService} from "../../../../service/pagamentos.service";
import {HttpParams} from "@angular/common/http";
import {PagamentoModel} from "../../../../_model/pagamento.model";
import {FomaPagamentoService} from "../../../../service/foma-pagamento.service";
import {InstituicaoBancariaService} from "../../../../service/instituicao-bancaria.service";
import {MessageService} from "primeng/api";
import {FinanceiroFilter} from "../../../../_model/financeiro-filter";
import {InstituicaoBancariaModel} from "../../../../_model/instituicao-bancaria.model";

@Component({
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

    sortField: string
    sortDirection: string
    pagamentos: any [] = []
    loading: boolean = false
    informarPagamentoDialog: boolean = false
    pagamento: PagamentoModel = this.buidPagamento()
    submitted: boolean = false;
    maxDate: Date;
    minDate: Date | undefined;

    //Paginator
    first: number = 0;
    rows: number = 7;
    totalElements: number = 0
    rowsPerPage = [5, 10, 15, 20, 30]
    private numberPage: number = 0;
    private pages: number = 1;

    //Filter
    public filter: FinanceiroFilter = this.buildFiltro()
    private filterSearch: any;

    constructor(private service: PagamentosService,
                private messageService: MessageService,
                private fomaPagamentoService: FomaPagamentoService,
                private iBancariaService: InstituicaoBancariaService) {
        this.maxDate = new Date()
        this.sortField = 'dataPagamento'
        this.sortDirection = 'desc'
    }
    //sort=dataPagamento,desc&page=0&size=10&search=ativo!=null;dataPagamento=ge=2020-04-01
    //https://aterrosystem-migracao.herokuapp.com/api/pagamento?sort=dataPagamento,desc&page=0&
    // search=ativo!=null;formaPagamento.id==3bc68747-4f5a-44f9-9adc-7cce486edd13;
    // instituicaoBancaria.id==3c040f7c-dcbf-425a-b6a9-71a590bc2196;dataPagamento=ge=2023-04-01;
    // dataPagamento=le=2023-04-30

    ngOnInit(): void {
        this.loadDatas()
    }

    private loadDatas(){
        this.loading = true
        let params = new HttpParams();
        params = params.append('sort', `${this.sortField},${this.sortDirection}`)
        params = params.append('size', this.rows)
        // params = params.append('search', 'ativo!=null;formaPagamento.nome!=Combo')
        params = params.append('search', this.processaFiltroSearch())
        params = params.append('page',this.numberPage)
        this.service.getAll(params).subscribe(value => {
            this.pagamentos = value.content
            this.rows = value.pageable.pageSize
            this.numberPage = value.pageable.pageNumber
            this.loading = false
            this.pages = value.totalPages
            this.totalElements = value.totalElements
        }, error => {
            this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error, life: 5000 });
            this.loading = false
        })
    }

    getFomaPagamentoService() {
        return this.fomaPagamentoService;
    }

    getInstituicaoBancariaService() {
        return this.iBancariaService;
    }

    onFormaPagamentoSelecionado(event: { id: string }) {
        // @ts-ignore
        this.pagamento.formaPagamento.id = event.id
    }

    onIBancariaSelecionado(event: { id: string }) {
        // @ts-ignore
        this.pagamento.instituicaoBancaria.id = event.id
    }

    atualizarDataDe($event: any) {
        this.pagamento.dataPagamento = $event
    }

    onDialogCancel() {
        this.informarPagamentoDialog = false;
        this.submitted = false;
        this.pagamento = this.buidPagamento()
    }

    onDialogSave() {
        this.service.atualizarPagamento(this.pagamento).subscribe(value => {
            this.messageService.add({
                severity: 'success',
                summary: 'Atualizado',
                detail: `Pagamento (${value.id}) atualizado`,
                life: 5000
            });
            this.loadDatas()
            this.pagamento = this.buidPagamento()
            this.informarPagamentoDialog = false
        }, error => {
            this.messageService.add({severity: 'error', summary: 'Erro ', detail: `${error}`, life: 5000});
            this.pagamento = this.buidPagamento()
            this.informarPagamentoDialog = false
        })
    }

    isPodeSalvar(): boolean {
        return this.pagamento.dataPagamento != null && this.pagamento.formaPagamento?.id != '' && this.pagamento.instituicaoBancaria?.id != ''
    }

    showDialog(id: string) {
        this.informarPagamentoDialog = true
        this.pagamento.id = id
    }

    buidPagamento(): PagamentoModel {
        return {
            id: '',
            formaPagamento: {id: '', nome: ''},
            dataPagamento: new Date(),
            instituicaoBancaria: {id: '', nome: ''}
        }
    }

    pageChange(event: {first: number, page: number, rows: number, pageCount: number}) {
        this.numberPage = event.page
        this.first = event.first;
        this.rows = event.rows
        this.loadDatas()
    }

    private processaFiltroSearch(): string {
        let search = 'ativo!=null'
        if(this.filter.search.formaPagamento.id != null && this.filter.search.formaPagamento.id != '')
            search = search.concat(';formaPagamento.id==' + this.filter.search.formaPagamento.id)
        if(this.filter.search.instituicaoBancaria.length > 0 && this.filter.search.instituicaoBancaria[0].id !== "")
            search = search.concat(';instituicaoBancaria.id=in=(' + this.buildIdsFromList(this.filter.search.instituicaoBancaria) + ')')
        if(this.filter.search.dataPagamentoDe != null)
            search = search.concat(`;dataPagamento=ge=${this.filter.search.dataPagamentoDe.toISOString().split("T")[0]}`)
        if(this.filter.search.dataPagamentoAte != null)
            search = search.concat(`;dataPagamento=le=${this.filter.search.dataPagamentoAte.toISOString().split("T")[0]}`)
        return search
    }

    onInstituicaBancariaSelecionado(event: {id: string, nome: string}) {
        // @ts-ignore
        this.filter.search.instituicaoBancaria = event
        this.loadDatas()
    }

    getInstituicaoBancariaServiceService() {
        return this.iBancariaService;
    }

    removerInstituicao(event: {id: string, nome: string}) {
        const a = this.filter.search.instituicaoBancaria.indexOf({id: event.id, nome: event.nome})
        this.filter.search.instituicaoBancaria.splice(a, 1)
        this.loadDatas()
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
                instituicaoBancaria: instituicaoBancaria
            }
        }
    }

    private buildIdsFromList(instituicaoBancaria: InstituicaoBancariaModel[]) {
        let ids = ''
        for (let i = 0; i < instituicaoBancaria.length; i++) {
            if(i == instituicaoBancaria.length - 1){
                ids = ids.concat(instituicaoBancaria[i].id)
            } else {
                ids = ids.concat(instituicaoBancaria[i].id + ',')
            }
        }
        return ids;
    }
}


//sort=dataPagamento,desc&page=0&size=10&search=ativo!=null;dataPagamento=ge=2020-04-01
//https://aterrosystem-migracao.herokuapp.com/api/pagamento?sort=dataPagamento,desc&page=0&
// search=ativo!=null;formaPagamento.id==3bc68747-4f5a-44f9-9adc-7cce486edd13;
// instituicaoBancaria.id==3c040f7c-dcbf-425a-b6a9-71a590bc2196;dataPagamento=ge=2023-04-01;
// dataPagamento=le=2023-04-30
