/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const verificaString = (a) => {
  for (let index in a) {
    if (typeof a[index] !== 'number') {
      throw new Error();
    }
  }
};

const verificaVazio = (a) => {
    if (a.length === 0) {
      throw new Error();
    }
};

const average = (a) => {
  let soma = 0;
  let media = 0;
  let arredondado = 0;
  try {
    verificaString(a);
    verificaVazio(a);
    for (let index2 = 0; index2 < a.length; index2 += 1) {
      soma += a[index2];
      media = soma / a.length;
      arredondado = parseInt(media.toFixed(0), 10);
    }
    return arredondado;
  } catch (error) {
    return undefined;
  }
};

module.exports = average;