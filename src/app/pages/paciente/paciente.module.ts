import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailComponent} from "./pages/detail/detail.component";
import {PacienteRoutingModule} from "./paciente-routing.module";
import {ButtonModule} from "primeng/button";
import {StepperModule} from "primeng/stepper";
import {MenuModule} from "primeng/menu";
import {PacientePainelComponent} from "./pages/detail/cliente-painel/paciente-painel.component";
import {ProcedimentoPainelComponent} from "./pages/detail/procedimento-painel/procedimento-painel.component";
import {OutrosPainelComponent} from "./pages/detail/outros-painel/outros-painel.component";


@NgModule({
  declarations: [
      DetailComponent,
      PacientePainelComponent,
      ProcedimentoPainelComponent,
      OutrosPainelComponent
  ],
    imports: [
        CommonModule,
        PacienteRoutingModule,
        ButtonModule,
        StepperModule,
        MenuModule
    ]
})
export class PacienteModule { }
