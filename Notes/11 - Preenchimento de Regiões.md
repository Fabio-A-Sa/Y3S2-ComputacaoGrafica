# Preenchimento de Regiões

## Conectividade

![Conectividade](../Images/Conectividade.png)

## 1 - Preenchimento segundo o contorno existente

### 1.1 - Por difusão (flood fill)

#### 1.1.1 - Limitado pelo contorno

Chamada recursiva a 4 ou 8 vizinhos, pára quando chegar ao contorno. Há problemas com froteiras incompletas e há consumo da stack.

#### 1.1.2 - Limitado ao interior da região

Chamada recursiva a 4 ou 8 vizinhos, pára quando chegar a uma cor que não é conhecida como sendo interior da região. Agora as fronteiras já podem ser incompletas, mas a stack continua a ser bastante usada.

### 1.2 - Por análise de contorno

Mais eficiente que os outros tópicos. Parte do ponto inicial, situado algures no interior, e apenas coloca na pilha alguns pontos. Algoritmo:

- Parte de um ponto interior, que começa por ser colocado na pilha;
- Se a pilha estiver vazia, o programa termina;
- Senão, retira-o da pilha e visita para a direita e em seguida para a esquerda, tomando nota do XLeft e XRight;
- Nas linhas imediatamente acima e abaixo encontra, até ao intervalo XLeft e XRight, os novos pontos de partida e coloca-os na pilha;
- Configura um ponto de partida:
    - Píxel de coordenada XRight;
    - Píxel imediatamente antes de um píxel do contorno;

## 2 - Preenchimento por varrimento segundo descrição de contorno

### 2.1 - Algoritmo de lista de pontos de fronteira ordenados

O algoritmo determina os pontos de interseção das arestas com as linhas de varrimento do ecrã e ordena-os. Os pontos a preencher estão entre pares de pontos.

Desvantagem do algoritmo:
- A ordenação dos pontos pode ser um proceso lento por envolver um elevado número de pontos;
- A estrutura de dados *naive* não é adequada, multiplos valores de Y repetidos;
- Pode não funcionar correctamente para figuras que possuam vértices duplos;

A ordenação acontece sempre segundo Y e depois para todos os X dentro da mesma gama Y. A estrutura de dados pode ser representada como:

```note
(x1, x2, y)
```

Neste caso o algoritmo irá pintar os pixeis da linha horizontal compreendida entre (x1, y) e (x2, y).

A estrutura de dados pode ainda ser melhorada se a cada Y corresponder uma lista de valores de X, obviamente pares, para que os valores de Y não sejam duplicados.

### 2.2 - Algoritmo de lista de arestas ativas

Dadas as informações sobre as arestas ativas por cada linha horizontal, é simples e económico a nível de memória determinar os pontos de interseção e consequentemente a zona a pintar. Para isso uma **lista de arestas ativas** é mantida para cada região de Y.

- Se o vértice for `simples`, a altura da aresta é: y2 - y1
- Se o vértice for `duplo`, a altura da aresta é: y2 - y1 + 1

As arestas são definidas por um tuplo de três valores:

```
(X, DX, LongY)
X - a coordenada X inicial, do primeiro vértice a contar de cima para baixo;
DX - o valor a adicionar a X se Y for incrementado de uma unidade;
LongY - a altura da aresta. após este valor a aresta morre;
```