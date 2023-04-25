import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'financeiro', data: {breadcrumb: 'Financeiro'},
        loadChildren: () => import('./relatorio-financeiro/relatorio-financeiro.module')
            .then(m => m.RelatorioFinanceiroModule)
    },
    {
        path: 'combo', data: {breadcrumb: 'Combo'},
        loadChildren: () => import('./relatorio-combo/relatorio-combo.module')
            .then(m => m.RelatorioComboModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelatorioRoutingModule {
}
