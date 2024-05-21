import { Injectable } from "@angular/core";
import { Dexie, Table } from "dexie";

export interface Coleta {
    id?: number;
    produto: string;
    local: string;
    quantidade: number;
}

@Injectable({
    providedIn: 'root',
})
export class AppDB extends Dexie {
    coletas!: Table<Coleta, number>;

    constructor() {
        super('EstudoIndexedDb');

        this.version(1).stores({
            coletas: '++id'
        });
        //this.coletas = this.table("coletas");
    }
}