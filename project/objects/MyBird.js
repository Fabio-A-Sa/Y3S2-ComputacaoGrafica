import {CGFappearance, CGFobject, CGFtexture} from "../../lib/CGF.js";
import {MyCone} from "../geometric/MyCone.js";
import {MySphere} from "../geometric/MySphere.js";
import {MyCylinder} from "../geometric/MyCylinder.js";
import {MyTriangle} from "../geometric/MyTriangle.js";
import {MyWing} from "./MyWing.js";
import {MyAnimatorMovement} from "../animated/MyAnimatorMovement.js";
import {MyAnimatorGetEgg} from "../animated/MyAnimatorGetEgg.js";

export class MyBird extends CGFobject {

    constructor(scene, x, y, z, eggs, nest) {
        super(scene);

        // Elements
        this.beak = new MyCone(scene, 5, 5);
        this.eye = new MySphere(scene, 0.5, 15, 15);
        this.head = new MySphere(scene, 1, 15, 15);
        this.body = new MySphere(scene, 1, 15, 15);
        this.paw = new MyCylinder(scene, 5, 5);
        this.claw = new MyCone(scene, 5, 5);
        this.tail = new MyTriangle(scene);
        this.wing = new MyWing(scene);
        this.eggs = eggs;
        this.nest = nest;
        this.transportedEgg = null;

        // Materials
        this.initMaterials();

        // Movement
        this.scale = 1;
        this.speed = 0;
        this.orientation = 0;
        this.tailAngle = 0;
        this.wingAngle = Math.PI / 8;
        this.position = {x: x, y: y, z: z};
        this.defaultPosition = {x: x, y: y, z: z};

        // Animations
        this.animatorMovement = new MyAnimatorMovement(-0.25, 0.25, 1, true, true);
        this.animatorGetEggDown = new MyAnimatorGetEgg(0, -71, 2, false, false);
        this.animatorGetEggUp = new MyAnimatorGetEgg(-71, 0, 2, false, false);
        this.slack = 10;

        // Speed Factor
        this.lastSpeedFactor = 1;
    }

    initMaterials() {
        
        this.birdMaterial = new CGFappearance(this.scene);
        this.birdMaterial.setAmbient(0.8, 0.8, 0.8, 0.0);
        this.birdMaterial.setDiffuse(0.95, 0.95, 0.95, 0.0);
        this.birdMaterial.setSpecular(0.5, 0.5, 0.5, 0.0);
        this.birdMaterial.setTexture(new CGFtexture(this.scene, "./images/birdTex.jpg"));
        this.birdMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // Paw material
        this.pawMaterial = new CGFappearance(this.scene);
        this.pawMaterial.setAmbient(100 / 255, 100 / 255, 100 / 255, 0.0);
        this.pawMaterial.setDiffuse(1.0, 244 / 255, 28 / 255, 0.0);
        this.pawMaterial.setSpecular(0.9, 0.9, 0.9, 0.0);
        this.pawMaterial.setShininess(10.0);

        // Claw Material
        this.clawMaterial = new CGFappearance(this.scene);
        this.clawMaterial.setAmbient(100 / 255, 100 / 255, 100 / 255, 0.0);
        this.clawMaterial.setDiffuse(1.0, 244 / 255, 28 / 255, 0.0);
        this.clawMaterial.setSpecular(0.9, 0.9, 0.9, 0.0);
        this.clawMaterial.setShininess(10.0);

        // Beak Material
        this.beakMaterial = new CGFappearance(this.scene);
        this.beakMaterial.setAmbient(100 / 255, 100 / 255, 100 / 255, 0.0);
        this.beakMaterial.setDiffuse(1.0, 244 / 255, 28 / 255, 0.0);
        this.beakMaterial.setSpecular(0.9, 0.9, 0.9, 0.0);
        this.beakMaterial.setShininess(10.0);

        // Eye Material
        this.eyeMaterial = new CGFappearance(this.scene);
        this.eyeMaterial.setAmbient(0.05, 0.05, 0.05, 0.0);
        this.eyeMaterial.setDiffuse(0.05, 0.05, 0.05, 0.0);
        this.eyeMaterial.setSpecular(1, 1, 1, 0.0);
        this.eyeMaterial.setShininess(10.0);

    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.position.x, this.position.y, this.position.z);
        this.scene.rotate(this.orientation, 0, 1, 0);
        this.scene.scale(this.scale, this.scale, this.scale);
        this.draw();
        this.scene.popMatrix();
    }

    draw() {

        // Body
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 1.5);
        this.birdMaterial.apply();
        this.body.display();
        this.scene.popMatrix();

        // Head
        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.8, 0.8);
        this.scene.translate(0, 1, 1.7);
        this.birdMaterial.apply();
        this.head.display();
        this.scene.popMatrix();

        // Paws
        this.scene.pushMatrix();
        this.scene.translate(-0.4, -0.8, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.07, 0.07, 1.2);
        this.pawMaterial.apply();
        this.paw.display();
        this.scene.translate(10, -0.8, 0);
        this.paw.display();
        this.scene.popMatrix();

        // Claws
        this.scene.pushMatrix();
        this.scene.translate(-0.4, -2, -0.1);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.15, 0.65, 0.10);
        this.clawMaterial.apply();
        this.claw.display();
        this.scene.translate(4.65, 0, 0);
        this.claw.display();
        this.scene.popMatrix();

        // Beak
        this.scene.pushMatrix();
        this.scene.translate(0, 0.8, 2)
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.2, 0.8, 0.2);
        this.beakMaterial.apply();
        this.beak.display();
        this.scene.popMatrix();

        // Eyes
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 1, 2);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.3, 0.3, 0.3);
        this.eyeMaterial.apply();
        this.eye.display();
        this.scene.translate(3.4, 0, 0);
        this.eye.display();
        this.scene.popMatrix();

        // Tail
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -1.3);
        this.scene.rotate(this.tailAngle, 1, 0, 0);
        this.scene.scale(1, 1, 2);
        this.birdMaterial.apply();
        this.tail.display();
        this.scene.popMatrix();

        // Wing
        this.scene.pushMatrix();
        this.birdMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.rotate(this.wingAngle, 0, 0, 1);
        this.scene.translate(1, 0, 0);
        this.wing.displayLeftWing(this.wingAngle);
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1, 0, 0);
        this.scene.rotate(-this.wingAngle, 0, 0, 1);
        this.scene.translate(-1, 0, 0);
        this.wing.displayRightWing(this.wingAngle);
        this.scene.popMatrix();
        this.scene.popMatrix();

        // Transported Egg
        if (this.transportedEgg != null) {
            this.scene.pushMatrix()
            this.scene.translate(-this.transportedEgg.coordinates.x, -this.transportedEgg.coordinates.y - 3, -this.transportedEgg.coordinates.z)
            this.transportedEgg.display();
            this.scene.popMatrix();
        }
    }

    update(elapsedTime, scaleFactor, speedFactor) {

        this.scale = scaleFactor;
        this.handleKeys(speedFactor/5, elapsedTime);

        if (speedFactor !== this.lastSpeedFactor && this.speed != 0) {
            this.speed += (speedFactor - this.lastSpeedFactor);
            this.lastSpeedFactor = speedFactor;
        }

        this.animatorMovement.update(elapsedTime, {x: this.position.x, y: this.position.y, z: this.position.z, speed: this.speed, orientation: this.orientation, tailAngle: this.tailAngle, wingAngle: this.wingAngle})
        this.animatorGetEggUp.update(elapsedTime, {y: this.position.y})
        this.animatorGetEggDown.update(elapsedTime, {y: this.position.y})

        this.updateParams()
        this.checkEgg(elapsedTime);
    }

    updateParams() {

        if (this.animatorGetEggDown.active)
            this.position.y = this.animatorGetEggDown.y + this.animatorMovement.y

        else if (this.animatorGetEggUp.active)
            this.position.y = this.animatorGetEggUp.y + this.animatorMovement.y

        else
            this.position.y = this.animatorMovement.y

        this.position.x = this.animatorMovement.x
        this.position.z = this.animatorMovement.z
        this.tailAngle = this.animatorMovement.tailAngle
        this.wingAngle = this.animatorMovement.wingAngle
    }

    checkEgg(timeSinceAppStart) {
        
        // If touch the floor
        if (Math.abs(this.position.y + 71) < this.slack) {

            // The bird will try to catch an egg
            if (this.transportedEgg == null ) {
                for (let i = 0 ; i < this.eggs.length ; i++) {
                    if (this.eggs[i] != null) {
                        let range_x = Math.abs(this.position.x - this.eggs[i].coordinates.x);
                        let range_z = Math.abs(this.position.z - this.eggs[i].coordinates.z);
                        if (this.eggs[i] != null && range_x < this.slack && range_z < this.slack) {
                            this.transportedEgg = this.eggs[i];
                            this.eggs[i] = null;
                            return;
                        }
                    }
                }
            }

            // Anyway the bird changes animation down -> up
            if (this.animatorGetEggDown.active && !this.animatorGetEggUp.active) {
                this.animatorGetEggDown.disable()
                this.animatorGetEggUp.enable(timeSinceAppStart)
            }
        }
    }

    dropEgg(timeSinceAppStart) {

        // If the bird carries an egg
        if (this.transportedEgg != null) {
            let range_x = Math.abs(this.nest.coordinates.x - this.position.x);
            let range_z = Math.abs(this.nest.coordinates.z - this.position.z);
            
            // If the egg is above the nest, drop
            if (range_x < this.slack && range_z < this.slack) {
                this.transportedEgg.setPosition(this.position.x, this.position.y, this.position.z);
                this.transportedEgg.anime(timeSinceAppStart);
                this.nest.pushEgg(this.transportedEgg);
                this.transportedEgg = null;
            }
        }
    }

    turn(v) {
        this.orientation += v
    }

    accelerate(v) {
        this.speed = Math.max(this.speed + v, 0)
    }

    reset() {
        this.speed = 0
        this.orientation = 0
        this.position = {x: this.defaultPosition.x, y: this.defaultPosition.y, z: this.defaultPosition.z}
    }

    handleKeys(factor, timeSinceAppStart) {
        if (this.scene.gui.isKeyPressed("KeyW")) {
            this.accelerate(factor)
        }
        if (this.scene.gui.isKeyPressed("KeyS")) {
            this.accelerate(-factor)
        }
        if (this.scene.gui.isKeyPressed("KeyA")) {
            this.turn(factor)
        }
        if (this.scene.gui.isKeyPressed("KeyD")) {
            this.turn(-factor)
        }
        if (this.scene.gui.isKeyPressed("KeyR")) {
            this.reset()
        }
        if (this.scene.gui.isKeyPressed("KeyP")) {
            this.animatorGetEggUp.disable()
            this.animatorGetEggDown.enable(timeSinceAppStart)
        }
        if (this.scene.gui.isKeyPressed("KeyO")) {
            this.dropEgg(timeSinceAppStart);
        }
    }
}