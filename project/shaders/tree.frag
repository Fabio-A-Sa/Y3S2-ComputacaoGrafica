#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D texture;

void main() {
    vec4 colorTexture = texture2D(texture, vTextureCoord);
    if (colorTexture.a < 1.0) {
        discard;
    } else {
        gl_FragColor = vec4(colorTexture.rgb, 1.0);
    }
}