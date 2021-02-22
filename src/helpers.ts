export class Helpers {
    static centimetrosParaMetros = (volumeEmCentimetros: number) => {
        return (volumeEmCentimetros/100).toFixed(2);
    };
    
    static centimetrosCubicosParaMetrosCubicos = (volumeEmCentimetros: number) => {
        return (volumeEmCentimetros/1000000).toFixed(2);
    };    
}