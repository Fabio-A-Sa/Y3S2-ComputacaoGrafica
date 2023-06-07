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

A ordenação acontece sempre segundo Y e depois para todos os X dentro da mesma gama Y. A estrutura de dados pode ser representada como:

```note
(x1, x2, y)
```

Neste caso o algoritmo irá pintar os pixeis da linha horizontal compreendida entre (x1, y) e (x2, y).

### 2.2 - Algoritmo de lista de arestas ativas

