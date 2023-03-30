# Iluminação Global

Para calcular a cor de cada ponto em função:
- Da `iluminação direta` de uma fonte de luz, idêntica ao que se fazia com o modelo de iluminação global;
- Da `iluminação indireta`, proveniente da soma de todas as reflexões das superfícies próximas;

## Ray Tracing

É uma extensão do algoritmo de **Ray Casting**, que depende da posição do observador (*view dependent algorithm*).

![Ray Tracing](../Images/RayTracing.png)

Em cada iteração, parte do raio incidente é convertido em raio refletido (coeficiente de reflexão) e raio absorvido, perdendo intensidade à medida do tempo e do espaço percorrido. A cada novo polígono temos de calcular o novo polígono mais próximo na direção complementar.

### Vantagens

- Sombras, reflexões e refrações são facilmente incorporadas;
- Simula os efeitos especulares;

### Desvantagens

- O custo do cálculo de interseções é muito elevada;
- Não simula bem os efeitos de iluminação difusa;

### Otimizações

#### 1 - Diminuição do número de raios a processar

- `Item Buffers`, pré-processamento através do algoritmo Z-Buffer, onde se determina as áreas do ecrã onde se situam os objetos;
- `Adaptative Tree-Depth Control`, usa-se uma profundidade limitada da árvore de *shading* para economizar recursos. Um nó com pouca influência na cor do pixel-root pode ser descartado; 
- `Light-Buffers`, a cada fonte de luz associam-se listas com os objetos que a rodeiam, os chamados *shadow feelers*. São verificados primeiro, porque há uma grande probabilidade do próximo raio incidir num polígono contido nessa lista;

#### 2 - Diminuição do número de interseções a testar

-
-
-

## Radiosidade

