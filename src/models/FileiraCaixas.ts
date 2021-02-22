import { Objeto3D } from "./Objeto3D";

export class FileiraCaixas extends Objeto3D {
    id: number;
    caixas: Caixa[] = [];

    constructor(id: number, caixas: Caixa[] = [], larguraZ: number = 0, comprimentoX: number = 0, alturaY: number = 0) {
        super(larguraZ, comprimentoX, alturaY);
        this.id = id;
        this.caixas = caixas;
    }
}

export class Caixa extends Objeto3D {
    id: number;
    constructor(larguraZ: number, comprimentoX: number, alturaY: number) {
        super(larguraZ, comprimentoX, alturaY);
    }
}
