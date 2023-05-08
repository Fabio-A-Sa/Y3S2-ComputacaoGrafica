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

## 2 - Rasterização de Segmentos de Reta

### 2.1 - Algoritmo Midpoint para Retas

- A equação da reta pode ser vista como f(x, y) => bx - ay = 0;
- Seja `e` o valor da distância do ponto M ao que interseta a reta NE-E, o píxel seguinte pode ser o de NE (e > 0) ou E (e < 0);

### Desvantagens:

- Cálculo do valor inicial do e (b - a/2)

### Solução:

- Se multiplicarmos tudo por 2 acaba por ser simples e sem qualquer float;
- e = e + 2b - a
- se NE: d = d + 2b - 2a
- se  E: d = d + 2b

