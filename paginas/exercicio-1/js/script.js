function carregar() {
    var msgdia = window.document.getElementById('dia');
    var msgmes = window.document.getElementById('mes');
    var msgano = window.document.getElementById('ano');
    var msghorario = window.document.getElementById('horario');
    var msgsemana = window.document.getElementById('samana');
    var img = window.document.getElementById('imagens');
    var data = new Date();
    var horas =  data.getHours();
    var minutos = data.getMinutes();
    var dia = data.getDate();
    var semana = data.getDay();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    msgdia.innerHTML = dia;
    msgano.innerHTML = ano;
    msghorario.innerHTML = `${horas} : ${minutos}`;

    switch (mes) {
        case 0:
            msgmes.innerHTML = 'Janeiro';
        break
        case 1:
            msgmes.innerHTML = 'Fevereiro';
        break
        case 2:
            msgmes.innerHTML = 'Março';
        break
        case 3:
            msgmes.innerHTML = 'Abril';
        break
        case 4:
            msgmes.innerHTML = 'Maio';
        break
        case 5: 
            msgmes.innerHTML = 'Junho';
        break
        case 6:
            msgmes.innerHTML = 'Julho';
        break
        case 7:
            msgmes.innerHTML = 'Agosto';
        break
        case 8:
            msgmes.innerHTML = 'Setembro';
        break
        case 9:
            msgmes.innerHTML = 'Outubro';
        break
        case 10:
            msgmes.innerHTML = 'Novembro';
        break
        case 11:
            msgmes.innerHTML = 'Dezembro';
    }

    switch (semana) {
        case 0:
            msgsemana.innerHTML = 'Domingo'
        break
        case 1:
            msgsemana.innerHTML ='Segunda'
        break
        case 2:
            msgsemana.innerHTML = 'Terça'
        break
        case 3:
            msgsemana.innerHTML = 'Quarta'
        break
        case 4: 
            msgsemana.innerHTML = 'Quinta'
        break
        case 5: 
            msgsemana.innerHTML = 'Sexta'
        break
        case 6:
            msgsemana.innerHTML = 'Sábado'
    } 

    if (horas >= 0 && horas < 12) {
        img.src = 'img/manha.jpg';
        img.alt = 'imagem de bom dia.';
        ceu.innerHTML = 'Manhã';
        document.body.style.background = '#dcdadb';
    } else if (horas >= 12 && horas <= 18) {
        img.src = 'img/tarde.jpg';
        img.alt = 'imagem de boa tarde.';
        ceu.innerHTML = 'Tarde';
        document.body.style.background = '#3f8aca';
    } else {
        img.src = 'img/noite.jpg';
        img.alt = 'imagem de boa noite.';
        ceu.innerHTML = 'Noite';
        document.body.style.background = '#3d3d3d';
    }
}
