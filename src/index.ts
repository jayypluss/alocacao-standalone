interface Objeto3D {
    larguraZ: number,
    comprimentoX: number,
    alturaY: number,
    quantidade: number
}

class Container implements Objeto3D {
    larguraZ: number;
    comprimentoX: number;
    alturaY: number;
    quantidade: number;
    constructor(larguraZ: number, comprimentoX: number, alturaY: number, quantidade: number) {
        this.larguraZ = larguraZ;
        this.comprimentoX = comprimentoX;
        this.alturaY = alturaY;
        this.quantidade = quantidade;
    }
}

class Caixas implements Objeto3D {
    larguraZ: number;
    comprimentoX: number;
    alturaY: number;
    quantidade: number;
    constructor(larguraZ: number, comprimentoX: number, alturaY: number, quantidade: number) {
        this.larguraZ = larguraZ;
        this.comprimentoX = comprimentoX;
        this.alturaY = alturaY;
        this.quantidade = quantidade;
    }
}

const container = new Container(
    200, // largura
    400, // comprimento
    150, // altura
    1 // quantidade
);

const caixas1 = new Caixas(
    80, // largura
    45, // comprimento
    25, // altura
    15 // quantidade
);

const caixas2 = new Caixas(
    60, // largura
    70, // comprimento
    32, // altura
    20 // quantidade
);

const caixas3 = new Caixas(
    20, // largura
    60, // comprimento
    41, // altura
    15 // quantidade
);

let todasCaixas: Caixas[] = [caixas1, caixas2, caixas3];


const testarMenorSobraComprimento = (container: Container, todasCaixas: Caixas[]): [number, number, number, number] => {
    let indiceTipoCaixa: number;
    let cabeMaiorQuantidade: number;
    let sobraMenosEspaco: number;
    let maiorQuantidade = 0;
    let menorSobra = 9999999;

    for (indiceTipoCaixa = 0; indiceTipoCaixa < todasCaixas.length; indiceTipoCaixa++) {
        let quantidade = Math.floor(container.comprimentoX/todasCaixas[indiceTipoCaixa].comprimentoX);
        let sobra = container.comprimentoX % todasCaixas[indiceTipoCaixa].comprimentoX;
        console.log('indiceTipoCaixa: ', indiceTipoCaixa, ' - quantidade: ', quantidade);
        console.log('indiceTipoCaixa: ', indiceTipoCaixa, ' - sobra: ', sobra);
        console.log('');
        if (todasCaixas[indiceTipoCaixa].quantidade >= quantidade) {
            if (quantidade > maiorQuantidade) {
                maiorQuantidade = quantidade;
                cabeMaiorQuantidade = indiceTipoCaixa;
            }
            if (sobra < menorSobra) {
                sobraMenosEspaco = indiceTipoCaixa;
                menorSobra = sobra;
            }
        }
    }
    // console.log('cabeMaiorQuantidade: ', cabeMaiorQuantidade);
    // console.log('sobraMenosEspaco: ', sobraMenosEspaco);
    // console.log('maiorQuantidade: ', maiorQuantidade);
    // console.log('menorSobra: ', menorSobra);

    return [cabeMaiorQuantidade, sobraMenosEspaco, maiorQuantidade, menorSobra];
};



const encaixe = testarMenorSobraComprimento(container, todasCaixas);
let cabeMaiorQuantidade = encaixe[0];
let sobraMenosEspaco = encaixe[1];
let maiorQuantidade = encaixe[2];
let menorSobra = encaixe[3];

console.log('cabeMaiorQuantidade: ', cabeMaiorQuantidade);
console.log('sobraMenosEspaco: ', sobraMenosEspaco);
console.log('maiorQuantidade: ', maiorQuantidade);
console.log('menorSobra: ', menorSobra);
console.log('');




const preencherComprimentoX = (container: Container, caixas: Caixas): Container => {
    let comprimentoTotalUtil = container.comprimentoX;
    let containerOcupado: Container = { ...container } as Container;
    let primeiraDeducao = true;

    for (let ocupado = 0; (ocupado <= comprimentoTotalUtil) && (caixas.quantidade > 0); ) {
        console.log('containerOcupado interação: ', containerOcupado, '. Caixas.quantidade: ', caixas.quantidade);
        let espacoSobrando = comprimentoTotalUtil - ocupado;
        if ((espacoSobrando > 0) 
            && !(espacoSobrando <= caixas.comprimentoX)) {

            containerOcupado.comprimentoX -= caixas.comprimentoX;
            if (primeiraDeducao) {
                if (containerOcupado.alturaY - caixas.alturaY >= 0 
                    && containerOcupado.larguraZ - caixas.larguraZ >= 0) {
                        
                        containerOcupado.alturaY -= caixas.alturaY;
                        containerOcupado.larguraZ -= caixas.larguraZ;
                        primeiraDeducao = false;
                } else {
                    break;
                }
            }
            espacoSobrando -= caixas.comprimentoX;
            ocupado += caixas.comprimentoX
            caixas.quantidade -= 1;
        } else {
            break;
        }
    }
    return containerOcupado;
};



let containerOcupado = preencherComprimentoX(container, todasCaixas[sobraMenosEspaco]);
console.log();
console.log("containerOcupado pós interações: ", containerOcupado, "caixas1.quantidade: ", caixas1.quantidade);
console.log();

let sobrandoComprimentoX = container.comprimentoX - containerOcupado.comprimentoX;
console.log("sobrandoComprimentoX: ", sobrandoComprimentoX);

let sobrandoLarguraZ = container.larguraZ - containerOcupado.larguraZ;
console.log("sobrandoLarguraZ: ", sobrandoLarguraZ);

let sobrandoAlturaY = container.alturaY - containerOcupado.alturaY;
console.log("sobrandoAlturaY: ", sobrandoAlturaY);
console.log();

console.log("container total: ", container);




const preencherContainer = (container: Container, caixas: Caixas) => {
    let espacoRestanteComprimentoX, espacoRestanteLarguraZ, espacoRestanteAlturaY: number;

    // preencherComprimentoX();


    return [espacoRestanteComprimentoX, espacoRestanteLarguraZ, espacoRestanteAlturaY];
}

