import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioFinanceiroRoutingModule } from './relatorio-financeiro-routing.module';
import {RelatorioFinanceiroComponent} from "./relatorio-financeiro.component";
import {SharedModule} from "../../../../_shared/shared/shared.module";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [RelatorioFinanceiroComponent],
    imports: [
        CommonModule,
        RelatorioFinanceiroRoutingModule,
        SharedModule,
        InputNumberModule,
        FormsModule,
        CalendarModule,
        RippleModule,
        CardModule,
        ToastModule,
    ]
})
export class RelatorioFinanceiroModule { }
