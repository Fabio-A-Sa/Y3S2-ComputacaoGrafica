import {CGFobject} from '../lib/CGF.js';

export class MyQuad extends CGFobject {

	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
        
		this.vertices = [
            0.5, 0, -0.5,
            -0.5, 0, -0.5,
            -0.5, 0, 0.5,
            0.5, 0, 0.5,
		];

		this.indices = [
			0, 1, 2,
            2, 3, 0
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

