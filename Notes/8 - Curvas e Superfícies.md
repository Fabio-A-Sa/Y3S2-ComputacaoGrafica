# Curvas e Superfícies

A representação das superfícies descrevem objetos através das suas faces. Podemos ter três tipos de representação:

- Malhas poligonais
- Superfícies paramétricas bicúbicas;
- Superfícies quadráticas;

## Malhas Poligonais

Quando a curva é aproximada por um conjunto de polígonos, arestas e vértices. É um método aproximado. Características das malhas poligonais:

- Um polígono liga sempre dois vértices;
- Um polígono é definido por um conjunto fechado de arestas;
- Uma aresta é ligada por um ou dois polígonos adjacentes;
- Um vértice é partilhado por pelo menos duas arestas;
- Todas as arestas estão ligadas a pelo menos dois polígonos;

### Representação das Malhas Poligonais

#### 1 - Representação Explícita

Conjunto de coordenadas de todos os vértices (x, y, z). As entidades presentes são as faces e os vértices, as arestas estão implícitas.

Problemas com este modo de representação:
- Tem vértices repetidos, consumo de memória;
- Arestas implícitas;
- Vértices em comum implícitos, demora a pesquisar quais são;
- A mesma aresta é desenhada duas vezes;
- Ao arrastar um vértice (*update* de alguma coordenada), é necessário calcular todas as novas arestas que partilham aquele vértice;

#### 2 - Representação por apontadores para listas de vértices

#### 3 - Representação por apontadores para listas de arestas

#### 4 - Solução de Baumgart

