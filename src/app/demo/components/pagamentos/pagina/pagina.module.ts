import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginaComponent} from "./pagina.component";
import {PaginaRoutingModule} from "./pagina-routing.module";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "../../../../_shared/shared/shared.module";
import {CalendarModule} from "primeng/calendar";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {PaginatorModule} from "primeng/paginator";
import {PaginacaoComponent} from "../paginacao/paginacao.component";
import {CardModule} from "primeng/card";
import {FiltroComponent} from "../filtro/filtro.component";
import {PagamentosModule} from "../pagamentos.module";
import {ListaComponent} from "../lista/lista.component";


@NgModule({
    declarations: [PaginaComponent, PaginacaoComponent, FiltroComponent, ListaComponent],
    imports: [
        CommonModule,
        PaginaRoutingModule,
        TableModule,
        ButtonModule,
        RippleModule,
        DialogModule,
        FormsModule,
        InputTextModule,
        SharedModule,
        CalendarModule,
        ToastModule,
        PaginatorModule,
        CardModule,
        PagamentosModule
    ], providers:[MessageService]
})
export class PaginaModule {
}
