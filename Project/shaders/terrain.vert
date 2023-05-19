attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform sampler2D terrain;
uniform sampler2D heightmap;
varying vec2 vTextureCoord;
varying float height;

void main() {
    vTextureCoord = aTextureCoord;
    vec3 offset = aVertexNormal * 0.2 * texture2D(heightmap, vTextureCoord).b;
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
    height = offset.z;

}