import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PagamentosService} from "../../../../service/pagamentos.service";
import {HttpParams} from "@angular/common/http";
import {Table} from "primeng/table";

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit{

    sortField: string
    sortDirection: string
    paginatorSize: string
    pagamentos: any [] = []
    loading: boolean = true;
    @ViewChild('filter') filter!: ElementRef;
    loaging: boolean = true

    constructor(private service: PagamentosService) {
        this.sortField = 'dataPagamento'
        this.sortDirection = 'desc'
        this.paginatorSize = '10'
    }
    //sort=dataPagamento,desc&page=0&size=10&search=ativo!=null;dataPagamento=ge=2020-04-01

    ngOnInit(): void {
        let params = new HttpParams();
        params = params.append('sort',`${this.sortField},${this.sortDirection}`)
        params = params.append('size',this.paginatorSize)
        params = params.append('search','ativo!=null;dataPagamento=ge=2023-04-01')
        // params = params.append('','')
        this.service.getAll(params).subscribe(value => {
            this.pagamentos = value.content
            this.loaging = false
        })
    }
}
