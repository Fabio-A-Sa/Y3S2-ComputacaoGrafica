#ifdef GL_ES
precision highp float;
#endif

varying vec4 vert;

struct lightProperties {
    vec4 position;                  
    vec4 ambient;                   
    vec4 diffuse;                   
    vec4 specular;                  
    vec4 half_vector;
    vec3 spot_direction;            
    float spot_exponent;            
    float spot_cutoff;              
    float constant_attenuation;     
    float linear_attenuation;       
    float quadratic_attenuation;    
    bool enabled;                   
};

#define NUMBER_OF_LIGHTS 8
uniform lightProperties uLight[NUMBER_OF_LIGHTS];

void main() {
    if(vert.y >= 0.5) {
        gl_FragColor =  vec4(1.0, 1.0, 0.0, 1.0) * uLight[0].diffuse;
    } else {
        gl_FragColor =  vec4(0.0, 0.0, 1.0, 1.0) * uLight[0].diffuse;
    }
}