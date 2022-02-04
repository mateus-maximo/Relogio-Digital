function atualizarTempo(){
    let horario = new Date();

    let stringHorario = corrigirHorario(horario.getHours()) + ':' + corrigirHorario(horario.getMinutes()) + ':' + corrigirHorario(horario.getSeconds());

    document.querySelector('#relogio').innerHTML = stringHorario;
}

function corrigirHorario(numero){
    if(numero < 10) return '0' + numero;
    else return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);