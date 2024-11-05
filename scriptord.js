const resultadoDiv = document.querySelector("#resultado")
let numeros = []

const gerarNumeros = () => {
    const quantidade = parseInt(document.querySelector("#numQuantidade").value)
    if (!quantidade || quantidade <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira um número válido."
        return
    }
    numeros = Array.from({ length: quantidade }, () => Math.floor(Math.random() * quantidade) + 1)
    exibirResultado("Números Aleatórios", numeros)
};

const ordenarCrescente = () => {
    const algoritmo = document.querySelector("#tipoOrdenacao").value
    let sortedArray = [...numeros]
    
    switch (algoritmo) {
        case "bubble":
            sortedArray = bubbleSort(sortedArray)
            break
        case "insertion":
            sortedArray = insertionSort(sortedArray)
            break
        case "selection":
            sortedArray = selectionSort(sortedArray)
            break
    }

    exibirResultado("Números em Ordem Crescente", sortedArray);
};

const ordenarDecrescente = () => {
    const algoritmo = document.querySelector("#tipoOrdenacao").value;
    let sortedArray = [...numeros];
    
    switch (algoritmo) {
        case "bubble":
            sortedArray = bubbleSort(sortedArray)
            break
        case "insertion":
            sortedArray = insertionSort(sortedArray)
            break
        case "selection":
            sortedArray = selectionSort(sortedArray)
            break
    }

    exibirResultado("Números em Ordem Decrescente", sortedArray.reverse());
}

const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
};

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j = j - 1;
        }
        array[j + 1] = key
    }
    return array
}

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }
    return array
}

const exibirResultado = (titulo, array) => {
    resultadoDiv.innerHTML = ""
    const tituloEl = document.createElement("h2");
    tituloEl.innerHTML = titulo
    resultadoDiv.appendChild(tituloEl)

    const arrayEl = document.createElement("p")
    arrayEl.innerHTML = array.join(", ")
    resultadoDiv.appendChild(arrayEl)
}

document.querySelector("#gerarNumeros").addEventListener("click", gerarNumeros)
document.querySelector("#ordenarCrescente").addEventListener("click", ordenarCrescente)
document.querySelector("#ordenarDecrescente").addEventListener("click", ordenarDecrescente)
