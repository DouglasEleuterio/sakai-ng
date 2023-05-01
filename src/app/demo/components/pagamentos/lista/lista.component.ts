import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PagamentoModel} from "../../../../_model/pagamento.model";
import {PagamentosService} from "../../../../service/pagamentos.service";

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

    @Input() pagamentos!: PagamentoModel []
    @Input() loading!: boolean
    @Output() dialogEditarPagamentoHandler = new EventEmitter<PagamentoModel>()

    constructor(private pagamentoService: PagamentosService) {
    }

    onDialogEditarPagamentoClick(pagamento: PagamentoModel) {
       this.pagamentoService.setPagamentoParaEditar(pagamento)
        this.dialogEditarPagamentoHandler.emit(pagamento)
    }
}
