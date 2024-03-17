import {CGFobject, CGFappearance, CGFtexture, CGFshader} from '../../lib/CGF.js';
import { MyPlane } from '../geometric/MyPlane.js';
import {MyWater} from "./MyWater.js";

export class MyTerrain extends CGFobject {

    constructor(scene) {
        super(scene)
        this.water = new MyWater(this.scene);
        this.plane = new MyPlane(this.scene, 30);
        this.planeMaterial = new CGFappearance(this.scene);
        this.terrainTexture = new CGFtexture(this.scene, "./images/terrain.jpg");
        this.terrainHeightMap = new CGFtexture(this.scene, "./images/heightmap.jpg");
        this.terrainAltimetry = new CGFtexture(this.scene, "./images/altimetry.png");
        this.planeMaterial.setTexture(this.terrainTexture)
        this.terrainShader = new CGFshader(this.scene.gl, "./shaders/terrain.vert", "./shaders/terrain.frag");
        this.terrainShader.setUniformsValues({terrain : 1, heightmap : 2, altimetry : 3, terrain_weigth : 0.7 , altimetry_weigth : 0.3});
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, -100, 0);
        this.scene.scale(400, 400, 400);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.planeMaterial.apply();
        this.scene.setActiveShader(this.terrainShader);
        this.terrainTexture.bind(1);
        this.terrainHeightMap.bind(2);
        this.terrainAltimetry.bind(3);
        this.plane.display();
        this.scene.popMatrix()
        this.scene.setActiveShader(this.scene.defaultShader);
        this.water.display();
    }

    update(time) {
        this.water.update(time * 1000);
    }
}