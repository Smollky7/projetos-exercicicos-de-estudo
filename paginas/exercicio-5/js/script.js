let number = document.getElementById('txtn');
let listagem = document.getElementById('lista');
let res = document.getElementById('resultado');
let conjunto = [];

function veriNumero(n) {

  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function veriLista(n, v) {

  if (v.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  
    if (veriNumero(number.value) && !veriLista(number.value, conjunto)) {
      conjunto.push(Number(number.value));
      let item = document.createElement('option');
      item.text = `Numero: ${number.value}`
      listagem.appendChild(item);
      res.innerHTML = '';
    } else {
     
      alert('⚠️ Dado invalido ou já esta na lista! ⚠️');
    }
    number.value = '';
    number.focus();
}

function analisar() {
  if (conjunto.length == 0) {
    alert('Me de algum numero primeiro antes de finalizar.')
  } else {
    let todoN = conjunto.length;
    let menor =  conjunto[0];
    let maior = conjunto[0];
    let somar = 0;
    let media = 0;
    
    for (let pos in conjunto){
      if (conjunto[pos] > maior ) {
        maior = conjunto[pos];
      } 
      if (conjunto[pos] < menor) {
        menor =  conjunto[pos];
      }
      somar += conjunto[pos]
    }
    media = somar / todoN
    res.innerHTML = '';
    res.innerHTML += `<p>Foi adicionou <strong>${todoN}</strong> números.</p>`
    res.innerHTML += `<p>Maior numero adicionado é <strong>${maior}</strong>.</p>`
    res.innerHTML += `<p>Cheguei ao resultado de <strong>${somar}</strong> somando todos os valores.</p>`
    res.innerHTML += `<p>E descobri que a media dos números é igual a <strong>${media}</strong>.</p>`
    

  }
}