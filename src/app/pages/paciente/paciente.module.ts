import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailComponent} from "./pages/detail/detail.component";
import {PacienteRoutingModule} from "./paciente-routing.module";
import {ButtonModule} from "primeng/button";
import {StepperModule} from "primeng/stepper";


@NgModule({
  declarations: [DetailComponent],
    imports: [
        CommonModule,
        PacienteRoutingModule,
        ButtonModule,
        StepperModule
    ]
})
export class PacienteModule { }
