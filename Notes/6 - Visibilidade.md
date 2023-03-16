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

Método simples que se faz 