import { FileiraCaixas } from './FileiraCaixas';
import { Objeto3D } from './Objeto3D';
import { Matriz } from './Matriz';
import { Caixa } from './Caixa';
import { ItemMatriz } from './Matriz';
import { ParedeCaixas } from './ParedeCaixas';

export class Container extends Objeto3D {
    id: number;
    matriz: Matriz;
    quantidadeCaixasAlocadas: number = 0;
    volumeAlocado: number = 0;
    caixasAlocadas: Caixa[] = [];
    idsCaixasAlocadas: number[] = [];
    paredes: ParedeCaixas[] = [];
    ultimaCaixaAlocada: Caixa;

    constructor(id: number, comprimentoX: number, alturaY: number, larguraZ: number) {
        super(id, comprimentoX, alturaY, larguraZ);
    }

    alocar(caixa: Caixa): Caixa {
        let caixaAlocada: Caixa;
        if (this.paredes.length < 1) {
            this.paredes.push(new ParedeCaixas(0, this, 0));
        } 
        
        if (this.paredes.length > 0) {
            let parede = this.paredes[this.paredes.length-1];
            caixaAlocada = parede.adicionarCaixa(caixa, this, this.paredes.length-1);
        }

        if (!caixaAlocada.isAlocada()) {
            this.paredes.push(new ParedeCaixas(this.paredes.length, this, this.paredes.length));
            let parede = this.paredes[this.paredes.length-1];
            caixaAlocada = parede.adicionarCaixa(caixa, this, this.paredes.length-1);
        }
        
        if (caixaAlocada.isAlocada()) {
            this.quantidadeCaixasAlocadas =+ 1;
            this.volumeAlocado =+ caixa.volume;
            this.caixasAlocadas.push(caixa);
            this.idsCaixasAlocadas.push(caixa.id);
            this.ultimaCaixaAlocada = caixa;
        }

        // TODO
        // this.matriz.adicionar(caixa, x, y, z);
        return caixaAlocada;
    }
}
