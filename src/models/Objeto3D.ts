export class Objeto3D {
    id: number;
    larguraZ: number;
    comprimentoX: number;
    alturaY: number;

    constructor(id: number, comprimentoX: number, alturaY: number, larguraZ: number) {
        this.id = id;
        this.comprimentoX = comprimentoX;
        this.alturaY = alturaY;
        this.larguraZ = larguraZ;
    }
}
