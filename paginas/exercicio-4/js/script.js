function tab() {
    let numero = document.getElementById('txtn');
    let tabuada = document.getElementById('seltab');
    if (numero.value.length == 0) {
        alert('⚠️ Por favor digite um numero valido! ⚠️');
    } else {
        let n = Number(numero.value);
        let c = 1;
        tabuada.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tabuada${c}`;
            tabuada.appendChild(item);
            c++
        }
    }

}