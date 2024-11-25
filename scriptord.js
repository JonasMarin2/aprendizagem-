let numeros = [0, 0, 0, 0, 0, 0, 0];
let valor_atual = 0;

function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarmatriz() {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = aleatorio(100, 1); // Números entre 1 e 100
    }
    exibirResultado("Números Aleatórios", numeros);
}

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
function exibirResultado(titulo, array) {
    let resultadoDiv = document.querySelector("#resultado");
    resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior

    let tituloEl = document.createElement("div");
    tituloEl.textContent = titulo;
    resultadoDiv.appendChild(tituloEl);

    let numerosEl = document.createElement("div");
    numerosEl.textContent = array.join(", ");
    resultadoDiv.appendChild(numerosEl);
}

document.querySelector("#gerarNumeros").addEventListener("click", gerarmatriz);
document.querySelector("#ordenarCrescente").addEventListener("click", () => ordenarCrescente([...numeros]));
document.querySelector("#ordenarDecrescente").addEventListener("click", () => ordenarDecrescente([...numeros]));
