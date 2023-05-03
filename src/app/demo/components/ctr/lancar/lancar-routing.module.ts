import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MessageService} from "primeng/api";
import {LancarComponent} from "./lancar.component";

const routes: Routes = [
    {path: '', component: LancarComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers:[MessageService]
})
export class LancarRoutingModule { }

