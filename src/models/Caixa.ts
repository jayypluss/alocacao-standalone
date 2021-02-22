import { Objeto3D } from "./Objeto3D";
import { ItemMatriz } from "./Matriz";

export class Caixa extends Objeto3D {
    id: number;
    volume: number;
    posicao: ItemMatriz;

    constructor(id: number, comprimentoX: number, alturaY: number, larguraZ: number) {
        super(id, comprimentoX, alturaY, larguraZ);
        this.volume = (comprimentoX * alturaY * larguraZ);
    }
}
