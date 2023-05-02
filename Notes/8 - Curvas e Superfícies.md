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

Existe uma lista de vértices (x, y, z) e uma lista de polígonos, em que cada polígono é representado por apontadores para vértices.

Vantagens do método:
- Cada vértice é guardado uma vez apenas;
- A coordenada de um vértice é facilmente alterada;

Desvantagens do método:
- É difícil obter os polígonos que partilham uma dada aresta;
- As arestas continuam a ser desenhasas mais do que uma vez;

#### 3 - Representação por apontadores para listas de arestas

Existe uma lista de vértices (x, y, z), uma lista de polígonos caracterizada por apontadores para vértices e uma lista de arestas caracterizada por um par de vértices (os dois vértices da aresta) e por um par de polígonos (os polígonos comuns da aresta). Como a aresta pode ser comum a um só polígono se for uma aresta mais externa, então o segundo apontador é nulo.

Vantagens do método:
- Desenha só uma aresta, sem qualquer repetição;
- É fácil de fazer clipping, porque para colorir o polígono usa-se a lista de polígonos;

Desvantagens do método:
- Ainda não sabemos de forma eficiente dado um vértice X quais são as arestas que estão ligadas a este;

#### 4 - Solução de Baumgart

Cada vértice tem um apontador para uma sua aresta. Cada aresta tem, para cada vértice, um apontador ou dois apontadores para a próxima aresta partilhada. A lista é assim ligada ou duplamente ligada.

