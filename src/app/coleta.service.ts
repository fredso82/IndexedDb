import { Injectable, inject } from "@angular/core";
import { AppDB } from "./db";
import { Coleta } from "./coleta";

@Injectable({
    providedIn: "root"
})
export class ColetaService {
    private db = inject(AppDB);

    async adicionarColeta(coleta: Coleta) {
        await this.db.coletas.add(coleta);
    }

    async adicionarColetas(coletas: Coleta[]) {
        await this.db.coletas.bulkAdd(coletas);
    }

    async obterColetas() {
       return await this.db.coletas.toArray();
    }

    async filtrarColetas(filtro: string) {
        return await this.db.coletas.filter((c) => c.produto.includes(filtro)).toArray();
    }

    async excluirColeta(id: number) {
        await this.db.coletas.delete(id);
    }

    async limparColetas() {
        await this.db.coletas.clear();
    }
}