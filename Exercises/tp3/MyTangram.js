import { CGFobject, CGFappearance } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.triangleBig = new MyTriangleBig(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.initMaterials();
    }

    initMaterials() {

        // this.diamond
        this.diamondMaterial = new CGFappearance(this.scene);
        this.diamondMaterial.setAmbient(0, 1, 0, 1.0);
        this.diamondMaterial.setDiffuse(0, 1, 0, 0)
        this.diamondMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.diamondMaterial.setShininess(10.0);

        // this.triangle purple
        this.trianglePurpleMaterial = new CGFappearance(this.scene);
        this.trianglePurpleMaterial.setAmbient(0, 1, 0, 1.0);
        this.trianglePurpleMaterial.setDiffuse(76 / 255, 0 / 255, 153 / 255, 0)
        this.trianglePurpleMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.trianglePurpleMaterial.setShininess(10.0);

        // this.triangle pink
        this.trianglePinkMaterial = new CGFappearance(this.scene);
        this.trianglePinkMaterial.setAmbient(0, 1, 0, 1.0);
        this.trianglePinkMaterial.setDiffuse(255 / 255, 153 / 255, 204 / 255, 0);
        this.trianglePinkMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.trianglePinkMaterial.setShininess(10.0);

        // this.triangle orange
        this.triangleOrangeMaterial = new CGFappearance(this.scene);
        this.triangleOrangeMaterial.setAmbient(0, 1, 0, 1.0);
        this.triangleOrangeMaterial.setDiffuse(255 / 255, 128 / 255, 0 / 255, 0)
        this.triangleOrangeMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.triangleOrangeMaterial.setShininess(10.0);

        // this.triangle blue
        this.triangleBlueMaterial = new CGFappearance(this.scene);
        this.triangleBlueMaterial.setAmbient(0, 1, 0, 1.0);
        this.triangleBlueMaterial.setDiffuse(0, 0, 1, 0)
        this.triangleBlueMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.triangleBlueMaterial.setShininess(10.0);

        // this.triangle red
        this.triangleRedMaterial = new CGFappearance(this.scene);
        this.triangleRedMaterial.setAmbient(0, 1, 0, 1.0);
        this.triangleRedMaterial.setDiffuse(1, 0, 0, 0);
        this.triangleRedMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.triangleRedMaterial.setShininess(10.0);        

        // this.paralellogram
        this.paralellogramMaterial = new CGFappearance(this.scene);
        this.paralellogramMaterial.setAmbient(0, 1, 0, 1.0);
        this.paralellogramMaterial.setDiffuse(1, 1, 0, 0);
        this.paralellogramMaterial.setSpecular(0.9, 0.9, 0.9, 1.0);
        this.paralellogramMaterial.setShininess(10.0);
    }

    display() {

        this.scene.pushMatrix();
        let translationMatrix = [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0.4, 1.4, 0, 1
        ]

        this.scene.multMatrix(translationMatrix)
        //this.diamondMaterial.apply();
        this.scene.customMaterial.apply();
        this.diamond.display()
        this.scene.popMatrix()

        //Purple triangle
        this.scene.pushMatrix()
        this.scene.translate(0.1, 2.1, 0)
        this.scene.rotate(45 * Math.PI / 180, 0, 0, 1)
        this.trianglePurpleMaterial.apply();
        this.triangleSmall.display()
        this.scene.popMatrix()

        //Pink Triangle
        this.scene.pushMatrix()
        this.scene.translate(1.4, 0, 0)
        this.scene.rotate(225 * Math.PI / 180, 0, 0, 1)
        this.trianglePinkMaterial.apply();
        this.triangle.display()
        this.scene.popMatrix()

        //Orange Triangle
        this.scene.pushMatrix()
        this.scene.translate(1.4, -1.40, 0)
        this.scene.rotate(45 * Math.PI / 180, 0, 0, 1)
        this.triangleOrangeMaterial.apply()
        this.triangleBig.display()
        this.scene.popMatrix()

        //Blue Triangle
        this.scene.pushMatrix()
        this.scene.translate(-1.42, -1.4, 0)
        this.scene.rotate(225 * Math.PI / 180, 0, 0, 1)
        this.triangleBlueMaterial.apply();
        this.triangleBig.display()
        this.scene.popMatrix()

        //Parallelogram
        this.scene.pushMatrix()
        this.scene.translate(-4.2, -4.2, 0)
        this.scene.scale(-1, 1, 1)
        this.scene.rotate(135 * Math.PI / 180, 0, 0, 1)
        this.paralellogramMaterial.apply();
        this.parallelogram.display()
        this.scene.popMatrix()

        //Red Triangle
        this.scene.pushMatrix()
        this.scene.translate(0.7, -3.5, 0)
        this.scene.rotate(135 * Math.PI / 180, 0, 0, 1)
        this.triangleRedMaterial.apply()
        this.triangleSmall.display()
        this.scene.popMatrix()

    }


}

