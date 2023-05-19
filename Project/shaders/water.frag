#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
    
    if(vTextureCoord.y >= vTextureCoord.x + 0.13){
        gl_FragColor = texture2D(uSampler, vTextureCoord + vec2(timeFactor * 0.9, -timeFactor * 0.9));
    }else {
        gl_FragColor = texture2D(uSampler, vTextureCoord + vec2(0.08 * timeFactor, - 0.08 * timeFactor));
    }
}