import { Caixa } from "./Caixa";

export class ItemMatriz {
    // TODO 
    // Check
    x: number;
    y: number;
    z: number;
    object: any;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

export class Matriz {
    // TODO 
    // Check
    maxX: number;
    maxY: number;
    maxZ: number;

    // x: any[] = [];
    // y: any[] = [];
    // z: any[] = [];

    constructor(maxX: number, maxY: number, maxZ: number) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.maxZ = maxZ;

        // for (let x = 0; x < this.maxX; x++) {
        //     this.x.push(0);
        // }

        // for (let y = 0; y < this.maxY; y++) {
        //     this.y.push(0);
        // }

        // for (let z = 0; z < this.maxZ; z++) {
        //     this.z.push(0);
        // }
    }

    // public adicionar(caixa: Caixa, x: number, y: number, z: number) {
    //     this.x[x];
    //     throw new Error('Method not implemented.');
    // }
}