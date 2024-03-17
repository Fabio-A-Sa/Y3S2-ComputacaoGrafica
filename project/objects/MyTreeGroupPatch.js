import {MyBillboard} from './MyBillboard.js';
import {MyTreePatch} from './MyTreePatch.js';

export class MyTreeGroupPatch extends MyTreePatch {

    constructor(scene, x, y, z, space, textures) {
        super(scene, x, y, z, space, textures);
        this.initTrees();
    }

    initTrees() {
        this.trees = []
        this.treesPositions = []
        let i, j, x_coord, z_coord;
        for (i = 0 ; i < 3 ; i++) {
            for (j = 0 ; j < 3 ; j++) {
                x_coord = this.coordinates.x + i * this.space + this.getRandom(-5, 5);
                z_coord = this.coordinates.z + j * this.space + this.getRandom(-5, 5);
                this.trees.push(new MyBillboard(this.scene, this.getRandom(20, 30), this.textures[this.getRandom(0, 2)], this.terrainHeightMap));
                this.treesPositions.push([x_coord, this.coordinates.y, z_coord]);
            }
        }
    }
}