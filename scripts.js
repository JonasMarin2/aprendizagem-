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

function converterIdadeCanina(idadeHumana) {
    const fatorConversao = 7; // 1 ano humano = 7 anos caninos
    return idadeHumana * fatorConversao;
}

function mostrarResultadoIdadeCanina() {
    const idadeHumana = document.getElementById('idadeHumana').value;
    const resultado = converterIdadeCanina(idadeHumana);
    document.getElementById('resultado-idade-canina').innerHTML = `A idade equivalente em anos caninos é: ${resultado} anos.`;
}


function calcularCrescimentoPopulacional(populacao, taxa) {
    const crescimento = populacao * (taxa / 100); // Taxa em formato decimal
    return populacao + crescimento;
}

function calcularDesconto() {
    const preco = parseFloat(document.getElementById('preco').value);
    const desconto = parseFloat(document.getElementById('desconto').value);
    const valorDesconto = preco * (desconto / 100);
    const precoFinal = preco - valorDesconto;
    document.getElementById('resultado').innerHTML = `Preço final com desconto: R$ ${precoFinal.toFixed(2)}`;
}
