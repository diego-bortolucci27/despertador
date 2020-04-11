function definir()
{   
    var hora = new Date();
    var horaAtual = hora.getHours();
    var txthorario = document.getElementById('horario');
    var result = document.getElementById('result');
    var horario = Number(txthorario.value);
    var arquivo = document.getElementById('musica');
    var audio = document.getElementById('audio');

    result.innerHTML = 'O Horário definido para despertar foi: ' + horario + ' horas';
    
    
    if(horaAtual == horario)
    {
        document.body.style.background = "url('img/musica.gif')";
        audio.src = 'audio/acdc-HighwayToHell.mp3';
    }

}