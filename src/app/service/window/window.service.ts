import {Injectable} from '@angular/core';
import {EventModel} from "../../model/event/event-model";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WindowService {

    private eventModel: EventModel
    private aux = false;

    constructor() {
    }

    public getEventModel(): Observable<any> {
        return of(this.eventModel)
    }

    public setEventModel(event: EventModel) {
        this.eventModel = event
        this.aux = true
    }

    isRecebeuEvento(): Observable<any> {
        console.log(`Is receber o evento: ${this.aux}`)
        return of(this.aux)
    }
}
