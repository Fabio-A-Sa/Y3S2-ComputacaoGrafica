import {CGFobject} from '../lib/CGF.js';

export class MyUnitCube extends CGFobject {

	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
		   0.5, 0.5, -0.5,
           -0.5, 0.5, -0.5,
           -0.5, 0.5, 0.5,
           0.5, 0.5, 0.5,
           0.5, -0.5, -0.5,
           -0.5, -0.5, -0.5,
           -0.5, -0.5, 0.5,
           0.5, -0.5, 0.5,
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
            2, 3, 0,
            6, 5, 4,
            4, 7, 6,
            4, 0, 3,
            3, 7, 4,
            5, 1, 0,
            0, 4, 5,
            6, 2, 1,
            1, 5, 6,
            7, 3, 2,
            2, 6, 7
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

