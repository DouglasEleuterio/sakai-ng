import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RelatorioComboComponent} from "./relatorio-combo.component";

const routes: Routes = [
    {path: '', component: RelatorioComboComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioComboRoutingModule { }
