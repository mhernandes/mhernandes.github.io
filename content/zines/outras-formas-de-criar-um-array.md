---
title: "Outras formas de criar um array!"
date: 2021-04-14T03:17:11-03:00
thumbnail: "Outras_formas_de_criar_um_array.jpg"
thumbnailAlt: "Arte do zine sobre arrays em JavaScript, explicando os métodos Array.from() e Array.of() para criar novos arrays"
description: "Além dos métodos tradicionais como o new Array(), temos outras duas funções nativas do Array que nos auxiliam na hora de criar um array!"
images:
 - "/images/zines/arrays-em-js/Outras_formas_de_criar_um_array.jpg"
tag:
- arrays-em-js
zine: "arrays-em-js"
---

Além dos métodos tradicionais, temos outras duas funções nativas do Array que nos auxiliam na hora de criar um array!

## Array.from(semelhante, map)

Essa função cria um novo array a partir de qualquer valor que seja semelhante a um array, como uma string, um objeto, map ou até um set. Além disso, também pode executar uma função map, caso seja fornecido como segundo parâmetro.

```javascript
// A partir de uma string
Array.from('lista') // ['l', 'i', 's', 't', 'a']

// A partir de um objeto com a propriedade length, usando a funço map para criar valores
const pegaIndice = (valor, indice) => indice
Array.from({ length: 2 }) // [0, 1]

// A partir de um Map
const map = new Map([ [0, 1], [1, 2] ])
Array.from(map) // [ [0, 1], [1, 2] ]

```

## Array.of(...valores)

Essa função cria um novo array a partir dos valores fornecidos como parâmetros.

```javascript
Array.of(1, 2, 3) // [1, 2, 3]
Array.of('Ricardo', 'Renata') // ['Ricardo', 'Renata']

```
