import { Component, OnInit, VERSION, inject } from '@angular/core';
import { AppDB, Coleta } from '../db';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    produto = "";
    local = "";
    quantidade = 0;

    db = inject(AppDB);

    constructor() {
    }
    async ngOnInit()  {
        //this.coletas = await this.db.coletas.toArray();
        // await this.db.coletas.add({
        //     produto: "produto 1",
        //     local: "NO",
        //     quantidade: 10
        // });
        
        this.coletas = await this.db.coletas.toArray();
        console.log(this.coletas);
    }
    
    async adicionar() {
        await this.db.coletas.add({produto: this.produto, local: this.local, quantidade: this.quantidade}); 

        this.coletas = await this.db.coletas.toArray();
        console.log(this.coletas);
    }
}
