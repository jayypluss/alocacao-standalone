import { Objeto3D } from "./Objeto3D";
import { ItemMatriz } from "./ItemMatriz";
import { Container } from "./Container";

export class Caixa extends Objeto3D {
    id: number;
    volume: number;
    posicao: ItemMatriz;
    container: Container;

    constructor(id: number, comprimentoX: number, alturaY: number, larguraZ: number) {
        super(id, comprimentoX, alturaY, larguraZ);
        this.volume = (comprimentoX * alturaY * larguraZ);
    }

    atribuirPosicao(x: number, y: number, z: number) {
        this.posicao = new ItemMatriz(x, y, z);
    }

    isAlocada() {
        if (this.posicao?.x >= 0) return true;
        if (this.posicao?.y >= 0) return true;
        if (this.posicao?.z >= 0) return true;
        else return false;
    }
}
