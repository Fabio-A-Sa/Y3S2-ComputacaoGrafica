# Modelação Sólida

Têm uma representação fechada: qualquer operação com os sólidos deve resultar numa em modelos válidos. Uma malha poligonal qualquer que limite o sólido:
- Tem de ser fechada;
- Uma aresta está sempre entre duas faces;
- Um vértice liga-se a três arestas;
- Acrescenta-se uma normal orientada para o exterior do objeto;

## Tipos de representação de Objetos

### 1 - Representação por instanciação de Primitivas

Dadas várias primitivas (cubo, esfera, triângulo)e um conjunto de transformações gráficas é possível modelar objetos mais complexos. A cada apontador e instância de primitivas pode-se associar uma ou mais restrições. Os próprios objetos complexos também podem ser usados como primitivas de outros.

### 2 - Representação por Varrimento

O deslocamento, escalamento e rotação de um objeto segundo uma trajetória pode definir outro objeto. Precisa-se de um *shape* (forma a deslocar) e um *path* (conjunto de vectores que definem o deslocamento e rotação de um objeto).

### 3 - Representação pela Fronteira (*b-rep*)

Definidos pelas suas fronteiras lógicas, em termos de vértices, arestas e faces. Apenas consideram-se os sólidos com fronteira `2-mainfolds`, que são assegurados pelas fórmulas de Euler:

#### Fórmula de Euler

```note
V - E + F = 2
V - Vértices
E - Arestas
F - Faces
```

#### Fórmula de Euler Generalizada

```note
V - E + F - H = 2 (C - G)
V - Vértices
E - Arestas
F - Faces
H - Buracos nas faces
C - Número de partes do objeto
G - Número de buracos que atravessam o objeto
```

### 4 - Representação por Decomposição Espacial

#### 4.1 - Decomposição Celular

Existem um conjunto de células primitivas e parametrizáveis, que podem definir inclusive superfícies curvas. Pode admitir a composição de objectos mais complexos a partir de outros mais simples. Usa-se uma operação de colagem entre primitivas (apenas sobreposição). Nesta situação as primitivas podem não ser iguais.

#### 4.2 - Enumeração da Ocupação Espacial

É um caso particular da decomposição espacial onde um sólido é formado por células idênticas de igual volume, normalmente cubos (os chamados **voxels**) e um bit controla a sua presença ou ausência no espaço. O objecto é ocupado com uma lista única de células ocupadas.

Desvantagens:
- Quantidade de memória usada, se quisermos células em formato RGB;
- Precisão baixa, depende do tamanho do volume escolhido, que influencia também na memória gasta;

#### 4.3 - Octrees

Divisão adaptativa do volume à medida da necessidade. É um método recursivo que divide o volume em octantes e é proporcional à superfície do objecto porque a divisão só ocorre na superfície.

