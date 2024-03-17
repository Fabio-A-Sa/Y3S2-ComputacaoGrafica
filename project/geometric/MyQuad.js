import { CGFobject } from '../../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            0.5, 0, -0.5,	    //0
            0.5, 0, 0.5,	    //1
            -0.5, 0, 0.5,	    //2
            -0.5, 0, -0.5,	    //3
            0.5, 0, -0.5,	    //0 - 4
            0.5, 0, 0.5,	    //1 - 5
            -0.5, 0, 0.5,	    //2 - 6
            -0.5, 0, -0.5,	    //3 - 7
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            3, 0, 1,
            3, 1, 2,
            5, 4, 7,
            6, 5, 7
        ];

        this.normals = [
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0, 
        ];
        
        this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0,
            0, 1,
			1, 1,
			0, 0,
			1, 0
		]

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

