let palavraSecretaSorteada;
let listaDinamica = []
let tentativas = 6

const palavras = [
    "DESFLORESTAÇÃO", "DESERTIFICAÇÃO", "ACIDIFICAÇÃO", "BIODIVERSIDADE", "CONSERVACIONISMO", "EXTINÇÃO",
    "BIOMA", "OZONOSFERA", "ECOLOGIA",
    "EROSÃO", "INCÊNDIOS", "AQUÁTICO",
    "PLÁSTICO", "URBANIZAÇÃO", "CROSTA", "DEGRADAÇÃO", "EUTROFIZAÇÃO", "COMENSALISMO", "HABITAT", "NICHO"
  ];
  

  

function criarPalavraSecreta(){
    const indexPalavra = Math.floor(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra]
    console.log(palavraSecretaSorteada)
}
criarPalavraSecreta()

function palavraNaTela(){
    const divPalavraSecreta = document.getElementById('palavra-secreta')
  
    divPalavraSecreta.innerHTML = ""

    for(let i = 0; i < palavraSecretaSorteada.length; i++){

        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            divPalavraSecreta.innerHTML = divPalavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            divPalavraSecreta.innerHTML = divPalavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }


    }
   



}
palavraNaTela()

/*<=====================Funcionalidade do Teclado ==================> */
document.addEventListener('keydown', teclado)
function teclado(event){
    if (/^[a-zA-Z]$/.test(event.key)) {
        // Chame a função verificaLetra com a letra pressionada
        if(event.key.toUpperCase() == "A" || event.key.toUpperCase() == "E" || event.key.toUpperCase() == "I" || event.key.toUpperCase() == "O" || event.key.toUpperCase() == "U" ){
            
            const letrasAcentuadas = {
                'A': ['Á', 'Ã'],
                'E': ['É', 'Ê'],
                'I': ['Í', 'Î'],
                'O': ['Ó', 'Ô'],
                'U': ['Ú', 'Û']
            }
            
            const letraPressionada = event.key.toUpperCase()
            const letraAcentuada1 = letrasAcentuadas[letraPressionada][0]
            const letraAcentuada2 = letrasAcentuadas[letraPressionada][1]
            verificaLetraA(letraPressionada, letraAcentuada1, letraAcentuada2)}




        else if(event.key.toUpperCase() == "C" || event.key.toUpperCase() == "Ç"){
                verificaLetraC(event.key.toUpperCase(), "Ç");
        }

        else{
            verificaLetra(event.key.toUpperCase());
        }

        }
}

/* <===================== CASO A - Á - Ã ====================>*/
function verificaLetraA(letra1, letra2, letra3){
    document.getElementById('tecla-' + letra1).disabled = true
    
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra1);
        comparaListasA(letra1, letra2, letra3)
        palavraNaTela()
    }
}

function comparaListasA(letra1, letra2, letra3){
    const pos1 = palavraSecretaSorteada.indexOf(letra1)
    const pos2 = palavraSecretaSorteada.indexOf(letra2)
    const pos3 = palavraSecretaSorteada.indexOf(letra3)
    if(pos1 < 0 && pos2 < 0 && pos3 < 0){
        tentativas = tentativas - 1
        carregaImagem()

    }
    else{
        for(let i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra1){
                listaDinamica[i] = letra1

            }
            else if(palavraSecretaSorteada[i] == letra2){
                listaDinamica[i] = letra2
            }
            else if(palavraSecretaSorteada[i] == letra3){
                listaDinamica[i] = letra3
        }
    }

    let vitoria = true
    for(let i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }
    if(vitoria == true){
        tentativas = 0
        document.getElementById('winning-message').style.display = 'flex'

    }
    if(tentativas == 0 && vitoria == false){
        
        document.getElementById('loser-message').style.display = 'flex'
    }
    
}
}

/////////////////////////////////////////////////////////////////


/* <========= CASO C - Ç ===========>*/
function verificaLetraC(letra1, letra2){
    document.getElementById('tecla-' + letra1).disabled = true
    
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra1);
        comparaListasC(letra1, letra2)
        palavraNaTela()
    }
}

function comparaListasC(letra1, letra2){
    const pos1 = palavraSecretaSorteada.indexOf(letra1)
    const pos2 = palavraSecretaSorteada.indexOf(letra2)
    if(pos1 < 0 && pos2 < 0){
        tentativas = tentativas - 1
        carregaImagem()

    }
    else{
        for(let i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra1){
                listaDinamica[i] = letra1

            }
            else if(palavraSecretaSorteada[i] == letra2){
                listaDinamica[i] = letra2
            }
        }
    }

    let vitoria = true
    for(let i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }
    if(vitoria == true){
        tentativas = 0
        document.getElementById('winning-message').style.display = 'flex'

    }
    if(tentativas == 0 && vitoria == false){
        
        document.getElementById('loser-message').style.display = 'flex'
    }
    
}
//////////////////////////////////////////////////////////////////////////

/* OUTRAS LETRAS */
function verificaLetra(letra){
    document.getElementById('tecla-' + letra).disabled = true
    
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra)
        palavraNaTela()
    }
    else{

    }

}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585"
    document.getElementById(tecla).style.color = "#ffffff"
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas = tentativas - 1
        carregaImagem()
        //aparecer imagem 
        //verificar se há tentativas ainda

    }
    else{
        for(let i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra

            }
        }
    }
    let vitoria = true
    for(let i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }
    if(vitoria == true){
        tentativas = 0
        document.getElementById('winning-message').style.display = 'flex'

    }
    if(tentativas == 0 && vitoria == false){
        
        document.getElementById('loser-message').style.display = 'flex'
    }
    
}

function carregaImagem(){
    const forca = document.getElementById('imagem')
    switch(tentativas){
        
        
        case 5: forca.style.background= 'url(./images/medio/img2.png)'
        break
        case 4: forca.style.background = 'url(./images/medio/img3.png)'
        break
        case 3: forca.style.background = 'url(./images/medio/img4.png)'
        break
        case 2: forca.style.background = 'url(./images/medio/img5.png)'
        break
        case 1: forca.style.background = 'url(./images/medio/img6.png)'
        break
        
        default: forca.style.background = 'url(./images/medio/img7.png)'
        break
    }
    
}

function redireciona(){
    window.location.href = "medio.html"
}

function menu(){
    window.location.href = "index.html"
}