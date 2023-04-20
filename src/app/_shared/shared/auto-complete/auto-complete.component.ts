import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormaPagamentoModel} from "../../../_model/forma-pagamento.model";


@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent {

    @Input() service: any | undefined
    @Output() dataSelected = new EventEmitter<any>();

    selectedEntity: any[] = [];
    filteredEntity: any[] = [];
    data: any[] = [];

    constructor() {
    }

    ngOnInit() {
        this.service.loadAutoCompleteData().subscribe((value: { content: FormaPagamentoModel[]; }) => {
            this.data = value.content;
        });
    }


    filterData(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.data.length; i++) {
            const data = this.data[i];
            if (data.nome.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(data);
            }
        }
        this.filteredEntity = filtered;
    }

    selectItem() {
        this.dataSelected.emit(this.selectedEntity)
    }
}
