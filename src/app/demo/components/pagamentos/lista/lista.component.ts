import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PagamentoModel} from "../../../../_model/pagamento.model";

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

    @Input() pagamentos!: PagamentoModel []
    @Input() loading!: boolean
    @Output() dialogEditarPagamentoHandler = new EventEmitter<PagamentoModel>()

    constructor() {
    }

    onDialogEditarPagamentoClick(pagamento: PagamentoModel) {
        this.dialogEditarPagamentoHandler.emit(pagamento)
    }
}
