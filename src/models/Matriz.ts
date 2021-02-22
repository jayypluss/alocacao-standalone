export class ItemMatriz {
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
    maxX: number;
    maxY: number;
    maxZ: number;

    x: any[] = [];
    y: any[] = [];
    z: any[] = [];

    constructor(maxX: number, maxY: number, maxZ: number) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.maxZ = maxZ;
    }
}