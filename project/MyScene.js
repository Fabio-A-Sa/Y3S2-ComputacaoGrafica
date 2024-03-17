import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MyPanorama } from "./objects/MyPanorama.js";
import { MyBird } from "./objects/MyBird.js";
import { MyBirdEgg } from "./objects/MyBirdEgg.js";
import { MyTerrain } from "./objects/MyTerrain.js";
import { MyNest } from "./objects/MyNest.js";
import { MyTreeGroupPatch } from "./objects/MyTreeGroupPatch.js";
import { MyTreeRowPatch } from "./objects/MyTreeRowPatch.js";

export class MyScene extends CGFscene {

  constructor() {
    super();
  }

  init(application) {

    super.init(application);
    this.initCameras();
    this.initLights();

    // Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    // Textures
    this.enableTextures(true);
    this.initTextures();
    this.appearance = new CGFappearance(this);
    this.appearance.setTextureWrap('REPEAT', 'REPEAT');

    // Initialize scene objects
    this.panorama = new MyPanorama(this, this.panoramaTexture);
    this.terrain = new MyTerrain(this);
    this.nest = new MyNest(this, -70, -72.5, -15);
    this.eggs = [new MyBirdEgg(this, 80, -71, 20),
    new MyBirdEgg(this, 60, -71, 20),
    new MyBirdEgg(this, 60, -71, 0),
    new MyBirdEgg(this, 80, -71, 0)]
    this.bird = new MyBird(this, 0, 0, 0, this.eggs, this.nest);

    // Trees
    this.treeGroupPatch = new MyTreeGroupPatch(this, 75, -71, 25, 15, this.treeTextures);
    this.treeRowPatch = new MyTreeRowPatch(this, 10, -71, -60, 15, this.treeTextures, 45);

    // Objects connected to MyInterface
    this.displayTerrain = true;
    this.displayPanorama = true;
    this.displayTrees = true;
    this.displayBird = true;
    this.displayNest = true;
    this.displayEggs = true;
    this.wind = true;
    this.infinitePanorama = false;
    this.scaleFactor = 1;
    this.speedFactor = 1;
    this.windStrength = 0.1;
    this.windAngle = 0;
    this.birdFocus = true;

    // set the scene update period in milliseconds
    this.setUpdatePeriod(50);

    // set current time in milliseconds
    this.appStartTime = Date.now();
  }

  initTextures() {
    this.heightMap = new CGFtexture(this, "images/heightmap.jpg");
    this.panoramaTexture = new CGFtexture(this, "images/panorama.jpg");
    this.treeTextures = [
      new CGFtexture(this, "images/billboardtree1.png"),
      new CGFtexture(this, "images/billboardtree2.png"),
      new CGFtexture(this, "images/billboardtree3.png"),
    ]
  }

  initLights() {
    this.lights[0].setPosition(-200 , 200, 200, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }

  initCameras() {
    this.camera = new CGFcamera(
      1.0,
      0.1,
      1000,
      vec3.fromValues(5, 5, 5),
      vec3.fromValues(0, 0, 0)
    );
  }

  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }

  display() {

    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    this.lights[0].update();

    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // ---- BEGIN Primitive drawing section

    if (this.displayPanorama) this.panorama.display();
    if (this.displayTerrain) this.terrain.display();
    if (this.displayBird) this.bird.display();
    if (this.displayNest) this.nest.display();

    // Trees
    if (this.displayTrees) {
      this.treeRowPatch.display();
      this.treeGroupPatch.display();
    }

    // Eggs
    if (this.displayEggs) {
      for (let i = 0; i < this.eggs.length; i++) {
        if (this.eggs[i] != null) this.eggs[i].display();
      }
    }
  }

  update(time) {

    let timeSinceAppStart = (time - this.appStartTime) / 1000.0;
    this.bird.update(timeSinceAppStart, this.scaleFactor, this.speedFactor);
    this.nest.update(timeSinceAppStart);
    this.terrain.update(timeSinceAppStart);

    // Trees
    if (this.wind) {
      this.treeGroupPatch.update(timeSinceAppStart, this.windAngle, this.windStrength);
      this.treeRowPatch.update(timeSinceAppStart, this.windAngle, this.windStrength);
    }

    // Update camera target
    if (this.birdFocus)
      this.camera.setTarget(vec3.fromValues(this.bird.position.x, this.bird.position.y, this.bird.position.z))
  } 
}
