# Preenchimento de Regiões

## Conectividade

![Conectividade](../Images/Conectividade.png)

## 1 - Preenchimento segundo o contorno existente

### 1.1 - Por difusão (flood fill)

#### 1.1.1 - Limitado pelo contorno

Chamada recursiva a 4 ou 8 vizinhos, pára quando chegar ao contorno. 

#### 1.1.2 - Limitado ao interior da região

Chamada recursiva a 4 ou 8 vizinhos, pára quando chegar a uma cor que não é conhecida como sendo interior da região. 

### 1.2 - Por análise de contorno



## 2 - Preenchimento por varrimento segundo descrição de contorno

//TODO