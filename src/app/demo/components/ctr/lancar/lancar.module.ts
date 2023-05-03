import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LancarRoutingModule} from "./lancar-routing.module";
import {MessageService} from "primeng/api";
import {LancarComponent} from "./lancar.component";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";

@NgModule({
    declarations: [
      LancarComponent
    ],
    imports: [
        CommonModule,
        LancarRoutingModule,
        DividerModule,
        ButtonModule,
        InputNumberModule,
        FormsModule,
        CalendarModule,
    ],
    providers: [MessageService]
})
export class LancarModule {
}
