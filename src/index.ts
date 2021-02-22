import { Alocador } from "./alocador";
import { GrupoCaixas } from "./models/GrupoCaixas";
import { Container } from "./models/Container";

function main() {

    const container = new Container(
        1, // id
        400, // comprimento
        150, // altura
        200 // largura
    );
    
    const caixas1 = new GrupoCaixas(1);
    caixas1.criarCaixas(45, 25, 80, 15);
    
    const caixas2 = new GrupoCaixas(2);
    caixas2.criarCaixas(70, 32, 60, 20);
    
    const caixas3 = new GrupoCaixas(3);
    caixas3.criarCaixas(60, 41, 20, 15);
    

    const todasCaixas = [caixas1, caixas2, caixas3];

    const alocador = new Alocador(container, todasCaixas);

    alocador.alocarTodas(todasCaixas, container);

}


main();

