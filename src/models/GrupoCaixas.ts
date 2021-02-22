import { Caixa } from "./Caixa";

export class GrupoCaixas {
    id: number;
    caixas: Caixa[] = [];

    constructor(id: number, caixas: Caixa[] = []) {
        this.id = id;
        this.caixas = caixas;
    }

    public criarCaixas(comprimentoX: number, alturaY: number, larguraZ: number, quantidade: number = 0): Caixa[] {
        if (quantidade > 0) {
            for (let index = 0; index < quantidade; index++) {
                this.caixas.push( new Caixa( index, comprimentoX, alturaY, larguraZ ) );
            }
        }
        return this.caixas;
    }

    public calcularBase(): number {
        if (this.caixas.length > 0) {
            return this.caixas[0].comprimentoX * this.caixas[0].larguraZ;
        }        
    }

    public quantidadeCaixas(): number {
        return this.caixas.length;
    }
}