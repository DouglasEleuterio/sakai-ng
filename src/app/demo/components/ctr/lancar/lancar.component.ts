import { Component } from '@angular/core';

@Component({
  selector: 'app-lancar',
  templateUrl: './lancar.component.html',
  styleUrls: ['./lancar.component.scss']
})
export class LancarComponent {

    ctr: { id: string; numero: number; data: Date}


    constructor() {
        this.ctr = {id: '', numero: 0, data: new Date()};
    }

    getDataAgora() {
        return new Date();
    }
}
