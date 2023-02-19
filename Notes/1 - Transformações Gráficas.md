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
T(x,y) = [x_final, y_final] = [1, 0, delta_x] * [x]
                              [0, 1, delta_y]   [y]
                              [0, 0, 1      ]   [z]
```

### Escalamento

O escalamento é uma operação **multiplicativa**. Seja o ponto (x, y) um qualquer vértice da figura a transformar, temos que:
- x_final = x * s_x
- y_final = y * y_x

Se os fatores de multiplicação `s_x` e `s_y` forem iguais temos um `escalamento uniforme`, senão temos uma `distorção` da figura inicial. A representação matricial do escalamento é a seguinte:

```note
S(x,y) = [x_final, y_final] = [s_x,   0, 0] * [x]
                              [  0, s_y, 0]   [y]
                              [  0,   0, 1]   [z]
```

**Nota**: o escalamento tem implicitamente um fator de translação, pois define-se a partir da origem das coordenadas, no ponto (0, 0).

### Rotação



## Transformações Gráficas em 3D

//SOON