var numeroPensado = Math.floor(Math.random()*10);
var tentativas = 2;

alert(numeroPensado);

while(true){
    var numeroRespondido = prompt('Tente adivinhar em que numero estou pensando! (De 0 a 10)');
    if(numeroRespondido == numeroPensado){
        alert('Parabéns!!!!!!!');
        break
    } else {
        if(tentativas <= 0){
            alert('Acabaram as chances! Que pena! :(');
            break
        } else {
            tentativas--;
            alert('Errou! Você tem mais '+(tentativas+1)+' tentativas!')
        }
    }
}