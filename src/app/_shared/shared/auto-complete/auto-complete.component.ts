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
    @Output() unselected = new EventEmitter<any>();
    @Output() clear = new EventEmitter<any>();
    @Input() class: string = '';

    selectedEntity: any[] = [];
    filteredEntity: any[] = [];
    data: any[] = [];

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
            if (data.nome.toLowerCase().indexOf(query.toLowerCase()) == 0) {
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

    unselectHandler(event: any) {
        this.unselected.emit(event)
    }

    clearHandler($event: any) {
        this.clear.emit($event)
    }
}
