import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'financeiro', data: { breadcrumb: 'Relatorio' }, loadChildren: () => import('./relatorio-financeiro/relatorio-financeiro.module')
            .then(m => m.RelatorioFinanceiroModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
