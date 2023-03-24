# Visibilidade

## Síntese de Imagem

Sintese de Imagem ou *rendering* é a criação de imagens usando a computação com elevado grau de realismo a partir da geometria e interação com a luz e o seu posicionamento. Pode conter relevo, texturas, sombras, penumbra, etc.

## Visibilidade

É um problema semelhante à parte do cálculo de sombras. Há três tipos de algoritmos disponíveis:

### Algoritmos no Espaço Imagem

Para cada píxel na imagem, ao mesmo tempo que calcula a cor, calcula a sua visibilidade. Determina o objeto que está mais próximo do observador e calcula com base nesse primeiro pixel.

### Algoritmos no Espaço Objeto

Compara os objetos entre si de modo a seleciar a parte visível de cada um. 

### Algoritmos tipo Lista de Prioridades

Como os algoritmo de Newel e Sacha e o algoritmo da Binary Space-Partitioning Trees. É uma interpretação do conhecido "Algoritmo do Pintor".

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

### Algoritmos do Espaço Imagem

#### 1 - Algoritmo de Warnock 

Algoritmo orientado à área e recursivo:
- Se a área é coerente, desenha;
- Senão, divide em quatro partes e recursivamente aplica o algoritmo;

O significado de coerente se o polígono ocupar toda a área, não ocupar nenhuma, ou apenas um polígono interseta essa área, sem ser confundido com o próprio fundo.

#### 2 - Algoritmo de Linha de Varrimento

Algoritmo que usa três estruturas de dados para guardar o estado atual da pesquisa:
- `AEL`, Lista de Arestas Ativas;
- `ET`, Tabela de Novas Arestas;
- `PT`, Tabela de Polígonos;

A imagem é criada linha a linha, e explora dois conceitos:
- Coerência **vertical**, o conjunto de objetos visíveis determinados para uma linha de varrimento, difere pouco do conjunto correspondente da linha anterior;
- Coerência de **aresta**, uma aresta só altera a visibilidade quando se cruza com outra aresta visível ou quando penetra numa face;

Tabela de Arestas guara informação de todas as arestas cuja projeção no plano de visualização não é horizontal. As entradas da tabela estão ordenadas de forma crescente pelo valor de Y. Contém também a altura da aresta, de modo que esta seja decrementada e a partir daí sabe-se quando esta não está mais ativa na *scanline*.

Tabela de Polígonos tem informação de todo os polígonos, contendo para cada um a equação do plano, informação da cor, a coordenada Z a recalcular em cada píxel, e uma flag de *in-out* para controlar se o processamento está dentro ou fora do polígono.

Lista de Arestas ativas contém informação ordenada pelo eixo X de todas as arestas ativas na linha de varrimento atual.

#### 3 - Algoritmo Z-Buffer

Mais simples de implementar em software e em hardware. Não exige qualquer tipo de pré-ordenação e nem efetua comparações objeto a objeto. Cria-se dois buffers:
- `Frame buffer`, contém a imagem final, pixel a pixel;
- `Depth buffer`, contém os valores de Z, pixel a pixel. O valor máximo (mais distante ao observador) é 0;

Algoritmo:

- Preparar o frame buffer, visitando toda a janela visível e pintando-a com a cor de background;
- Preparar o depth buffer, visitando toda a janela visível e pintando-a com o valor 0 (distância máxima);
- Para cada polígono e para cada pixel determina a distância ao observador;
- Se a distância for maior a que já lá estava, então 
    - no frame buffer colocar o píxel
    - no depth buffer colocar o valor de z atualizado

#### 4 - Ray Casting

O objeto com a menor distância ao observador é o atingido primeiro. Depois tenta chegar à luz com uma linha reta: se chegar à luz então está visível, senão está invisível.

### Algoritmos tipo Lista de Prioridades

#### 1 - Algoritmo de Newel, Newel e Sacha

Também conhecido como