# Visibilidade

## Síntese de Imagem

Sintese de Imagem ou *rendering* é a criação de imagens usando a computação com elevado grau de realismo a partir da geometria e interação com a luz e o seu posicionamento. Pode conter relevo, texturas, sombras, penumbra, etc.

## Visibilidade

É um problema semelhante à parte do cálculo de sombras. Há dois tipos de algoritmos disponíveis:

### Algoritmos no Espaço Imagem

Para cada píxel na imagem, ao mesmo tempo que calcula a cor, calcula a sua visibilidade. Determina o objeto que está mais próximo do observador e calcula com base nesse primeiro pixel.

### Algoritmos no Espaço Objeto

Compara os objetos entre si de modo a seleciar a parte visível de cada um. 

## Backface Culling

Método simples que se faz em WebGL que tem como principal objetivo deitar fora as faces, vértices e arestas não visíveis. De facto, o observador só vê cerca de metade da dimensão dos objetos e dos polígonos. Só aqueles que possuem normal que faz um ângulo inferior a 90 graus em relação ao vetor visualizador é que são desenhados no ecrã. Só precisa de saber o sinal do produto escalar entree esses dois vetores:
- Se negativo, então não desenha
- Se positivo, desenha

### Algoritmos do Espaço Objeto

#### 1 - Algoritmo de Roberts

Testa cada aresta contra o perfil de volumes de poliedros convexos. Os eventos de mudança de estado são:
- Aresta completamente oculta
- Aresta não oculta
- Uma parte da aresta não é oculta
- Duas partes da aresta não estão ocultas

#### 2 - Algoritmo de Appel e outros

Testa cada aresta contra outra aresta. Calcula a quantidade de invisibilidade (QI). Cada ponto tem inicialmente QI nulo, e no final representa o número de poligonos que estão entre o observador e cada ponto. O ponto é visível se o seu QI for nulo. <br>
Para cada objeto:
- Calcula num ponto o seu QI;
- Visita o grafo de vértices usando a coerência espacial;
- Compara com outras arestas;

#### 3 - Algoritmo de Atherton & Weiller

Algoritmo de cálculo de visibilidade que se divide em várias partes. Admite-se que o observador está em coordenadas Z infinitas, para que os raios de observação sejam perpendiculares à cena por simplificação.

- Ordena os polígonos por ordem de coordenadas, dos mais próximos para os mais afastados;
- Com o primeiro da lista corta os outros todos;
- Classifica em duas listas os polígonos: os visíveis e os invisíveis, alguns tem várias partes;
- Repete para todas as outras figuras menos a última, pois essa não corta mais nenhum objeto;

O problema de ordenação pode não ser o mais correto: tem apenas as coordenadas Z e objetos quase planos. Normalmente pega-se no vértice mais próximo do observador, mas mesmo assim não pode ser o suficiente para objetos complexos (côncavos).

