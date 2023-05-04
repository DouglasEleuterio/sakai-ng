import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent {

    @Input() service: any | undefined
    @Output() dataSelected = new EventEmitter<any>();
    @Input() multiple: boolean = false
    @Input() required: boolean = false
    @Input() disabled: boolean = false
    @Output() unselected = new EventEmitter<any>();
    @Output() clear = new EventEmitter<any>();
    @Input() class: string = ''

    selectedEntity: any[] = [];
    filteredEntity: any[] = [];
    data: any[] = [];
    field: any = 'nome';

    constructor() {
    }

    ngOnInit() {
        this.service.loadAutoCompleteData().subscribe((value: any[]) => {
            this.data = value;
            this.filterData({query: ''})
        });
    }


    filterData(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.data.length; i++) {
            const data = this.data[i];
            if (data.nome && data.nome.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                this.field = 'nome'
                filtered.push(data);
            }
            else if (data.placa && data.placa.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                this.field = 'placa'
                filtered.push(data);
            }
        }
        this.filteredEntity = filtered;
    }

    selectItem() {
        this.dataSelected.emit(this.selectedEntity)
    }

    isMultiple() {
        return this.multiple;
    }

    isRequired() {
        return this.required;
    }

    isDisabled() {
        return this.disabled;
    }

    unselectHandler(event: any) {
        this.unselected.emit(event)
    }

    clearHandler($event: any) {
        this.clear.emit($event)
    }
}
