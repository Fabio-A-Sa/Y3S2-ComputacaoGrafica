import { CGFobject } from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';

/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.quad = new MyQuad(this.scene);
    }


    display() {

        //Front
        this.scene.pushMatrix()
        this.scene.translate(0.5, 0, 0)
        this.scene.rotate(Math.PI / 2, 0, 1, 0)
        this.quad.display()
        this.scene.popMatrix()

        //Back
        this.scene.pushMatrix()
        this.scene.translate(-0.5, 0, 0)
        this.scene.rotate(3 * Math.PI / 2, 0, 1, 0)
        this.quad.display()
        this.scene.popMatrix()

        //Left
        this.scene.pushMatrix()
        this.scene.translate(0,0,0.5)
        this.quad.display()
        this.scene.popMatrix()

        //Right
        this.scene.pushMatrix()
        this.scene.translate(0,0,-0.5)
        this.scene.rotate(Math.PI,1, 0, 0)
        this.quad.display()
        this.scene.popMatrix()

        //Top
        this.scene.pushMatrix()
        this.scene.translate(0,0.5,0)
        this.scene.rotate(3 * Math.PI/2 ,1, 0, 0)
        this.quad.display()
        this.scene.popMatrix()

        //Bottom
        this.scene.pushMatrix()
        this.scene.translate(0,-0.5,0)
        this.scene.rotate(Math.PI/2 ,1, 0, 0)
        this.quad.display()
        this.scene.popMatrix()

        
    }


}

