import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PagamentosService} from "../../../../service/pagamentos.service";
import {HttpParams} from "@angular/common/http";
import {PagamentoModel} from "../../../../_model/pagamento.model";
import {FomaPagamentoService} from "../../../../service/foma-pagamento.service";
import {InstituicaoBancariaService} from "../../../../service/instituicao-bancaria.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit{

    sortField: string
    sortDirection: string
    paginatorSize: string
    pagamentos: any [] = []
    loading: boolean = true;
    @ViewChild('filter') filter!: ElementRef;
    loaging: boolean = true
    informarPagamentoDialog: boolean = false
    pagamento: PagamentoModel = this.buidPagamento()
    // pagamento: PagamentoModel = {}
    submitted: boolean = false;
    maxDate: Date;
    minDate: Date | undefined;

    constructor(private service: PagamentosService,
                private messageService: MessageService,
                private fomaPagamentoService: FomaPagamentoService,
                private iBancariaService: InstituicaoBancariaService) {
        this.maxDate = new Date()
        this.sortField = 'dataPagamento'
        this.sortDirection = 'desc'
        this.paginatorSize = '10'
    }
    //sort=dataPagamento,desc&page=0&size=10&search=ativo!=null;dataPagamento=ge=2020-04-01

    ngOnInit(): void {
        let params = new HttpParams();
        params = params.append('sort',`${this.sortField},${this.sortDirection}`)
        params = params.append('size',this.paginatorSize)
        params = params.append('search','ativo!=null;dataPagamento=ge=2023-04-01')
        // params = params.append('','')
        this.service.getAll(params).subscribe(value => {
            this.pagamentos = value.content
            this.loaging = false
        })
    }

    getFomaPagamentoService() {
        return this.fomaPagamentoService;
    }

    getInstituicaoBancariaService() {
        return this.iBancariaService;
    }

    onFormaPagamentoSelecionado(event: {id: string}) {
        // @ts-ignore
        this.pagamento.formaPagamento.id = event.id
    }

    onIBancariaSelecionado(event: {id: string}) {
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
            this.messageService.add({ severity: 'success', summary: 'Atualizado', detail: `Pagamento (${value.id}) atualizado`, life: 5000 });
            this.pagamento = this.buidPagamento()
            this.informarPagamentoDialog = false
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Erro ', detail: `${error}`, life: 5000 });
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
        return {id: '', formaPagamento: {id: '', nome: ''}, dataPagamento: new Date(), instituicaoBancaria: {id: '', nome: ''}}
    }
}
