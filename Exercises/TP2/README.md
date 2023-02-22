# CG 2022/2023

## Group T05G04

## TP 2 Notes

- No exercício 1, a partir das figuras criadas na aula TP1 foi possível criar uma única `MyTangram.js` através de transformações gráficas em 3D. A parte mais complicada foi organizar as peças, principalmente o "MyDiamond", porque nem sempre os valores a aplicar nas transformações são inteiros (diagonais dos triângulos). Adicionamos também uma *checkbox* para controlar a visibilidade do tangram.

![Tangram](screenshots/cg-t05g04-tp2-1.png)
<p align="center">Figure 1: Tangram</p>

- No exercício 2 construímos um cubo unitário centrado na origem do referencial. Para isso foi necessário indicar as coordenadas dos 8 vértices e os 12 triângulos constituintes da malha, com principal atenção para que todas as faces externas do cubo ficassem visíveis. Combinamos as duas figuras anteriores e após rodarmos as mesmas pelo eixo X conseguimos com que ficassem paralelas ao plano XZ.

![MyUnitCube](screenshots/cg-t05g04-tp2-2a.png)
<p align="center">Figure 2: MyUnitCube</p>

![Tangram and UnitCube](screenshots/cg-t05g04-tp2-2b.png)
<p align="center">Figure 3: Tangram and UnitCube</p>

- No exercício 3 construímos outro cubo unitário, desta vez usando um plano quadrado como base (constituído por sua vez por dois triângulos). Esta estratégia foi mais simples de implementar pois é modular. Ao substituirmos a figura "MyUnitCube" por "MyUnitCubeQuad" o aspeto final da composição manteve-se igual, tal como esperado.

![Tangram and UnitCubeQuad](screenshots/cg-t05g04-tp2-3.png)
<p align="center">Figure 4: Tangram and UnitCubeQuad</p>