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

### 3 - Representação pela Fronteira (*b-rep*)