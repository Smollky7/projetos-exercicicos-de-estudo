const img = document.getElementById('img');
const fundo = document.body;
const copy = document.getElementById('copy');
const on = document.getElementById('On');
const off = document.getElementById('Off')
const titulo = document.getElementById('titulo');

function On() {
  img.src = 'img/acessa.png';
  on.style.backgroundColor = '#A3A7AE';
  off.style.backgroundColor = 'white';
};

function Off() {
  img.src = 'img/apagada.png';
  off.style.backgroundColor = '#A3A7AE';
  on.style.backgroundColor = 'white';
}
