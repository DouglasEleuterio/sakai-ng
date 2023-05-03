import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CtrRoutingModule} from "./ctr-routing.module";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {LancarModule} from "./lancar/lancar.module";

@NgModule({
    imports: [
        CommonModule,
        CtrRoutingModule,
        DividerModule,
        ButtonModule
    ],
    exports: [
        LancarModule
    ]
})
export class CtrModule {
}
