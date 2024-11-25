let numeros = [0, 0, 0, 0, 0, 0, 0];
let valor_atual = 0;

// Função para gerar um número aleatório entre min e max
function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Função para preencher o array com números aleatórios
function gerarmatriz() {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = aleatorio(100, 1); // Números entre 1 e 100
    }
    exibirResultado("Números Aleatórios", numeros);
}

// Função para ordenar em ordem crescente
function ordenarCrescente(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                valor_atual = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = valor_atual;
            }
        }
    }
    exibirResultado("Números Ordenados Crescente", arr);
}

// Função para ordenar em ordem decrescente
function ordenarDecrescente(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] < arr[i + 1]) {
                valor_atual = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = valor_atual;
            }
        }
    }
    exibirResultado("Números Ordenados Decrescente", arr);
}

// Função para exibir o resultado no HTML
function exibirResultado(titulo, array) {
    const resultadoDiv = document.querySelector("#resultado");
    resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior

    // Cria e adiciona o título
    const tituloEl = document.createElement("div");
    tituloEl.textContent = titulo;
    resultadoDiv.appendChild(tituloEl);

    // Cria e adiciona os números
    const numerosEl = document.createElement("div");
    numerosEl.textContent = array.join(", ");
    resultadoDiv.appendChild(numerosEl);
}

// Event Listeners para os botões
document.querySelector("#gerarNumeros").addEventListener("click", gerarmatriz);
document.querySelector("#ordenarCrescente").addEventListener("click", () => ordenarCrescente([...numeros]));
document.querySelector("#ordenarDecrescente").addEventListener("click", () => ordenarDecrescente([...numeros]));
