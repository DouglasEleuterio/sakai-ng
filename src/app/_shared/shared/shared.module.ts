import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutoCompleteComponent} from "./auto-complete/auto-complete.component";
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [AutoCompleteComponent],
    exports: [
        AutoCompleteComponent
    ],
    imports: [
        CommonModule,
        AutoCompleteModule,
        FormsModule,
    ]
})
export class SharedModule { }
