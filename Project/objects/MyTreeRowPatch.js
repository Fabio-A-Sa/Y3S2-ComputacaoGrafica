import {MyTreePatch} from './MyTreePatch.js';
import { MyBillboard } from './MyBillboard.js';

export class MyTreeRowPatch extends MyTreePatch {

    constructor(scene, x, y, z, space, textures, angle) {
        super(scene, x, y, z, space, textures, angle)
        this.initTrees();
    }

    initTrees() {
        this.trees = []
        this.treesPositions = []
        let i, x_coord, z_coord;
        for (i = 0; i < 6; i++) {
            x_coord = this.coordinates.x + i * this.space + this.getRandom(-5, 5);
            z_coord = this.coordinates.z + this.getRandom(-5, 5);
            this.trees.push(new MyBillboard(this.scene, this.getRandom(20, 30), this.textures[this.getRandom(0, 2)], this.terrainHeightMap));
            this.treesPositions.push([x_coord, this.coordinates.y, z_coord]);
        }
    }
}