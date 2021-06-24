function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var txtAno = document.getElementById('txtano');
    var res1 =  document.getElementById('res1');
    var res2 =  document.getElementById('res2');
    var sex = document.getElementsByName('radsex');
    var idade = ano - Number(txtAno.value);
    var genero = '';
    var img = document.getElementById('foto');

    

    if (txtAno.value.length == 0 || txtAno.value > ano) {
        alert('⚠️ Idade invalida ⚠️');
    } else {

        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                img.src = 'img/Mbb.jpg';
            } else if (idade < 10) {
                img.src = 'img/MCrianca.jpg';
            } else if (idade < 18){
                img.src = 'img/MJovem.jpg';
            } else if (idade < 50){
                img.src = 'img/Madulto.jpg';
            } else if (idade < 120){
                img.src = 'img/idoso.jpg';
            } else {
                img.src = 'img/Mzumbi.jpg';
            }

        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                img.src = 'img/Fbb.jpg';
            } else if (idade < 10) {
                img.src = 'img/FCrianca.jpg';
            } else if (idade < 18){
                img.src = 'img/FJovem.jpg';
            } else if (idade < 50){
                img.src = 'img/Fadulto.jpg';
            } else if (idade < 120){
                img.src = 'img/IDOSA.jpg';
            } else {
                img.src = 'img/Fzumbi.png';
            }
        }
        res1.innerHTML = genero;
        res2.innerHTML = `idade: ${idade}`;
    }
}