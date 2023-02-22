import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";

export class MyTangram extends CGFobject {

	constructor(scene) {
		super(scene);
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.parallelogram = new MyParallelogram(scene);
	}

    toRadians(angle) {
        return angle * Math.PI / 180;
    }

    display() {

        // display diamond
        this.scene.pushMatrix();
        var matrix = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0.4, 1.4, 0, 1
        ]
        this.scene.multMatrix(matrix);
        this.diamond.display();
        this.scene.popMatrix();

        // display triangle
        this.scene.pushMatrix();
        this.scene.rotate(-this.toRadians(90+45), 0, 0, 1);
        this.scene.translate(-1, 1, 0);
        this.triangle.display();
        this.scene.popMatrix();

        // display big triangle 1
        this.scene.pushMatrix();
        this.scene.rotate(this.toRadians(45), 0, 0, 1);
        this.scene.translate(0, -2, 0);
        this.triangleBig.display();
        this.scene.popMatrix();

        // display big triangle 2
        this.scene.pushMatrix();
        this.scene.translate(-1.4, -1.4, 0);
        this.scene.rotate(this.toRadians(45), 0, 0, 1);
        this.scene.scale(-1, -1, 1);
        this.triangleBig.display();
        this.scene.popMatrix();

        // display paralellogram
        this.scene.pushMatrix();
        this.scene.translate(-1.4, -2.8, 0);
        this.scene.scale(1, -1, 1);
        this.scene.rotate(this.toRadians(135), 0, 0, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        // display small triangle 1
        this.scene.pushMatrix();
        this.scene.rotate(this.toRadians(135), 0, 0, 1);
        this.scene.translate(-3, 2, 0);
        this.triangleSmall.display();
        this.scene.popMatrix();

        // display small triangle 2
        this.scene.pushMatrix();
        this.scene.translate(0.1, 2.1, 0);
        this.scene.rotate(this.toRadians(45), 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();
    }
}