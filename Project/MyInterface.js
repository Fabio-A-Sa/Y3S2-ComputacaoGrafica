import {CGFinterface, dat} from '../lib/CGF.js';

/**
 * MyInterface
 * @constructor
 */
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);

        // init GUI. For more information on the methods, check:
        // https://github.com/dataarts/dat.gui/blob/master/API.md
        this.gui = new dat.GUI();

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTerrain').name('Terrain');
        this.gui.add(this.scene, 'displayPanorama').name('Panorama');
        this.gui.add(this.scene, 'displayBird').name('Bird');
        this.gui.add(this.scene, 'displayNest').name('Nest');
        this.gui.add(this.scene, 'displayEggs').name('Eggs');
        this.gui.add(this.scene, 'displayTrees').name('Trees');
        this.gui.add(this.scene, 'wind').name('Wind');
        this.gui.add(this.scene, 'infinitePanorama').name('Inf Panorama')
        this.gui.add(this.scene, 'birdFocus').name('Focus Bird');

        //Slider elements in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3).name('Scale Factor');
        this.gui.add(this.scene, 'speedFactor', 0.1, 3).name('Speed Factor');
        this.gui.add(this.scene, 'windAngle', 0, 360).name('Wind Angle');
        this.gui.add(this.scene, 'windStrength', 0, 1).name('Wind Strength');

        this.initKeys();
        return true;
    }

    initKeys() {
        this.scene.gui = this;
        this.processKeyboard = function () {};
        this.activeKeys = {};
    }

    processKeyDown(event) {
        this.activeKeys[event.code] = true;
    }

    processKeyUp(event) {
        this.activeKeys[event.code] = false;
    }

    isKeyPressed(keycode) {
        return this.activeKeys[keycode] || false;
    }
}