while(true){
    var areaQuePrefere = prompt('Olá! Você prefere seguir para a área do Front-End (FRONT) ou do Back-End (BACK)?');
    if(areaQuePrefere === 'FRONT'){
        areaQuePrefere = 'Front-End'
        var framework = prompt('Legal! E quer aprender REACT ou aprender VUE?');
        break
    } else if(areaQuePrefere === 'BACK'){
        areaQuePrefere = 'Back-End'
        var framework = prompt('Legal! E quer aprender C# ou aprender JAVA?');
        break
    } else alert('Responda com FRONT ou BACK :)');
}
    
while(true){
    var seguirDesenvolvendoOuFullstack = prompt('Você quer continuar (CONTINUAR) se desenvolvendo no seu framework ou quer se tornar um desenvolvedor Full-stack (FULL)?')
    if(seguirDesenvolvendoOuFullstack === 'CONTINUAR'){
        seguirDesenvolvendoOuFullstack = 'continuar se desenvolvendo neste framework/linguagem.'
        break
    } else if(seguirDesenvolvendoOuFullstack === 'FULL'){
        seguirDesenvolvendoOuFullstack = 'se tornar um desenvolvedor Full-stack'
        break
    } else alert('Responda com CONTINUAR ou FULL :)'); 
}

var tecnologias = new Set([]);
while(true){
    var tecnologiaEscolhida = prompt('Quais as tecnologias nas quais você quer se especializar? (Digite FIM para sair)')
    if(tecnologiaEscolhida === 'FIM'){
        break
    } else {
        tecnologias.add(tecnologiaEscolhida);
    }
    
}

const resultado = Array.from(tecnologias);
document.write('<p>Você prefere a área de <strong>'+areaQuePrefere+'</strong>, quer aprender <strong>'+framework+'</strong>. Você deseja '+seguirDesenvolvendoOuFullstack+'.</p>');
document.write('<p>Além disso, você deseja se especializar na(s) seguinte(s) tecnologia(s):<br>');
document.write('<ul>');
for(i=0; i<resultado.length;i++){
    document.write('<li>'+resultado[i]+'</li>');
}
document.write('</ul></p>');