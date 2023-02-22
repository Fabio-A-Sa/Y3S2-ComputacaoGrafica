import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";

export class MyUnitCubeQuad extends CGFobject {

	constructor(scene) {
		super(scene);
        this.quad = new MyQuad(scene);
	}

    toRadians(angle) {
        return angle * Math.PI / 180;
    }

    display() {

        // display top face
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.quad.display();
        this.scene.popMatrix();

        // display bottom face
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(this.toRadians(180), 0, 0, 1);
        this.quad.display();
        this.scene.popMatrix();

        // display lateral 1
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(this.toRadians(90), 0, 0, 1);
        this.quad.display();
        this.scene.popMatrix();

        // display lateral 2
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(this.toRadians(-90), 0, 0, 1);
        this.quad.display();
        this.scene.popMatrix();

        // display lateral 3
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(this.toRadians(-90), 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        // display lateral 4
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(this.toRadians(90), 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    }
}