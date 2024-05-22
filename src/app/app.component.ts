import { Component, OnInit, VERSION, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColetaService } from './coleta.service';
import { Coleta } from './coleta';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'IndexedDbExemplo';
    coletas: Coleta[] = [];
    filtro = "";
    produto = "";
    local = "";
    quantidade = 0;
    coletaService = inject(ColetaService);

    constructor() {
    }
    
    async ngOnInit()  {
        await this.atualizarColetas();
    }

    private async atualizarColetas() {
        this.coletas = await this.coletaService.obterColetas();
    }
    
    async adicionar() {
        await this.coletaService.adicionarColeta({produto: this.produto, local: this.local, quantidade: this.quantidade})
        await this.atualizarColetas();
    }

    async excluir(coleta: Coleta) {
        await this.coletaService.excluirColeta(coleta.id!);
        await this.atualizarColetas();
    }

    async filtrar() {
        this.coletas = await this.coletaService.filtrarColetas(this.filtro);
    }

    async limparBanco() {
        await this.coletaService.limparColetas();
    }
}
