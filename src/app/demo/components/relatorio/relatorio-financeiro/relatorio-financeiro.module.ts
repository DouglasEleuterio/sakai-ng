import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioFinanceiroRoutingModule } from './relatorio-financeiro-routing.module';
import {RelatorioFinanceiroComponent} from "./relatorio-financeiro.component";


@NgModule({
  declarations: [RelatorioFinanceiroComponent],
  imports: [
    CommonModule,
    RelatorioFinanceiroRoutingModule,
  ]
})
export class RelatorioFinanceiroModule { }
