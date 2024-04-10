import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppLayoutComponent} from "../layout/app.layout.component";

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            // Declarar o List de Pacientes em ''
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'paciente',
        loadChildren: () => import('./paciente/paciente.module').then(m => m.PacienteModule)
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
