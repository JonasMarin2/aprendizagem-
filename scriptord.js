let numeros = [0, 0, 0, 0, 0, 0, 0];
let valor_atual = 0;

// Gera um número aleatório entre min e max
function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Preenche o array com números aleatórios
function gerarmatriz() {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = aleatorio(100, 1); // Valores entre 1 e 100
    }
    console.table(numeros);
}

// Ordena os números em ordem crescente
function ordenarCrescente(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                valor_atual = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = valor_atual;
            }
        }
        console.log(arr);
    }
}

// Ordena os números em ordem decrescente
function ordenarDecrescente(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] < arr[i + 1]) {
                valor_atual = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = valor_atual;
            }
        }
        console.log(arr);
    }
}

console.log("Array inicial:");
console.log(numeros);
console.log("--------------------");

console.log("Gerando matriz de números aleatórios:");
gerarmatriz();
console.log("--------------------");

console.log("Ordenando em ordem crescente:");
ordenarCrescente(numeros);
console.log("--------------------");

console.log("Ordenando em ordem decrescente:");
ordenarDecrescente(numeros);
