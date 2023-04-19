import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioFinanceiroRoutingModule } from './relatorio-financeiro-routing.module';
import {RelatorioFinanceiroComponent} from "./relatorio-financeiro.component";
import {SharedModule} from "../../../../_shared/shared/shared.module";


@NgModule({
  declarations: [RelatorioFinanceiroComponent],
    imports: [
        CommonModule,
        RelatorioFinanceiroRoutingModule,
        SharedModule,
    ]
})
export class RelatorioFinanceiroModule { }
