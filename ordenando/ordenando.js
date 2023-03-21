function add() {
  var valor = document.getElementById("valor").value;
  var lista = document.getElementById("valores");
  var node = document.createElement("li");
  var textnode = document.createTextNode(valor);
  node.appendChild(textnode);
  lista.appendChild(node);
}

function ordenar() {
  var lista = document.getElementById("valores");
  var select = document.getElementById("ordenacao");
  var array = Array.prototype.slice.call(lista.children).map(function (li) {
    return eval(li.innerHTML);
  });
  switch (select.selectedIndex) {
    case 0:
      bubbleSort(array);
      break;
    case 1:
      selectionSort(array);
      break;
    case 2:
      quickSort(array);
      break;
  }
  lista.innerHTML = array
    .map(function (num) {
      return "<li>" + num + "</li>";
    })
    .reduce(function (acc, li) {
      return acc + li;
    }, "");
}

function misturar() {
  var lista = document.getElementById("valores");
  var array = Array.prototype.slice.call(lista.children).map(function (li) {
    return eval(li.innerHTML);
  });
}

function bubbleSort(array) {
  var troca;
  do {
    troca = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        troca = true;
      }
    }
  } while (troca);
}

function selectionSort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
}

// FUnção QuickSort:

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

function partition(arr, left, right) {
  let pivotIndex = Math.floor((left + right) / 2);
  let pivot = arr[pivotIndex];
  swap(arr, pivotIndex, right);
  let storeIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, storeIndex);
      storeIndex++;
    }
  }
  swap(arr, storeIndex, right);
  return storeIndex;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//

/*
// Função Misturar :
function misturar() {
  var lista = document.getElementById("valores");
  var array = Array.prototype.slice.call(lista.children).map(function (li) {
    return eval(li.innerHTML);
  });
  console.log(lista);
  console.log(array);
  shuffle(array);
  lista.innerHTML = array
    .map(function (num) {
      return "<li>" + num + "</li>";
    })
    .reduce(function (acc, li) {
      return acc + li;
    }, "");
}

//

// Função Misturar :

function misturar() {
  var lista = document.getElementById("valores");
  var vetor = Array.from(lista.children).map(function (item) {
    console.log(lista);
    console.log(vetor);
    return parseInt(item.innerHTML);
  });

  shuffle(lista);

  lista.innerHTML = vetor
    .map(function (item) {
      return "<li>" + item + "</li>";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

//

// Função Misturar :

function misturar() {
  const lista = document.getElementById("valores");
  const valores = Array.from(lista.children).map((li) =>
    parseInt(li.innerHTML)
  );
  shuffle(valores);
  lista.innerHTML = valores.reduce((html, value) => {
    return html + "<li>" + value + "</li>";
  }, "");
}
                                  */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//
// Função Misturar :

function misturar() {
  // Captura a lista de valores
  const lista = document.getElementById("valores");
  console.log(lista);

  // Obtém os valores da lista e os converte para inteiro
  const valores = Array.from(lista.children).map((item) =>
    parseInt(item.innerHTML)
  );
  console.log(valores);

  // Embaralha os valores
  const shuffled = shuffle(valores);
  console.log(shuffled);

  // Gera os novos itens da lista com os valores embaralhados
  const novosItens = shuffled.map((valor) => {
    const novoItem = document.createElement("li");
    novoItem.innerHTML = valor;
    return novoItem;
  });

  // Substitui o conteúdo da lista com os novos itens gerados
  lista.innerHTML = "";
  novosItens.reduce((valores, item) => {
    lista.appendChild(item);
    return valores;
  }, valores);
}
