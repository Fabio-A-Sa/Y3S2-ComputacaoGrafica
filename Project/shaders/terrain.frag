#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying float height;
uniform sampler2D terrain;
uniform sampler2D heightmap;
uniform sampler2D altimetry;
uniform float terrain_weigth;
uniform float altimetry_weigth;

float calculateTextureCoord(float y) {
    return -(y*y*26.0) + 0.99;
}

void main() {
    gl_FragColor = terrain_weigth * vec4(texture2D(terrain, vTextureCoord)) + altimetry_weigth * vec4(texture2D(altimetry, vec2(0, calculateTextureCoord(height))));
}

