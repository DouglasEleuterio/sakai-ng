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
import {EditorModule} from "primeng/editor";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {AutoFocusModule} from "primeng/autofocus";
import {AvatarModule} from "primeng/avatar";
import {ChipsModule} from "primeng/chips";
import {CalendarModule} from "primeng/calendar";
import {PaginatorModule} from "primeng/paginator";
import {RippleModule} from "primeng/ripple";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MultiSelectModule} from "primeng/multiselect";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {ToastModule} from "primeng/toast";


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
        MenuModule,
        EditorModule,
        FormsModule,
        DialogModule,
        DropdownModule,
        AutoFocusModule,
        AvatarModule,
        ChipsModule,
        CalendarModule,
        PaginatorModule,
        RippleModule,
        CheckboxModule,
        InputTextareaModule,
        MultiSelectModule,
        RatingModule,
        TagModule,
        ToastModule
    ]
})
export class PacienteModule { }
