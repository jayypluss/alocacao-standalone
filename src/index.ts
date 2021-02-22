import { Alocador } from "./alocador";
import { GrupoCaixas } from "./models/GrupoCaixas";
import { Matriz } from "./models/Matriz";
import { Objeto3D } from "./models/Objeto3D";
import { Container } from "./models/Container";

function main() {

    const container = new Container(
        1, // id
        200, // largura
        400, // comprimento
        150 // altura
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


// functions

// public alocarFileirasDeComprimentoParaCima(container: Container, todasCaixas: GrupoCaixas[], indiceLarguraX: number) {
//     let alturaOcupada = 0;
//     let indiceAlturaFileira = 0;
//     var containerFileiraOcupada: Container = { ...container }; 
//     for (alturaOcupada = 0; alturaOcupada < container.alturaY; indiceAlturaFileira++) {
//         containerFileiraOcupada = preencherComprimentoX(container, todasCaixas, indiceAlturaFileira, indiceLarguraX);
//         alturaOcupada += container.alturaY - containerFileiraOcupada.alturaY ;
//         console.log('alturaOcupada: ', alturaOcupada);
//         console.log('container.alturaY: ', container.alturaY);
//     }

//     return containerFileiraOcupada;
// };


// const cabeOutroTipoDeCaixa = (containerComFileiraOcupada: Container, todasCaixas: GrupoCaixas[]): [GrupoCaixas, number] => {
//     var tipoCaixa: GrupoCaixas;
//     var quantidade: number = 0;
//     todasCaixas.forEach(caixa => {
//         if (containerComFileiraOcupada.comprimentoX >= caixa.comprimentoX) {
//             tipoCaixa = caixa;
//             quantidade = Math.floor(container.comprimentoX/tipoCaixa.comprimentoX);
//         }
//     });
//     return [tipoCaixa, quantidade];
// };


// const preencherComprimentoX = (container: Container, todasCaixas: GrupoCaixas[], posicaoZ: number, posicaoY: number): Container => {
//     var comprimentoTotalUtil = container.comprimentoX;
//     var fileiraContainerOcupada: Container = { ...container } as Container;
//     var fileira: any = {};
//     var caixasAlocadasFileira: number[] = [];
//     var primeiraDeducao = true;
//     let tipoCaixa: GrupoCaixas;
//     todasCaixas.forEach(caixas => {
//         let cabeDessaCaixaNaAltura = fileiraContainerOcupada.alturaY-caixas.alturaY >= 0;
//         let aindaTemDessaCaixa = caixas.quantidade > 0;
//         if (aindaTemDessaCaixa && cabeDessaCaixaNaAltura) {
//             tipoCaixa = caixas;
//         }
//     });

//     if (tipoCaixa) {
//         for (var comprimentoOcupado = 0; (comprimentoOcupado <= comprimentoTotalUtil) 
//             && (tipoCaixa.quantidade > 0 
//             && (tipoCaixa.alturaY-container.alturaY >= 0)); ) {
//             var espacoSobrando = comprimentoTotalUtil - comprimentoOcupado;
//             if ((espacoSobrando > 0) 
//                 && !(espacoSobrando <= tipoCaixa.comprimentoX)) {
    
//                 fileiraContainerOcupada.comprimentoX -= tipoCaixa.comprimentoX;
//                 if (primeiraDeducao) {
//                     if (fileiraContainerOcupada.alturaY - tipoCaixa.alturaY >= 0 
//                         && fileiraContainerOcupada.larguraZ - tipoCaixa.larguraZ >= 0) {
                            
//                             fileiraContainerOcupada.alturaY -= tipoCaixa.alturaY;
//                             fileiraContainerOcupada.larguraZ -= tipoCaixa.larguraZ;
//                             primeiraDeducao = false;
//                     } else {
//                         break;
//                     }
//                 }
//                 espacoSobrando -= tipoCaixa.comprimentoX;
//                 comprimentoOcupado += tipoCaixa.comprimentoX
//                 tipoCaixa.quantidade -= 1;
//                 fileiraContainerOcupada.matrizPosicoes[fileiraContainerOcupada.quantidadeCaixasAlocadas][posicaoY][posicaoZ] = tipoCaixa.idTipoCaixa;
//                 fileiraContainerOcupada.idsCaixasAlocadas.push(tipoCaixa.idTipoCaixa);
//                 caixasAlocadasFileira.push(tipoCaixa.idTipoCaixa);
//                 fileiraContainerOcupada.volumeAlocado += volumeCaixa(tipoCaixa, 1);
//                 fileiraContainerOcupada.quantidadeCaixasAlocadas += 1;
//             } else {
//                 var cabeMais = cabeOutroTipoDeCaixa(fileiraContainerOcupada, todasCaixas);
//                 var tipoCaixaQueCabeMais = cabeMais[0];
//                 var quantidadeQueCabeMais = cabeMais[1];
//                 for (let index = 0; index < quantidadeQueCabeMais; index++) {
//                     espacoSobrando -= tipoCaixaQueCabeMais.comprimentoX;
//                     comprimentoOcupado += tipoCaixaQueCabeMais.comprimentoX;
//                     tipoCaixaQueCabeMais.quantidade -= 1;
//                     fileiraContainerOcupada.matrizPosicoes[fileiraContainerOcupada.quantidadeCaixasAlocadas][posicaoY][posicaoZ] = tipoCaixaQueCabeMais.idTipoCaixa;
//                     fileiraContainerOcupada.idsCaixasAlocadas.push(tipoCaixaQueCabeMais.idTipoCaixa);
//                     caixasAlocadasFileira.push(tipoCaixaQueCabeMais.idTipoCaixa);
//                     fileiraContainerOcupada.volumeAlocado += volumeCaixa(tipoCaixaQueCabeMais, 1);
//                     fileiraContainerOcupada.quantidadeCaixasAlocadas += 1;
//                 }
//                 break;
//             }
//         }
//     }

//     fileira = {
//         comprimentoOcupado: fileiraContainerOcupada.comprimentoX,
//         alturaOcupada: fileiraContainerOcupada.alturaY,
//         larguraOcupada: fileiraContainerOcupada.larguraZ,
//         indiceOcupado: fileiraContainerOcupada.quantidadeCaixasAlocadas,
//         caixasAlocadasFileira: caixasAlocadasFileira
//     };

//     return fileiraContainerOcupada;
// };


// const empilharFileiraComprimentoX = (container: Container, caixas: GrupoCaixas, posicao: number) => {
//     return;
// }


// const volumeCaixas = (caixas: GrupoCaixas[]): number => {
//     let volumeTotal: number = 0;
//     caixas.forEach(element => {
//         volumeTotal += element.alturaY * element.alturaY * element.larguraZ * element.quantidade;
//     });
//     return volumeTotal;
// };

// const volumeCaixa = (caixas: GrupoCaixas, quantidade?: number): number => {
//     let volume = caixas.alturaY * caixas.alturaY * caixas.larguraZ * (quantidade ? quantidade : caixas.quantidade);
//     return volume;
// };

// const volumeContainer = (container: Container): number => {
//     return container.comprimentoX *  container.alturaY * container.larguraZ;
// };


// const cabeAlgumaCaixaNoComprimentoX = (container: Container, todasCaixas: GrupoCaixas[], posicao: number) => {
//     for (let index = 0; index < todasCaixas.length; index++) {
//         if (todasCaixas[index].quantidade > 0) {
//             if (todasCaixas[index].comprimentoX <= container.comprimentoX) {
//                 return todasCaixas[index];
//             }
//         }         
//     }
// };

// const cabeAlgumaCaixaNaLarguraZ = (container: Container, todasCaixas: GrupoCaixas[]) => {
//     for (let index = 0; index < todasCaixas.length; index++) {
//         if (todasCaixas[index].larguraZ > 0) {
//             if (todasCaixas[index].larguraZ <= container.larguraZ) {
//                 return index;
//             }
//         }         
//     }
// };


// // const cabeAlgumaCaixaNaAlturaY = (container: Container, todasCaixas: GrupoCaixas[]) => {
// //     for (let index = 0; index < todasCaixas.length; index++) {
// //         if (todasCaixas[index].alturaY > 0) {
// //             if (todasCaixas[index].alturaY <= container.alturaY) {
// //                 return index;
// //             }
// //         }         
// //     }
// // };


// const cabeQuantasCaixasNoComprimento = (container: Container, todasCaixas: GrupoCaixas[]) => {
//     for (let index = 0; index < todasCaixas.length; index++) {
//         if (todasCaixas[index].quantidade > 0) {
//             if (todasCaixas[index].comprimentoX <= container.comprimentoX) {
//                 return index;
//             }
//         }         
//     }
// };

// const acharTipoCaixaPorId = (todasCaixas: GrupoCaixas[], id: number): GrupoCaixas => {
//     let caixas;
//     todasCaixas.forEach(tipoCaixa => {
//         if (tipoCaixa.idTipoCaixa == id) {
//             caixas = tipoCaixa;
//         }
//     });
//     console.log(caixas);
//     return caixas;
// };



// const cabeAlgumaCaixaNaAlturaY = (containerFileiraOcupada: Container, todasCaixas: GrupoCaixas[]): any => {
//     let cabe = false;
//     // let caixa: GrupoCaixas = null;
//     todasCaixas.forEach(tipoCaixa => {
//         if (tipoCaixa.quantidade > 0 && tipoCaixa.alturaY <= containerFileiraOcupada.alturaY) {
//             cabe = true;
//             // caixa = tipoCaixa;
//         };
//     });
//     return cabe;
// };

// // routines

// // console.log("Dados iniciais do Container: ", container);
// console.log();


// var todasCaixas: GrupoCaixas[] = [caixas1, caixas2, caixas3];
// var volumeTotalCaixas = volumeCaixas(todasCaixas);

// var containerParedeAlocada = Alocador.alocarFileirasDeComprimentoParaCima(container, todasCaixas, 0);

