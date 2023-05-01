import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageService} from "primeng/api";
import {PaginaRoutingModule} from "./pagina-routing.module";
import { ViewComponent } from './view/view.component'

@NgModule({
    declarations: [
    ViewComponent
  ],
    imports: [
        CommonModule,
        PaginaRoutingModule
    ],
    providers: [MessageService]
})
export class PaginaModule {
}
