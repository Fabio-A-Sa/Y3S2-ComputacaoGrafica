import {CGFobject, CGFappearance} from '../../lib/CGF.js';
import {MyTriangle} from "../geometric/MyTriangle.js";
import {MyQuad} from "../geometric/MyQuad.js";

export class MyWing extends CGFobject {
    constructor(scene) {
        super(scene);
        this.rectangle = new MyQuad(scene);
        this.triangle = new MyTriangle(scene);
    }

    displayLeftWing(angle) {
        this.scene.pushMatrix();
        this.scene.translate(-1.6, 0, 0);
        this.scene.scale(1.8, 1, 1);
        this.rectangle.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2.5, 0, 0.5)
        this.scene.scale(1.2, 1, 0.71);
        this.scene.rotate(angle, 0, 0, 1)
        this.scene.rotate(Math.PI/4, 0, 1, 0)
        this.triangle.display();
        this.scene.popMatrix();
    }

    displayRightWing(angle) {
        this.scene.pushMatrix()
        this.scene.scale(-1, 1, 1)
        this.displayLeftWing(angle);
        this.scene.popMatrix();
    }
}

