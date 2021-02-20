// interface Objeto3D {
//     larguraZ: number,
//     comprimentoX: number,
//     alturaY: number,
//     quantidade: number
// }

class Objeto3D {
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

const MEDIDA_MINIMA_POR_CAIXA = 10;

class Container extends Objeto3D {
    quantidadeCaixasAlocadas: number = 0;
    matrizPosicoes: any[][][] = [];
    constructor(larguraZ: number, comprimentoX: number, alturaY: number, quantidade: number) {
        super(larguraZ, comprimentoX, alturaY, quantidade);

        for(var i: number = 0; i < MEDIDA_MINIMA_POR_CAIXA; i++) {
            this.matrizPosicoes[i] = [];
            for(var j: number = 0; j < MEDIDA_MINIMA_POR_CAIXA; j++) {
                this.matrizPosicoes[i][j] = [];
                for(var k: number = 0; k < MEDIDA_MINIMA_POR_CAIXA; k++) {
                    this.matrizPosicoes[i][j][k] = 0;
                }
            }
        }
    }
}

class Caixas extends Objeto3D {
    idTipoCaixa: number;
    constructor(idTipoCaixa: number, larguraZ: number, comprimentoX: number, alturaY: number, quantidade: number) {
        super(larguraZ, comprimentoX, alturaY, quantidade);
        this.idTipoCaixa = idTipoCaixa;
    }
}

const container = new Container(
    200, // largura
    400, // comprimento
    150, // altura
    1 // quantidade
);

const caixas1 = new Caixas(
    1, //idTipoCaixa
    80, // largura
    45, // comprimento
    25, // altura
    15 // quantidade
);

const caixas2 = new Caixas(
    2, //idTipoCaixa
    60, // largura
    70, // comprimento
    32, // altura
    20 // quantidade
);

const caixas3 = new Caixas(
    3, // idTipoCaixa
    20, // largura
    60, // comprimento
    41, // altura
    15 // quantidade
);


// functions

const testarMenorSobraComprimento = (container: Container, todasCaixas: Caixas[]): [number, number, number, number] => {
    var indiceTipoCaixa: number;
    var cabeMaiorQuantidade: number;
    var sobraMenosEspaco: number;
    var maiorQuantidade = 0;
    var menorSobra = 9999999;

    todasCaixas.forEach(tipoCaixa => {
        var quantidade = Math.floor(container.comprimentoX/tipoCaixa.comprimentoX);
        var sobra = container.comprimentoX % tipoCaixa.comprimentoX;
        console.log('tipoCaixa.idTipoCaixa: ', tipoCaixa.idTipoCaixa, ' - quantidade: ', quantidade);
        console.log('tipoCaixa.idTipoCaixa: ', tipoCaixa.idTipoCaixa, ' - sobra: ', sobra);
        console.log('');
        if (tipoCaixa.quantidade >= quantidade) {
            if (quantidade > maiorQuantidade) {
                maiorQuantidade = quantidade;
                cabeMaiorQuantidade = tipoCaixa.idTipoCaixa;
            }
            if (sobra < menorSobra) {
                sobraMenosEspaco = tipoCaixa.idTipoCaixa;
                menorSobra = sobra;
            }
        }
    });

    // for (indiceTipoCaixa = 0; indiceTipoCaixa < todasCaixas.length; indiceTipoCaixa++) {
    //     var quantidade = Math.floor(container.comprimentoX/todasCaixas[indiceTipoCaixa].comprimentoX);
    //     var sobra = container.comprimentoX % todasCaixas[indiceTipoCaixa].comprimentoX;
    //     console.log('indiceTipoCaixa: ', indiceTipoCaixa, ' - quantidade: ', quantidade);
    //     console.log('indiceTipoCaixa: ', indiceTipoCaixa, ' - sobra: ', sobra);
    //     console.log('');
    //     if (todasCaixas[indiceTipoCaixa].quantidade >= quantidade) {
    //         if (quantidade > maiorQuantidade) {
    //             maiorQuantidade = quantidade;
    //             cabeMaiorQuantidade = indiceTipoCaixa;
    //         }
    //         if (sobra < menorSobra) {
    //             sobraMenosEspaco = indiceTipoCaixa;
    //             menorSobra = sobra;
    //         }
    //     }
    // }
    // console.log('cabeMaiorQuantidade: ', cabeMaiorQuantidade);
    // console.log('sobraMenosEspaco: ', sobraMenosEspaco);
    // console.log('maiorQuantidade: ', maiorQuantidade);
    // console.log('menorSobra: ', menorSobra);

    return [cabeMaiorQuantidade, sobraMenosEspaco, maiorQuantidade, menorSobra];
};



const preencherComprimentoX = (container: Container, caixas: Caixas, posicaoZ: number, posicaoY: number): Container => {
    var comprimentoTotalUtil = container.comprimentoX;
    var containerOcupado: Container = { ...container } as Container;
    var primeiraDeducao = true;

    console.log('--------- INICIANDO ALOCAÇÃO ---------');
    console.log('posicaoZ: ', posicaoZ, ' - posicaoY: ', posicaoY);
    console.log('--------------------------------------');

    for (var ocupado = 0; (ocupado <= comprimentoTotalUtil) && (caixas.quantidade > 0); ) {
        console.log();
        console.log('------------------------------------------------');
        console.log();
        console.log("containerOcupado.comprimentoX: ", containerOcupado.comprimentoX);
        console.log("containerOcupado.alturaY: ", containerOcupado.alturaY);
        console.log("containerOcupado.larguraZ: ", containerOcupado.larguraZ);
        console.log("containerOcupado.quantidadeCaixasAlocadas: ", containerOcupado.quantidadeCaixasAlocadas);
        console.log();
        console.log('--------> quantidadeCaixasAlocadas: %s <-------', containerOcupado.quantidadeCaixasAlocadas);
        console.log('--------> Caixas.quantidade: %s <-------', caixas.quantidade);
        console.log();
        var espacoSobrando = comprimentoTotalUtil - ocupado;
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
            containerOcupado.quantidadeCaixasAlocadas += 1;
            containerOcupado.matrizPosicoes[containerOcupado.quantidadeCaixasAlocadas][posicaoY][posicaoZ] = caixas.idTipoCaixa;
        } else {
            break;
        }
    }
    
    return containerOcupado;
};


const empilharNoComprimento = (container: Container, caixas: Caixas, posicao: number) => {
    return;
}


const volumeCaixas = (caixas: Caixas[]) => {
    let volumeTotal: number = 0;
    caixas.forEach(element => {
        volumeTotal += element.alturaY * element.alturaY * element.larguraZ * element.quantidade;
    });
    return volumeTotal;
};


const centimetrosParaMetros = (volumeEmCentimetros: number) => {
    return (volumeEmCentimetros/100).toFixed(2);
};


const cabeAlgumaCaixaNoComprimentoX = (container: Container, todasCaixas: Caixas[], posicao: number) => {
    for (let index = 0; index < todasCaixas.length; index++) {
        if (todasCaixas[index].quantidade > 0) {
            if (todasCaixas[index].comprimentoX <= container.comprimentoX) {
                return index;
            }
        }         
    }
};

const cabeAlgumaCaixaNaLarguraZ = (container: Container, todasCaixas: Caixas[]) => {
    for (let index = 0; index < todasCaixas.length; index++) {
        if (todasCaixas[index].larguraZ > 0) {
            if (todasCaixas[index].larguraZ <= container.larguraZ) {
                return index;
            }
        }         
    }
};


const cabeAlgumaCaixaNaAlturaY = (container: Container, todasCaixas: Caixas[]) => {
    for (let index = 0; index < todasCaixas.length; index++) {
        if (todasCaixas[index].alturaY > 0) {
            if (todasCaixas[index].alturaY <= container.alturaY) {
                return index;
            }
        }         
    }
};


const cabeQuantasCaixasNoComprimento = (container: Container, todasCaixas: Caixas[]) => {
    for (let index = 0; index < todasCaixas.length; index++) {
        if (todasCaixas[index].quantidade > 0) {
            if (todasCaixas[index].comprimentoX <= container.comprimentoX) {
                return index;
            }
        }         
    }
};


// routines

console.log("Dados iniciais do Container: ", container);
console.log();


var todasCaixas: Caixas[] = [caixas1, caixas2, caixas3];


const encaixe = testarMenorSobraComprimento(container, todasCaixas);
var cabeMaiorQuantidade = encaixe[0];
var sobraMenosEspaco = encaixe[1];
var maiorQuantidade = encaixe[2];
var menorSobra = encaixe[3];


console.log('Índice caixas - após alocar cabe maior quantidade no (comprimento) ', cabeMaiorQuantidade);
console.log('Maior quantidade que cabe do tipo de caixa (comprimento): ', maiorQuantidade);
console.log('');

console.log('Índice caixas - após alocar sobra menos espaço no (comprimento): ', sobraMenosEspaco);
console.log('Menor sobra do tipo de caixa (comprimento): ', menorSobra);
console.log('');


var volumeTotalCaixas = volumeCaixas(todasCaixas);
console.log('Volume total das Caixas: ', volumeTotalCaixas, 'cm');
console.log('Volume total das Caixas: ', centimetrosParaMetros(volumeTotalCaixas), 'm');
console.log();

var containerOcupado = preencherComprimentoX(container, todasCaixas[sobraMenosEspaco], 0, 0);
console.log();
console.log("containerOcupado pós interações: ");
console.log("containerOcupado.comprimentoX: ", containerOcupado.comprimentoX);
console.log("containerOcupado.alturaY: ", containerOcupado.alturaY);
console.log("containerOcupado.larguraZ: ", containerOcupado.larguraZ);
console.log("containerOcupado.quantidadeCaixasAlocadas: ", containerOcupado.quantidadeCaixasAlocadas);
console.log("caixas1.quantidade: ", caixas1.quantidade);
console.log();

var tipoDeCaixaQueCabeNoComprimento = cabeAlgumaCaixaNoComprimentoX(containerOcupado, todasCaixas, 0);
console.log("Índice do tipo de caixa que cabe mais no comprimento do container: ", tipoDeCaixaQueCabeNoComprimento);
console.log('');

var sobrandoComprimentoX = container.comprimentoX - containerOcupado.comprimentoX;
console.log("Comprimento (X) sobrando no Container: ", sobrandoComprimentoX);


var sobrandoLarguraZ = container.larguraZ - containerOcupado.larguraZ;
console.log("Largura (Z) sobrando no Container: ", sobrandoLarguraZ);


var sobrandoAlturaY = container.alturaY - containerOcupado.alturaY;
console.log("Altura (Y) sobrando no Container: ", sobrandoAlturaY);
console.log();
