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



#### 2 - Diminuição do número de interseções a testar



## Radiosidade

