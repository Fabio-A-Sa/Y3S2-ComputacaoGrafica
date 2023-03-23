#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {

	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 new_sepia = color;

	new_sepia.r = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
	new_sepia.g = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
	new_sepia.b = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
	
	gl_FragColor = new_sepia;
}