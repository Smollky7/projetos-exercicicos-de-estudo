function contar() {
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let resultado = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Está faltando dados [ERRO]');
        resultado.innerHTML = 'Falha de dados!'
    } else {
        resultado.innerHTML = '<strong>Contando:</strong> <br>'
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            alert('Passo invalido! Passo se torna 1');
            p = 1; 
        }

        resultado.innerHTML += `\u{1f3c1}`

        if (i < f) {
            for (let c = i; c <= f; c += p){
                resultado.innerHTML += ` ${c} \u{1F3C3}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{1F3C3}`;
            }
        }
    }
}