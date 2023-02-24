# Sombras

Os objectos que estão na sombra só são iluminados pela componente de luz **ambiente**. Para casos onde não existe luz pontual, ou seja, a luz é representada por uma linha, então podem existir zonas de **penumbra**, onde só algumas luzes conseguem iluminar a zona.

## Algoritmos de Projeção de Sombras

São semelhantes aos algoritmos de cálculo de visibilidade pois ao substituirmos um observador pela fonte de luz:
- visível == iluminado
- oculto == sombra

### 1 - Algoritmo de Atheton & Weillez (A&W)

Os dados de entrada e de saída são os mesmos, todos são polígonos. Há separação em cada iteração (por cada luz) do que está visível/iluminado. Alguns polígonos são cortados pois podem estar parcialmente iluminados. <br>
O algoritmo é mais exato quando é aplicado sob o ponto de vista das fontes de luz e só depois para o observador.

### 2 - 