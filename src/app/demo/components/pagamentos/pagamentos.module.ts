import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagamentosRoutingModule} from "./pagamentos-routing.module";
import { EditarPagamentoDialogComponent } from './editar-pagamento-dialog/editar-pagamento-dialog.component';
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../../_shared/shared/shared.module";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
    imports: [
        CommonModule,
        PagamentosRoutingModule,
        InputNumberModule,
        CalendarModule,
        FormsModule,
        SharedModule,
        DialogModule,
        DropdownModule
    ],
    exports: [
        EditarPagamentoDialogComponent
    ],
    declarations: [
        EditarPagamentoDialogComponent
    ]
})
export class PagamentosModule {
}
