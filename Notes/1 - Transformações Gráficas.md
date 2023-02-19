# Transformações Gráficas

As transformações gráficas alteram a geometria (as coordenadas) da figura ou objecto seja em 2D ou em 3D. Há três tipos primitivos:
- Translação;
- Escalamento;
- Rotação;

## Transformações Gráficas em 2D

### Translação

A translação é uma operação **aditiva**. Seja o ponto (x, y) um qualquer vértice da figura a transformar, temos que:
- x_final = x + delta_x
- y_final = y + delta_y

A representação matricial da translação pode ser compreendida da seguinte forma:

```note
T(x,y) = [x_final, y_final, 0] = [1, 0, delta_x] * [x]
                                 [0, 1, delta_y]   [y]
                                 [0, 0, 1      ]   [0]
```

### Escalamento

O escalamento é uma operação **multiplicativa**. Seja o ponto (x, y) um qualquer vértice da figura a transformar, temos que:
- x_final = x * s_x
- y_final = y * s_y

Se os fatores de multiplicação `s_x` e `s_y` forem iguais temos um `escalamento uniforme`, senão temos uma `distorção` da figura inicial. A representação matricial do escalamento é a seguinte:

```note
S(x,y) = [x_final, y_final, 0] = [s_x,   0, 0] * [x]
                                 [  0, s_y, 0]   [y]
                                 [  0,   0, 1]   [0]
```

**Nota**: o escalamento tem implicitamente um fator de translação, pois define-se a partir da origem das coordenadas, no ponto (0, 0).

### Rotação

A rotação define-se em relação à origem do referencial escolhido. Em coordenadas polares, as coordenadas cartesianas tradicionais podem ser caracterizadas da seguinte maneira:
- x = raio * cos(ângulo)
- y = raio * sen(ângulo)
Onde o raio é a distância em linha reta até à origem e o ângulo é definido entre essa linha reta e o eixo das abcissas em sentido anti-horário. Um ponto (x, y) que tenha um ângulo de *alpha* graus rodado de *beta* graus tem as suas coordenadas finais calculadas assim:
- x_final = raio * cos(alpha + beta) = x * cos(beta) - y * sen (beta)
- y_final = raio * sen(alpha + beta) = 

## Transformações Gráficas em 3D

//SOON