import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioComboComponent } from './relatorio-combo.component';
import {RelatorioComboRoutingModule} from "./relatorio-combo-routing.module";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "../../../../_shared/shared/shared.module";



@NgModule({
  declarations: [RelatorioComboComponent],
    imports: [
        CommonModule,
        SharedModule,
        RelatorioComboRoutingModule,
        CardModule,
        ButtonModule
    ]
})
export class RelatorioComboModule { }
