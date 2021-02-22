import { Objeto3D } from './Objeto3D';
import { Matriz } from './Matriz';
import { Caixa } from './Caixa';
import { ItemMatriz } from './Matriz';

export class Container extends Objeto3D {
    id: number;
    matriz: Matriz;
    quantidadeCaixasAlocadas: number = 0;
    volumeAlocado: number = 0;
    idsCaixasAlocadas: number[] = [];
    ultimoAlocado: ItemMatriz;

    constructor(id: number, comprimentoX: number, alturaY: number, larguraZ: number) {
        super(id, comprimentoX, alturaY, larguraZ);
    }

    alocar(caixa: Caixa, x: number, y: number, z: number) {
        // this.ultimoAlocado = ItemMatriz;
        caixa.posicao = new ItemMatriz(x, y, z);
        // this.matriz.x = posicao;
        return caixa;
        throw new Error("Method not implemented.");
    }
}
