import {Component} from '@angular/core';

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
}
