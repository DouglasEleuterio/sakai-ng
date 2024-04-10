import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailComponent} from "./pages/detail/detail.component";
import {PacienteRoutingModule} from "./paciente-routing.module";

@NgModule({
  declarations: [DetailComponent],
    imports: [
        CommonModule,
        PacienteRoutingModule
    ]
})
export class PacienteModule { }
