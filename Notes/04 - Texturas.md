# Texturas

As texturas usadas em Computação Gráfica têm coordenadas normalizadas entre 0 e 1, mesmo que não sejam quadradas, por motivos de modularidade e compatibilidade com futuras mudanças de código. Os eixos atribuídos não são (x, y) mas sim (u, v). Os píxeis nas imagens de texturas chamam-se **textels**.<br>

O algoritmo de atribuição/mapeamento de texturas é simples: do píxel para o objeto e do objeto para a textura. Um pixel pode, por isso, dar origem a vários textels. A cor do pixel pode ser dada:
- pela cor de um textel arbitrário da área;
- pela cor média de cada textel na área, completos e incompletos;
- pela média pesada de cada textel, principalmente quando existe uma quebra grande nas cores da área;

Os dois últimos critérios, que usam um **filtro linear**, são melhores para termos uma imagem menos desfocada possível. 

Existem três tipos de texturas:
- Texturas de `Mapeamento`, quando colocamos uma imagem a preencher o polígono;
- Texturas `Bump Mapping`, quando além da imagem em 2D cria-se sensações de relevo, como é o caso da casca de laranja, morango e tijolos. Resulta de uma manipulação das normais nesses pontos;
- Texturas `3D` / texturas `procedimentais`: por exemplo no mármore ou na madeira. Existe uma função que retorna, a partir de umas coordenadas (x, y, z) do objeto, a cor desse píxel. É um processo complexo e demorado;