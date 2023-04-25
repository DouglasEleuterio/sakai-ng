import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

const routes = [
    {
        path: '', data: {breadcrumb: 'Pagamentos'},
        loadChildren: () => import('./pagina/pagina.module')
            .then(m => m.PaginaModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagamentosRoutingModule {
}
