import { CGFobject, CGFappearance, CGFtexture, CGFshader } from '../../lib/CGF.js';
import { MyPlane } from '../geometric/MyPlane.js';

export class MyBillboard extends CGFobject {

    constructor(scene, height, texture) {
        super(scene)
        this.tree = new MyPlane(this.scene, 30);
        this.treeTexture = texture;
        this.height = height;
        this.windAngle = 0;
        this.windStrength = 50;
        this.timeSinceAppStart = 0;
        this.initMaterials();
    }

    initMaterials() {
        this.treeMaterial = new CGFappearance(this.scene);
        this.treeMaterial.setTexture(this.treeTexture)
        this.treeShader = new CGFshader(this.scene.gl, "./shaders/tree.vert", "./shaders/tree.frag");
    }

    display(x, y, z) {

        // Tree shader and texture
        this.scene.setActiveShader(this.treeShader);
        this.scene.pushMatrix();

        // Follow camera
        let x_distance = this.scene.camera.position[0] - x
        let z_distance = this.scene.camera.position[2] - z
        let vector = vec2.fromValues(x_distance, z_distance);
        vec2.normalize(vector, vector);
        let angle = Math.acos(vec2.dot(vector, vec2.fromValues(0, 1))) * ((vector[0] < 0) ? -1 : 1);
        let diffAngle = (this.windAngle * 2 * Math.PI) / 360;
        
        // Display content
        let timeFactor = Math.sin(2 * Math.PI * this.timeSinceAppStart);
        this.treeShader.setUniformsValues({ timeFactor: timeFactor, angle: diffAngle, strength: this.windStrength })
        this.scene.translate(x, y + this.height / 2, z);
        this.scene.rotate(angle, 0, 1, 0);
        this.scene.scale(20, this.height, 25);
        this.treeMaterial.apply();
        this.tree.display();

        this.scene.popMatrix()
        this.scene.setActiveShader(this.scene.defaultShader);
    }

    update(timeSinceAppStart, windAngle, windStrength) {
        this.timeSinceAppStart = timeSinceAppStart;
        this.windAngle = windAngle;
        this.windStrength = windStrength;
    }
}