import {Component} from '@angular/core';

class Procedimento{
    name: string
}

@Component({
  selector: 'app-procedimento-painel',
  templateUrl: './procedimento-painel.component.html',
  styleUrl: './procedimento-painel.component.scss'
})
export class ProcedimentoPainelComponent {
    edit: boolean;
    public procedimentos: {
        nome: string, date: string, valor: string, satisfacao: number, motivacao: string} [] = [
        {nome: 'Clareamento de Pele', date: '01/01/2023', valor: 'R$ 1.800,00', satisfacao: 4, motivacao: 'Manchas de Sol'},
        {nome: 'Pelling de Cristal', date: '01/09/2023', valor: 'R$ 800,00', satisfacao: 2, motivacao: 'Acnes e espinhas'}
    ];
    visible: boolean = false;
    tiposProcedimentos: Procedimento[] | undefined = [
        {name: 'Botox'},
        {name: 'Clareamento de Pele'},
        {name: 'Pelling de Cristal'},
    ];
    selectedCity: Procedimento;
    procedimentosSelecionados: Procedimento [];
    satisfacao!: number;

    incluir() {
        this.visible = true;
    }
}
