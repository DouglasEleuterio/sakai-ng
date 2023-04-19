import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RelatorioFinanceiroComponent} from "./relatorio-financeiro.component";

const routes: Routes = [
    {path: '', component: RelatorioFinanceiroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioFinanceiroRoutingModule { }
