import { Caixa } from "./models/Caixa";
import { Container } from "./models/Container";
import { GrupoCaixas } from "./models/GrupoCaixas";

export class Alocador {
    container: Container;
    gruposCaixas: GrupoCaixas[] = [];
    totalDeCaixasParaAlocar: number;

    constructor(container: Container, gruposCaixas: GrupoCaixas[]) {
        this.container = container;
        this.gruposCaixas = gruposCaixas;
    }

    public alocarTodas(gruposCaixas: GrupoCaixas[], container: Container) {
        this.gruposCaixas = this.organizarPorMaiorBase(gruposCaixas);
        this.totalDeCaixasParaAlocar = this.obterTotalDeCaixas(gruposCaixas);
        let ultimaCaixaAlocada: Caixa = null;

        // for (let index = 0; index < this.totalDeCaixasParaAlocar; index++) {
        // }

        // TODO
        // use ultimaCaixaAlocada

        gruposCaixas.forEach(grupo => {
            ultimaCaixaAlocada = this.alocarGrupo(grupo, container, ultimaCaixaAlocada);
        });

        return container;

        // let grupoDeMaiorBase = this.obterGrupoDeMaiorBase(gruposCaixas);
        // let grupoDeMaiorComprimento = this.grupoDeMaiorComprimento(gruposCaixas);
    }

    private organizarPorMaiorBase(gruposCaixas: GrupoCaixas[]) {
        var compararBase = function (grupoCaixas1: GrupoCaixas, grupoCaixas2: GrupoCaixas) {  
            if (grupoCaixas1.calcularBase() > grupoCaixas2.calcularBase()) { return -1; }  
            if (grupoCaixas1.calcularBase() < grupoCaixas2.calcularBase()) {return 1; }  
            return 0;  
        } 
        return gruposCaixas.sort(compararBase);
    }

    private alocarGrupo(grupoCaixas: GrupoCaixas, container: Container, ultimaCaixaAlocada: Caixa): Caixa {
        let maximoIndiceX = this.calcularQuantidadeMaxima(grupoCaixas.caixas[0], 'x');
        let maximoIndiceY = this.calcularQuantidadeMaxima(grupoCaixas.caixas[0], 'y');
        let maximoIndiceZ = this.calcularQuantidadeMaxima(grupoCaixas.caixas[0], 'z');

        let startFromX = ultimaCaixaAlocada?.posicao?.x ? ultimaCaixaAlocada?.posicao?.x : 0;
        let startFromY = ultimaCaixaAlocada?.posicao?.y ? ultimaCaixaAlocada?.posicao?.y : 0;
        let startFromZ = ultimaCaixaAlocada?.posicao?.z ? ultimaCaixaAlocada?.posicao?.z : 0;

        // TODO
        // use ultimaCaixaAlocada

        let quantidadeCaixas = grupoCaixas.quantidadeCaixas()

        for (let index = 0; index < quantidadeCaixas; index++) {

            for (let z = startFromZ; z < maximoIndiceZ && quantidadeCaixas > 0; z++) { 
                for (let y = startFromY; y < maximoIndiceY && quantidadeCaixas > 0; y++) { 
                    for (let x = startFromX; x < maximoIndiceX && quantidadeCaixas > 0; x++) { 
                        ultimaCaixaAlocada = this.alocarCaixa(grupoCaixas.caixas[index], container, x, y, z);
                        quantidadeCaixas -= 1;
                        grupoCaixas.caixas.pop();
                        console.log(`Caixa alocada.
            id: ${grupoCaixas.caixas[index]?.id}
            comprimentoX: ${grupoCaixas.caixas[index]?.comprimentoX}
            alturaY: ${grupoCaixas.caixas[index]?.alturaY}
            larguraZ: ${grupoCaixas.caixas[index]?.larguraZ}
            volume: ${grupoCaixas.caixas[index]?.volume}
                        `);
                    }
                }
            }

        }
        
        return ultimaCaixaAlocada;
    }

    private alocarCaixa(caixa: Caixa, container: Container, x: number, y: number, z: number): Caixa {
        container.quantidadeCaixasAlocadas += 1;
        container.volumeAlocado += caixa.volume;
        container.idsCaixasAlocadas.push(caixa.id);
        caixa = container.alocar(caixa, x, y, z);
        return caixa;
    }

    private calcularQuantidadeMaxima(caixa: Caixa, sentidoFileira: string = 'x'): number {
        if (sentidoFileira == 'x') return Math.floor(this.container.comprimentoX/caixa.comprimentoX);
        if (sentidoFileira == 'y') return Math.floor(this.container.alturaY/caixa.alturaY);
        if (sentidoFileira == 'z') return Math.floor(this.container.larguraZ/caixa.larguraZ);
    }

    private obterTotalDeCaixas(gruposCaixas: GrupoCaixas[]): number {
        let totalCaixas = 0;
        for (let index = 0; index < gruposCaixas.length; index++) {
            totalCaixas += gruposCaixas[index].quantidadeCaixas();
        }
        return totalCaixas;
    }

    
    // private grupoDeMaiorComprimento(gruposCaixas: GrupoCaixas[]): GrupoCaixas {
    //     let maiorComprimento = 0;
    //     let grupoDeMaiorComprimento: GrupoCaixas;
    //     for (let index = 0; index < gruposCaixas.length; index++) {
    //         const caixa = gruposCaixas[index].caixas[0];
    //         if (caixa && caixa.comprimentoX > maiorComprimento) {
    //             maiorComprimento = caixa.comprimentoX;
    //             grupoDeMaiorComprimento = gruposCaixas[index];
    //         }
    //     }
    //     return grupoDeMaiorComprimento;
    // }


    // private obterGrupoDeMaiorBase(gruposCaixas: GrupoCaixas[]): GrupoCaixas {
    //     let maiorBase = 0;
    //     for (let index = 0; index < gruposCaixas.length; index++) {
    //         let base = gruposCaixas[index].calcularBase();
    //         if (base > maiorBase) {
    //             maiorBase = base; 
    //         }
    //         return gruposCaixas[index];
    //     }
    // }


}


