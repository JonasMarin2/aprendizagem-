function escavarFosil(nivel) {
    if (nivel < 5) {
        return "Você encontrou um osso de dinossauro!"
    } else {
        return "Nada encontrado, continue escavando!"
    }

}

function mostrarResultadoEscavacao() {
    let nivel = document.getElementById('nivel').value
    let resultado = escavarFosil(nivel)
    document.getElementById('resultado-escavacao').innerHTML = resultado
}

function converterIdadeCanina(idadeHumana) {
    let fatorConversao = 7; 
    return idadeHumana * fatorConversao;
}

function mostrarResultadoIdadeCanina() {
    let idadeHumana = document.getElementById('idadeHumana').value;
    let resultado = converterIdadeCanina(idadeHumana);
    document.getElementById('resultado-idade-canina').innerHTML = `A idade equivalente em anos caninos é: ${resultado} anos.`;
}


function calcularCrescimentoPopulacional(populacao, taxa) {
    let crescimento = populacao * (taxa / 100); // Taxa em formato decimal
    return populacao + crescimento;
}

function calcularDesconto() {
    let preco = parseFloat(document.getElementById('preco').value);
    let desconto = parseFloat(document.getElementById('desconto').value);
    let valorDesconto = preco * (desconto / 100);
    let precoFinal = preco - valorDesconto;
    document.getElementById('resultado').innerHTML = `Preço final com desconto: R$ ${precoFinal.toFixed(2)}`;
}
