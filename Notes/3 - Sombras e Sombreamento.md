# Sombras e Sombreamento

Os objectos que estão na sombra só são iluminados pela componente de luz **ambiente**. Para casos onde não existe luz pontual, ou seja, a luz é representada por uma linha, então podem existir zonas de **penumbra**, onde só algumas luzes conseguem iluminar a zona.

## Algoritmos de Projeção de Sombras

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

