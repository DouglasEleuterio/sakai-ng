import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginaComponent} from "./pagina.component";
import {PaginaRoutingModule} from "./pagina-routing.module";


@NgModule({
    declarations: [PaginaComponent],
    imports: [
        CommonModule,
        PaginaRoutingModule
    ]
})
export class PaginaModule {
}
