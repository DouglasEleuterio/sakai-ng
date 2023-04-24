import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioRoutingModule } from './relatorio-routing.module';
import {RelatorioComboRoutingModule} from "./relatorio-combo/relatorio-combo-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RelatorioRoutingModule,
    RelatorioComboRoutingModule
  ]
})
export class RelatorioModule { }
