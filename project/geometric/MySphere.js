import { CGFobject } from '../../lib/CGF.js';

export class MySphere extends CGFobject {

    constructor(scene, radius, slices, stacks, inside=false, north=1, south=1) {
        super(scene);
        this.radius = radius;
        this.slices = slices;
        this.stacks = stacks;
        this.inside = inside ? -1 : 1;
        this.north = north;
        this.south = south;
        this.initBuffers();
    }

    initBuffers() {

        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        let angle;
        for (let h = 0; h <= this.stacks * 2; h += 1) {
            angle = - Math.PI / 2 + Math.PI * h / (2 * this.stacks);
            this.vertices.push(this.radius * Math.cos(angle), this.radius * Math.sin(angle), 0);
            this.normals.push(this.inside * Math.cos(angle), this.inside * Math.sin(angle), 0);
            this.texCoords.push(0, 1 - h / (this.stacks * 2));
        }

        let angleXZ, angleXY, x, y, z, points, indexA, indexB, indexC, indexD, y_factor;
        for (let i = 1; i <= this.slices + 1; i++) {

            angleXZ = 2 * Math.PI * i / this.slices;

            this.vertices.push(0, -this.radius , 0);
            this.texCoords.push(0, 1);
            this.normals.push(0, this.inside, 0);

            for (let j = 0; j <= this.stacks * 2; j++) {

                angleXY = - Math.PI / 2 + Math.PI * j / (2 * this.stacks);
                y_factor = angleXY >= 0 ? this.north : this.south;

                x = Math.cos(angleXZ) * Math.cos(angleXY);
                z = Math.sin(angleXZ) * Math.cos(angleXY);
                y = Math.sin(angleXY);
                
                this.vertices.push(this.radius * x, this.radius * y * y_factor, this.radius * z);
                this.normals.push(this.inside * x, this.inside * y, this.inside * z);
                this.texCoords.push(i / this.slices, 1 - j / (this.stacks * 2));
                points = this.vertices.length / 3;
                indexC = points - 2;
                indexD = points - 1;
                indexB = indexD - (this.stacks*2 + 1);
                indexA = indexB - 1;

                if (this.inside == -1) {
                    this.indices.push(indexA, indexC, indexD, indexA, indexD, indexB);
                } else {
                    this.indices.push(indexD, indexC, indexA, indexB, indexD, indexA);
                }
            }
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}