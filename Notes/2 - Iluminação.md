# Iluminação

Uma fonte de luz, que não passa de energia, é sempre necessária para ver os objectos. Transmite-se em linha reta e em todas as direções. Qualquer superfície é capaz de refletir e absorver energia e é essa reflexão que permite a observação dos objetos. Há dois tipos de reflexão:

### Reflexão Difusa

Quando há reflexão em todas as direções igualmente. O envelope é de raio constante, uma semiesfera, e todos os raios têm a mesma amplitude. Acontece em superfícies baças / mate e a sua observação não depende da posição / ângulo do observador. A amplitude dos raios refletidos, dimensão do envelope, depende da capacidade de reflexão da superfície:
- Superficie mais escura ou com coeficiente de reflexão baixo: amplitude menor;
- Superficie mais clara ou com coeficiente de reflexão alto: amplitude maior;

### Reflexão Especular

Os raios não são refletidos todos com a mesma amplitude. A maior amplitude coincide com o ângulo de reflexão e à medida que nos afastamos desse ângulo diminui, formando um envelope elipsoide. <br>
Em casos de superfícies polidas, lisas, espelho (superfície **ideal** ou **pura**) existe apenas um único raio refletido. 

## Modelo de Iluminação Elementar

A iluminação em Computação Gráfica é implementada somando três componentes:
- Iluminação ambiente;
- Iluminação difusa;
- Iluminação especular;

### Iluminação Ambiente

```note
Iambiente = Ka * Ia
    - Ka: coeficiente de reflexão ambiente da face
    - Ia: intensidade observada
```

A intensidade é constante em todas as direções. Se considerarmos apenas esta componente para definir a luz refletida pelo objeto então todas as faces teriam a mesma intensidade luminosa e as arestas não se distinguem.

### Iluminação Difusa



### Iluminação Especular