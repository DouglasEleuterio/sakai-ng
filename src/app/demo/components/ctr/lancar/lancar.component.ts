import {Component, OnInit} from '@angular/core';
import {TransportadoraService} from "../../../../service/transportadora.service";
import {VeiculoService} from "../../../../service/veiculo.service";
import {MotoristaService} from "../../../../service/motorista.service";
import {TipoDescarteService} from "../../../../service/tipo-descarte.service";
import {FormaPagamentoService} from "../../../../service/forma-pagamento.service";
import {InstituicaoBancariaService} from "../../../../service/instituicao-bancaria.service";
import {CtrService} from "../../../../service/ctr.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

function instanciarPagamentoVazio() {
    return {
        id: '',
        ativo: true,
        dataPagamento: new Date(),
        valor: 0,
        formaPagamento: {id: '', nome: ''},
        instituicaoBancaria: {id: '', nome: '', agencia: '', conta: ''},
        item: 0
    }
}

function instanciarCTR() {
    return {
        id: '',
        numero: 0,
        geracao: new Date(),
        transportador: {id: '', nome: ''},
        veiculo: {id: '', nome: ''},
        motorista: {id: '', nome: ''},
        tipoDescartes: [{id: '', nome: '', quantidade: 0, valor: 0}],
        pagamentos: []
    }
}

@Component({
    selector: 'app-lancar',
    templateUrl: './lancar.component.html',
    styleUrls: ['./lancar.component.scss']
})
export class LancarComponent implements OnInit{

    tipoDescarteSelecionado = {id: '', nome: '', quantidade: 0, valor: 0}
    quantidadeDescarte = 1
    valorTotal: number = 0;
    pagamento = instanciarPagamentoVazio()

    ctr = instanciarCTR()
    pagamentosTotais: number = 0

    constructor(public transportadoraService: TransportadoraService,
                public veiculoService: VeiculoService,
                public motoristaService: MotoristaService,
                public tipoDescarteService: TipoDescarteService,
                public formaPagamentoService: FormaPagamentoService,
                public instituicaoBancariaService: InstituicaoBancariaService,
                private ctrService: CtrService,
                private messageService: MessageService,
                private router: Router) {
        this.ctr.tipoDescartes.splice(0, 1)
    }

    ngOnInit(): void {
    }

    onTransportadorSelecionado($event: { id: string, nome: string }) {
        this.ctr.transportador.id = $event.id
    }

    onVeiculoSelecionado($event: { id: string, placa: string }) {
        this.ctr.veiculo.id = $event.id
    }

    onMotoristaSelecionado($event: { id: string, nome: string }) {
        this.ctr.motorista.id = $event.id
    }

    onTipoDescarteSelecionado($event: { id: string, nome: string, quantidade: number, valor: number }) {
        this.tipoDescarteSelecionado = $event
    }

    adicionarDescarte() {
        for (let i = 0; i < this.quantidadeDescarte; i++) {
            this.ctr.tipoDescartes.push(this.tipoDescarteSelecionado)
            this.valorTotal += this.tipoDescarteSelecionado.valor
        }
        this.quantidadeDescarte = 1
    }

    removerItemDescarte($event: any) {
        const index = this.ctr.tipoDescartes.indexOf($event, 0);
        if (index > -1) {
            this.valorTotal -= $event.valor
            this.ctr.tipoDescartes.splice(index, 1);
        }
    }

    onFormaPagamentoSelecionado($event: any) {
        this.pagamento.formaPagamento = $event
    }

    onInstituicaoBancariaSelecionado($event: any) {
        this.pagamento.instituicaoBancaria = $event
    }

    adicionarPagamento() {
        this.pagamento.item = this.ctr.pagamentos.length + 1
        // @ts-ignore
        this.ctr.pagamentos.push({...this.pagamento})
        this.pagamento.valor = 0
        this.pagamento.dataPagamento = new Date()
        // @ts-ignore
        this.pagamentosTotais = this.ctr.pagamentos.map(pgto => pgto.valor).reduce(function (a, b) {
            return a + b
        })
    }

    removerPagamento($event: any) {
        // @ts-ignore
        const index = this.ctr.pagamentos.findIndex((x) => x.item === $event.item)
        if (index > -1) {
            this.ctr.pagamentos.splice(index, 1);
        }
        // @ts-ignore
        this.pagamentosTotais = this.ctr.pagamentos.map(pgto => pgto.valor).reduce(function (a, b) {
            return b - a
        })
    }

    submit() {
        this.ctrService.salvarCTR(this.ctr).subscribe(data => {
            this.messageService.add({
                key: 'tst',
                severity: 'success',
                summary: ' Sucesso',
                detail: 'CTR Nº ' + this.ctr.numero + ' cadastrado com Sucesso!',
                life: 7000
            });
            this.limpar()
        }, error => {
            this.messageService.add({key: 'tst', severity: 'error', summary: 'Error', detail: error.message ?  error.message: error , life: 10000});
        })
    }

    limpar() {
        this.ctr.numero = 0
        this.ctr.geracao = new Date()
    }
}
