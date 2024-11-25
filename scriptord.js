const resultadoDiv = document.querySelector("#resultado");
let numeros = [];

const gerarNumeros = () => {
    numeros = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 1);
    exibirResultado("7 Números Aleatórios", numeros);
};

const ordenarNumeros = (ordem) => {
    const algoritmo = document.querySelector("#tipoOrdenacao").value;
    const sortedArray = {
        bubble: bubbleSort,
        insertion: insertionSort,
        selection: selectionSort
    }[algoritmo]([...numeros]);
    exibirResultado(`Números em Ordem ${ordem === "asc" ? "Crescente" : "Decrescente"}`, ordem === "asc" ? sortedArray : sortedArray.reverse());
};

const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++)
        for (let j = 0; j < array.length - 1 - i; j++)
            if (array[j] > array[j + 1])
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
    return array;
};

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1, key = array[i];
        while (j >= 0 && array[j] > key) array[j + 1] = array[j--];
        array[j + 1] = key;
    }
    return array;
};

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++)
            if (array[j] < array[minIndex]) minIndex = j;
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
};

const exibirResultado = (titulo, array) => {
    resultadoDiv.innerHTML = `<h2>${titulo}</h2><p>${array.join(", ")}</p>`;
};

document.querySelector("#gerarNumeros").addEventListener("click", gerarNumeros);
document.querySelector("#ordenarCrescente").addEventListener("click", () => ordenarNumeros("asc"));
document.querySelector("#ordenarDecrescente").addEventListener("click", () => ordenarNumeros("desc"));
