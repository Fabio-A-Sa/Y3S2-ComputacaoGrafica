import {CGFobject, CGFappearance, CGFtexture, CGFshader} from '../../lib/CGF.js';
import {MyPlane} from '../geometric/MyPlane.js';

export class MyWater extends CGFobject {

    constructor(scene) {
        super(scene)
        this.plane = new MyPlane(this.scene, 30);
        this.waterMaterial = new CGFappearance(this.scene);
        this.waterTexture = new CGFtexture(this.scene, "./images/waterTex.jpg");
        this.waterHeightMap = new CGFtexture(this.scene, "./images/waterMap.jpg");
        this.waterMaterial.setTexture(this.waterTexture)
        this.waterShader = new CGFshader(this.scene.gl, "./shaders/water.vert", "./shaders/water.frag");
        this.waterShader.setUniformsValues({water : 1, heightmap : 2, timeFactor : 0});
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, -110, 0);
        this.scene.scale(400, 400, 400);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.waterMaterial.apply();
        this.scene.setActiveShader(this.waterShader);
        this.waterTexture.bind(1);
        this.waterHeightMap.bind(2);
        this.plane.display();
        this.scene.popMatrix()
        this.scene.setActiveShader(this.scene.defaultShader);
    }

    update(time) {
        this.waterShader.setUniformsValues({timeFactor: time / 50000});
    }
}