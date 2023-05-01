import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PagamentoModel} from "../../../../_model/pagamento.model";
import {FormaPagamentoService} from "../../../../service/forma-pagamento.service";
import {InstituicaoBancariaService} from "../../../../service/instituicao-bancaria.service";
import {PagamentosService} from "../../../../service/pagamentos.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-editar-pagamento-dialog',
    templateUrl: './editar-pagamento-dialog.component.html',
    styleUrls: ['./editar-pagamento-dialog.component.scss']
})
export class EditarPagamentoDialogComponent {

    @Input() pagamento!: PagamentoModel;
    @Input() isVisivel: boolean = false;
    @Output() pagamentoAtualizadoHandler = new EventEmitter<boolean>()

    public submetido: boolean = false;

    constructor(private fomaPagamentoService: FormaPagamentoService,
                private iBancariaService: InstituicaoBancariaService,
                private pagamentoService: PagamentosService,
                private messageService: MessageService) {
        console.log('Dialog inicializado')
    }

    ngOnInit() {
        this.logIt('OnInit');
    }

    ngAfterViewInit() {
        this.logIt('After view Init em Autocomplete')
    }

    logIt(msg: string) {
        console.log(msg)
    }

    onDialogSave() {
        this.pagamentoService.atualizarPagamento(this.pagamento).subscribe(value => {
            this.exibirMensagem('success', 'Atualizado', `Pagamento (${value.id}) atualizado`, 5000)
            //TODO emitir evento ao componente PAI.
            this.limparObjPagamento()
            this.setVisibilidadeDialog(false)
        }, error => {
            this.exibirMensagem('error', 'Erro', error, 5000)
            this.limparObjPagamento()
            this.setVisibilidadeDialog(false)
        })
    }

    private exibirMensagem(severity: string, summary: string, detail: string, life: number): void {
        this.messageService.add({
            severity: severity,
            summary: summary,
            detail: detail,
            life: life
        });
    }

    onFormaPagamentoSelecionado(event: { id: string }) {
        // @ts-ignore
        this.pagamento.formaPagamento.id = event.id
    }

    onIBancariaSelecionado(event: { id: string }) {
        // @ts-ignore
        this.pagamento.instituicaoBancaria.id = event.id
    }

    onDialogCancel() {
        this.setVisibilidadeDialog(false)
        this.submetido = false;
        this.limparObjPagamento()
    }

    getFormaPagamentoService() {
        return this.fomaPagamentoService;
    }

    getInstituicaoBancariaService() {
        return this.iBancariaService;
    }

    isPodeSalvar(): boolean {
        return this.pagamento.dataPagamento != null &&
            this.pagamento.formaPagamento?.id != '' &&
            this.pagamento.instituicaoBancaria?.id != '' &&
            this.pagamento.valor != null &&
            this.pagamento.id != null
    }

    private limparObjPagamento(): void {
        this.pagamento = {}
    }

    private setVisibilidadeDialog(isVisible: boolean): void {
        this.isVisivel = isVisible
    }
}
