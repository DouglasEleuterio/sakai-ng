import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PagamentoModel} from "../../../../_model/pagamento.model";
import {FormaPagamentoService} from "../../../../service/forma-pagamento.service";
import {InstituicaoBancariaService} from "../../../../service/instituicao-bancaria.service";
import {PagamentosService} from "../../../../service/pagamentos.service";
import {MessageService} from "primeng/api";
import {FormaPagamentoModel} from "../../../../_model/forma-pagamento.model";

@Component({
    selector: 'app-editar-pagamento-dialog',
    templateUrl: './editar-pagamento-dialog.component.html',
    styleUrls: ['./editar-pagamento-dialog.component.scss']
})
export class EditarPagamentoDialogComponent {

    @Input() isVisivel: boolean = false;
    @Output() pagamentoAtualizadoHandler = new EventEmitter<boolean>()
    pagamentoEmEdicao: PagamentoModel = this.pagamentoService.getFormaPagamentoParaEditar()

    public submetido: boolean = false;
    // @ts-ignore
    formaPagamentoList: FormaPagamentoModel[]

    constructor(public fomaPagamentoService: FormaPagamentoService,
                private iBancariaService: InstituicaoBancariaService,
                private pagamentoService: PagamentosService,
                private messageService: MessageService) {
        this.fomaPagamentoService.findList().subscribe( ( value ) => {
            this.formaPagamentoList = value
        })
    }

    onDialogSave() {
        this.pagamentoService.atualizarPagamento(this.pagamentoEmEdicao).subscribe(value => {
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
        return this.pagamentoEmEdicao.dataPagamento != null &&
            this.pagamentoEmEdicao.formaPagamento?.id != '' &&
            this.pagamentoEmEdicao.instituicaoBancaria?.id != '' &&
            this.pagamentoEmEdicao.valor != null &&
            this.pagamentoEmEdicao.id != null
    }

    private limparObjPagamento(): void {
        this.pagamentoEmEdicao = {}
    }

    private setVisibilidadeDialog(isVisible: boolean): void {
        this.isVisivel = isVisible
    }

    definirFormaPagamento($event: any) {
        this.pagamentoEmEdicao.formaPagamento = $event
    }
}
