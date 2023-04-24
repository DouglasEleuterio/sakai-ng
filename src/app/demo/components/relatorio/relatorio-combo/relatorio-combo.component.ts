import { Component } from '@angular/core';
import {RelatorioService} from "../../../../service/relatorio.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-relatorio-combo',
  templateUrl: './relatorio-combo.component.html',
  styleUrls: ['./relatorio-combo.component.scss'],
    providers:[MessageService]
})
export class RelatorioComboComponent {

    loading: boolean = false;


    constructor(private relatorioService: RelatorioService,
                private messageService: MessageService) {
    }

    gerarRelatorio() {
        this.loading = true
        this.relatorioService.gerarRelatorioCombo().subscribe((value) => {
            let fileName = `relatorio-saldo_combo-${new Date().toLocaleString('pt-BR', { timeZone: 'UTC' })}`
            let blob: Blob = value.body as Blob
            let a = document.createElement('a')
            // @ts-ignore
            a.download = fileName
            a.href = window.URL.createObjectURL(blob)
            a.click()
            this.loading = false
        }, error => {
            this.loading = false
            this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error, life: 10000 });
        })
    }
}
