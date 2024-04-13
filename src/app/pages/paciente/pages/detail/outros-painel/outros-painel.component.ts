import {Component, ViewChild} from '@angular/core';
import {Editor, EditorTextChangeEvent} from "primeng/editor";
import {EditorService} from "../../../../../service/editor.service";


@Component({
  selector: 'app-outros-painel',
  templateUrl: './outros-painel.component.html',
  styleUrl: './outros-painel.component.scss'
})
export class OutrosPainelComponent {

    @ViewChild('editor') editorComponent: Editor;

    constructor(public editorService: EditorService) {
    }

    onTextChange($event: EditorTextChangeEvent) {
        this.editorService.cancelarEnvio();
        this.editorService.text = $event.textValue
        this.editorService.htmlValue = $event.htmlValue
        this.editorService.enviarParaAPI().then()
    }
}
