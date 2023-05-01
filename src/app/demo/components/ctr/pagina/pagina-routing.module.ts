import { NgModule } from '@angular/core';
import {MessageService} from "primeng/api";
import {RouterModule, Routes} from "@angular/router";
import {ViewComponent} from "./view/view.component";

const routes: Routes = [
    {path: '', component: ViewComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
    providers:[MessageService]
})
export class PaginaRoutingModule { }
