attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;
uniform sampler2D waterMap;
varying vec2 vTextureCoord;

void main() {
	vTextureCoord = aTextureCoord;
	vec3 offset = aVertexNormal * 0.1 * texture2D(waterMap, vTextureCoord + vec2(0.1*timeFactor, 0.1*timeFactor)).b;
	vec3 finalPosition = aVertexPosition + offset;
	if(finalPosition.z > 0.08){
		finalPosition.z = 0.08;
	}

	if(finalPosition.z < 0.07){
		finalPosition.z = 0.07;
	}
	
	gl_Position = uPMatrix * uMVMatrix * vec4(finalPosition, 1.0);
}