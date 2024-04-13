import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

    public text: string;
    public htmlValue: string;
    public timer = 5000;

  constructor() {
      this.text = this.valorObitidoAPI()
  }

    private valorObitidoAPI() {
        return 'Valor inserido am sessões anteriores.'
    }

    salvar() {
        console.log('Estou enviando o texto abaixo para a API')
        console.log(this.text)
    }

    enviarParaAPI(): Promise<void> {
      return new Promise<void>(() => {
          this.timer = setTimeout(() => {
            this.salvar()
          }, 500)
      })
    }

    public cancelarEnvio() {
        clearTimeout(this.timer)
    }
}
