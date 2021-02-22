import { Container } from './Container';
import { Caixa } from "./Caixa";
import { Objeto3D } from "./Objeto3D";

export class FileiraCaixas extends Objeto3D {
    id: number;
    caixas: Caixa[] = [];
    posicaoY: number;
    posicaoZ: number;
    container: Container;

    constructor(id: number, 
                container?: Container, 
                posicaoY?: number,
                posicaoZ?: number,
                caixas: Caixa[] = [], 
                comprimentoX: number = 0, 
                alturaY: number = 0, 
                larguraZ: number = 0) {

        super(id, comprimentoX, alturaY, larguraZ);
        this.id = id;
        this.container = container;
        this.caixas = caixas;
        this.posicaoY = posicaoY;
        this.posicaoZ = posicaoZ;
        this.calcularTamanho();
    }

    atribuirContainer(container: Container) {
        this.container = container;
    }

    atribuirPosicao(y: number, z: number) {
        this.alturaY = y;
        this.larguraZ = z;
    }

    calcularTamanho(): [number, number, number] {
        this.comprimentoX = 0;
        this.alturaY = 0;
        this.larguraZ = 0;
        this.caixas.forEach(caixa => {
            this.comprimentoX += caixa.comprimentoX;
            if (caixa.alturaY > this.alturaY) this.alturaY = caixa.alturaY;
            if (caixa.larguraZ > this.larguraZ) this.larguraZ = caixa.larguraZ;
        });
        return [this.comprimentoX, this.alturaY, this.larguraZ];
    }

    adicionarCaixa(caixa: Caixa, container: Container, fileiraIndex: number, paredeIndex: number): Caixa {
        if (this.cabeCaixa(caixa)) {
            caixa.atribuirPosicao(this.caixas.length, fileiraIndex, paredeIndex);
            caixa.container = container;
            this.caixas.push(caixa);
            this.calcularTamanho();
        }
        return caixa;
    }

    cabeCaixa(caixa: Caixa) {
        let comprimentoLivre = this.obterComprimentoLivreX();
        let alturaLivre = this.obterAlturaLivreY();
        let larguraLivre = this.obterLarguraLivreZ();
        return (comprimentoLivre - caixa.comprimentoX >= 0)
            && (alturaLivre - caixa.alturaY >= 0)
            && (larguraLivre - caixa.larguraZ >= 0)        
            ? true : false;
    }
    
    obterComprimentoLivreX(): number {
        return this.container.comprimentoX - this.comprimentoX;
    }
    
    obterAlturaLivreY(): number {
        return this.container.alturaY - this.alturaY;
    }
    
    obterLarguraLivreZ(): number {
        return this.container.larguraZ - this.larguraZ;
    }
    
}

