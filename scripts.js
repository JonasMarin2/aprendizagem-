function escavarFosil(nivel) {
    if (nivel < 5) {
        return "Você encontrou um osso de dinossauro!"
    } else {
        return "Nada encontrado, continue escavando!"
    }

}

function mostrarResultadoEscavacao() {
    const nivel = document.getElementById('nivel').value
    const resultado = escavarFosil(nivel)
    document.getElementById('resultado-escavacao').innerHTML = resultado
}

function converterEraGeologica(ano) {
    if (ano < 252) {
        return "Paleozóico"
    } else if (ano < 66) {
        return "Mesozóico"
    } else {
        return "Cenozóico"
    }
}

function mostrarResultadoEra() {
    const ano = document.getElementById('ano').value
    const resultado = converterEraGeologica(ano)
    document.getElementById('resultado-era').innerHTML = resultado
}

function tempoParaExtincao(anos) {
    const taxaExtincao = 0.1; // 10%
    return anos * taxaExtincao
}

function mostrarResultadoExtincao() {
    const anos = document.getElementById('anos').value
    const resultado = tempoParaExtincao(anos)
    document.getElementById('resultado-extincao').innerHTML = `Tempo estimado para extinção: ${resultado} anos.`
}
