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

        let ultimaCaixaAlocada: Caixa = null;

        let caixasListaFlat: Caixa[] = [];

        this.gruposCaixas.forEach(grupo => {
            caixasListaFlat = caixasListaFlat.concat(grupo.caixas);
        });

        console.log('totalCaixa: ', caixasListaFlat.length);

        for (let index = 0; index < caixasListaFlat.length; index++) {
            ultimaCaixaAlocada = this.container.alocar(caixasListaFlat[index]);
            console.log('caixa alocada: ', ultimaCaixaAlocada?.posicao, " (", index+1, ") ");
        }

        console.log('');
        console.log('Dados do container pós-alocação: ');
        console.log('container.caixasAlocadas.length', container.caixasAlocadas.length);
        console.log('container.quantidadeCaixasAlocadas', container.quantidadeCaixasAlocadas);
        console.log('container.volumeAlocado', container.volumeAlocado);

        return container;
    }

    private organizarPorMaiorBase(gruposCaixas: GrupoCaixas[]) {
        var compararBase = function (grupoCaixas1: GrupoCaixas, grupoCaixas2: GrupoCaixas) {  
            if (grupoCaixas1.calcularBase() > grupoCaixas2.calcularBase()) { return -1; }  
            if (grupoCaixas1.calcularBase() < grupoCaixas2.calcularBase()) {return 1; }  
            return 0;  
        } 
        return gruposCaixas.sort(compararBase);
    }

}


