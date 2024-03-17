import {CGFobject, CGFappearance, CGFtexture, CGFshader} from '../../lib/CGF.js';
import {MyPlane} from "../geometric/MyPlane.js";

export class MyNest extends CGFobject {

    constructor(scene, x, y, z) {
        super(scene)
        this.plane = new MyPlane(this.scene, 30);
        this.initMaterials();
        this.coordinates = {x: x, y: y, z: z};
        this.eggs = [];
        this.positions = [  {x: x + 4, y: y + 1, z: z + 4}, 
                            {x: x - 4, y: y + 1, z: z + 4}, 
                            {x: x + 4, y: y + 1, z: z - 4}, 
                            {x: x - 4, y: y + 1, z: z - 4}    ]
    }

    initMaterials() {
        this.nestTexture = new CGFtexture(this.scene, "./images/nestTex.jpg");
        this.nestMaterial = new CGFappearance(this.scene)
        this.nestMaterial.setAmbient(0.8, 0.8, 0.8, 0.0);
        this.nestMaterial.setDiffuse(0.95, 0.95, 0.95, 0.0);
        this.nestMaterial.setSpecular(0.5, 0.5, 0.5, 0.0);
        this.nestMaterial.setShininess(10.0);
        this.nestMaterial.setTexture(this.nestTexture);

        this.nestHeightMap = new CGFtexture(this.scene, "./images/nestHeight.jpg");
        this.nestShader = new CGFshader(this.scene.gl, "./shaders/nest.vert", "./shaders/nest.frag")
        this.nestShader.setUniformsValues({texture : 1, heightmap : 2});
    }

    display() {

        // Nest
        this.scene.pushMatrix()
        this.nestMaterial.apply()
        this.scene.translate(this.coordinates.x, this.coordinates.y, this.coordinates.z);
        this.scene.scale(20, 20, 20);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.setActiveShader(this.nestShader);
        this.nestTexture.bind(1);
        this.nestHeightMap.bind(2);
        this.plane.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

        // Eggs
        for (let i = 0 ; i < this.eggs.length ; i++) {
            this.scene.pushMatrix();
            this.scene.translate(-this.eggs[i].coordinates.x, -this.eggs[i].coordinates.y, -this.eggs[i].coordinates.z)

            if (this.eggs[i].animatorDrop.active) {
                this.scene.translate(this.eggs[i].coordinates.x, this.eggs[i].coordinates.y, this.eggs[i].coordinates.z);
            } else {
                this.scene.translate(this.positions[i].x, this.positions[i].y, this.positions[i].z);
            }

            this.eggs[i].display();
            this.scene.popMatrix();
        }
    }

    update (timeSinceAnimationStart) {
        for (let i = 0 ; i < this.eggs.length; i++) {
            this.eggs[i].update(timeSinceAnimationStart);
        }
    }

    pushEgg(egg) {
        this.eggs.push(egg);
    }
}