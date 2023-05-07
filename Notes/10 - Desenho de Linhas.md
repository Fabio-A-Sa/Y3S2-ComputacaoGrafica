# Desenho de Linhas

A otimização do desenho de linhas é relevante para aumentar a eficiência da aplicação que tem aos milhares e milhares de linhas desenhadas em cada segundo. Focaremos a atenção nos dispositivos tipo Raster, que cria uma imagem composta por linhas horizontais aos píxeis (linhas de varrimento). <br>
Em cada algoritmo, escolhem-se dois pontos (P1 e P2) e as linhas obtidas devem ser mais retas possíveis e terminar com precisão.

## Algoritmo DDA - Digital Differential Analysis

Entre dois pontos