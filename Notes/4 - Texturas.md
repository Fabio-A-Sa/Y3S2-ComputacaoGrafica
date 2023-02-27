# Texturas

As texturas usadas em Computação Gráfica têm coordenadas normalizadas entre 0 e 1, mesmo que não sejam quadradas, por motivos de modularidade e compatibilidade com futuras mudanças de código. Os eixos atribuídos não são (x, y) mas sim (u, v). Os píxeis nas imagens de texturas chamam-se **textels**.<br>

Existem três tipos de texturas:
- Texturas de `Mapeamento`, quando colocamos uma imagem a preencher o polígono;
- Texturas `Bump Mapping`, quando além da imagem em 2D cria-se sensações de relevo, como é o caso da casca de laranja, morango e tijolos;
- Texturas `3D`: por exemplo no mármore ou na madeira;