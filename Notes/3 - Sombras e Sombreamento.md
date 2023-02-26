# Sombras e Sombreamento

## Sombras

Os objectos que estão na sombra só são iluminados pela componente de luz **ambiente**. Para casos onde não existe luz pontual, ou seja, a luz é representada por uma linha, então podem existir zonas de **penumbra**, onde só algumas luzes conseguem iluminar a zona.

### Algoritmos de Projeção de Sombras

São semelhantes aos algoritmos de cálculo de visibilidade pois ao substituirmos um observador pela fonte de luz:
- visível == iluminado
- oculto == sombra

### 1 - Algoritmo de Atheton & Weillez (A&W)

Os dados de entrada e de saída são os mesmos, todos são polígonos. Há separação em cada iteração (por cada luz) do que está visível/iluminado. Alguns polígonos são cortados pois podem estar parcialmente iluminados. <br>
O algoritmo é mais exato quando é aplicado sob o ponto de vista das fontes de luz e só depois para o observador.

### 2 - Algoritmo de Ray-Casting

A cor colocada no ecrã é a cor do ponto de interseção da linha que liga o observador ao píxel do primeiro objeto (o objeto visível). Para saber se esse píxel é iluminado, traça um raio que vai desse ponto mais próximo ao observador até à fonte de luz. Se a linha não colidir com mais nenhum objecto o ponto é iluminado.

### 3 - Algoritmo do Volume de Sombras (BSP)

Através da modelação BSP (*Binary Space Partition*) e caracterização do polígono mais próximo à fonte de luz é possível definir um polígono de sombras (muito provavelmente de maior área) atrás do primeiro.

### 4 - Algoritmo Z-Buffer

Gasta mais memória do que os outros mas implementado em hardware é mais rápido. Atualmente 1/10 dos cálculos realizados das placas gráficas devem-se a este processo. A estudar em breve.

## Sombreamento

Serve para calcular o grau de iluminação em todos os pontos de uma superfície ou polígono. Como o número de pontos numa superfície é infinito convém calcular a luminosidade para alguns e fazer aproximações entre eles através das normais. <br>
Existem três principais modelos de sombreamento:

### 1 - Sombreamento Constante

A cor é calculada apenas para um ponto do poligono e propagada em toda a superfície plana. A técnica consiste em considerar que tanto a fonte de luz como o observador estão no infinito, assim as normais em toda a superfície são aproximadamente iguais. <br>
Com este modelo não é possível disfarçar a presença de arestas em objectos curvos, pelo que a **função de iluminação é descontínua**. <br>
Acontece o efeito `Mach Band`: em zonas de transição do tipo de sombreamento, como em arestas, a parte mais escura parece ainda mais escura e a parte mais clara parece ainda mais clara. É um fenómeno ótico.

### 2 - Sombreamento Interpolado / Suavisado

É necessário conhecer as normais dos vértices e de mais alguns pontos ao longo da superfície. A normal de um vértice é a normal ponderada média de todas as faces poligonais vizinhas. Existem dois algoritmos para implementar esta técnica:

#### 2.A - Método de Gouraud

Calcula a cor de cada vértice através da sua normal e modelo de iluminação em vigor. Depois calcula a cor de cada aresta por interpolação e a cor de todos os pontos do polígono por interpolação horizontal, ou seja, pela **scanline**. <br>
Aqui a função de iluminação é contínua, embora a sua derivada nas arestas e vértices seja descontínua. Continua a haver efeito `Mach Band`, mas agora menos presente à vista humana. Este método é pouco preciso pois os mais altos brilhos (zonas de maior luminosidade) só podem ser sentidos nos vértices e arestas e nunca no centro do objeto.

#### 2.B - Método de Phong