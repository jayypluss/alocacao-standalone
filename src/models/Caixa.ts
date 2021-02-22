import { Objeto3D } from "./Objeto3D";
import { ItemMatriz } from "./Matriz";
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
        return this.posicao?.x && this.posicao?.y && this.posicao?.z;
    }
}
