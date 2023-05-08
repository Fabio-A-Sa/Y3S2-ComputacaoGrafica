# Desenho de Linhas

A otimização do desenho de linhas é relevante para aumentar a eficiência da aplicação que tem aos milhares e milhares de linhas desenhadas em cada segundo. Focaremos a atenção nos dispositivos tipo Raster, que cria uma imagem composta por linhas horizontais aos píxeis (linhas de varrimento). <br>
Em cada algoritmo, escolhem-se dois pontos (P1 e P2) e as linhas obtidas devem ser mais retas possíveis e terminar com precisão, sempre desenhadas no primeiro octante (m <= 1).

## 1 - Algoritmo DDA - Digital Differential Analysis

- Equação reduzida da reta;
- Calcula o Y em função do X, arredondado para inteiro;
- O X leva incrementos de 1 unidade;

### Desvantagens

- Precisa de uma divisão para calcular o M da equação;
- Há operações com floats, muito mais lentas do que com inteiros;
- Floats têm sempre erros de representação;


