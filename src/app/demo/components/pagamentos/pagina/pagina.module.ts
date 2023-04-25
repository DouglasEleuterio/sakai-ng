import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginaComponent} from "./pagina.component";
import {PaginaRoutingModule} from "./pagina-routing.module";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
    declarations: [PaginaComponent],
    imports: [
        CommonModule,
        PaginaRoutingModule,
        TableModule,
        ButtonModule,
        RippleModule
    ]
})
export class PaginaModule {
}
