import {CGFobject, CGFappearance, CGFtexture} from '../../lib/CGF.js';
import { MySphere } from '../geometric/MySphere.js';
import { MyAnimatorDropEgg } from '../animated/MyAnimatorDropEgg.js';

export class MyBirdEgg extends CGFobject {

    constructor(scene, x, y, z) {
        super(scene)
        this.egg = new MySphere(this.scene, 0.7, 15, 15, false, 1.7, 1)
        this.angle = this.getRandom(-Math.PI/4, Math.PI/4);
        this.axis = [this.getRandom(0, 2), this.getRandom(0, 2), this.getRandom(0, 2)]
        this.coordinates = {x: x, y: y, z: z};
        this.animatorDrop = new MyAnimatorDropEgg(0, -71, 2, false, false);
        this.slack = 10;
        this.initMaterials();
    }

    getRandom(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    }

    initMaterials() {
        this.eggTexture = new CGFtexture(this.scene, "./images/egg.jpg");
        this.eggMaterial = new CGFappearance(this.scene)
        this.eggMaterial.setAmbient(0.8, 0.8, 0.8, 0.0);
        this.eggMaterial.setDiffuse(0.95, 0.95, 0.95, 0.0);
        this.eggMaterial.setSpecular(0.5, 0.5, 0.5, 0.0);
        this.eggMaterial.setShininess(10.0);
        this.eggMaterial.setTexture(this.eggTexture);
    }

    display() {
        this.scene.pushMatrix()
        this.eggMaterial.apply()
        this.scene.translate(this.coordinates.x, this.coordinates.y, this.coordinates.z);
        this.scene.rotate(this.angle, ...this.axis)
        this.egg.display()
        this.scene.popMatrix()
    }

    updatePosition(x, y, z) {
        this.coordinates.x += x;
        this.coordinates.y += y;
        this.coordinates.z += z;
    }

    setPosition(x, y, z) {
        this.coordinates.x = x;
        this.coordinates.y = y;
        this.coordinates.z = z
    }

    anime(timeSinceAppStart) {
        this.animatorDrop.enable(timeSinceAppStart);
    }

    update(timeSinceAppStart) {
        this.animatorDrop.update(timeSinceAppStart, {y: this.coordinates.y});
        this.setPosition(this.coordinates.x, this.animatorDrop.y, this.coordinates.z);
        if (Math.abs(this.coordinates.y + 71) < this.slack && this.animatorDrop.active)
            this.animatorDrop.disable();
    }
}