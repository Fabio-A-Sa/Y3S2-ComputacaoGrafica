import {CGFobject} from '../../lib/CGF.js';

export class MyTreePatch extends CGFobject {

    constructor(scene, x, y, z, space, textures, angle=0) {
        super(scene)
        this.coordinates = {x : x, y : y, z : z};
        this.space = space;
        this.textures = textures;
        this.angle = angle;
    }

    getRandom(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    display() {
        this.scene.pushMatrix();
        this.scene.rotate(this.angle * Math.PI / 180, 0, 1, 0);
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].display(...this.treesPositions[i]);
        }
        this.scene.popMatrix();
    }

    update(timeSinceAppStart, windAngle, windStrength) {
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].update(timeSinceAppStart, windAngle, windStrength);
        }
    }
}