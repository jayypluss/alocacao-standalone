import { Objeto3D } from './Objeto3D';
import { Matriz } from './Matriz';
import { Caixa } from './Caixa';
import { ItemMatriz } from './Matriz';

export class Container extends Objeto3D {
    id: number;
    matriz: Matriz;
    quantidadeCaixasAlocadas: number = 0;
    volumeAlocado: number = 0;
    caixasAlocadas: Caixa[] = [];
    idsCaixasAlocadas: number[] = [];
    ultimaCaixaAlocada: Caixa;

    constructor(id: number, comprimentoX: number, alturaY: number, larguraZ: number) {
        super(id, comprimentoX, alturaY, larguraZ);
    }

    alocar(caixa: Caixa, x: number, y: number, z: number): Caixa {
        caixa.posicao = new ItemMatriz(x, y, z);
        this.quantidadeCaixasAlocadas =+ 1;
        this.volumeAlocado =+ caixa.volume;
        this.caixasAlocadas.push(caixa);
        this.idsCaixasAlocadas.push(caixa.id);
        this.ultimaCaixaAlocada = caixa;
        this.matriz.adicionar(caixa, x, y, z);
        return caixa;
        throw new Error("Method not implemented.");
    }
}
