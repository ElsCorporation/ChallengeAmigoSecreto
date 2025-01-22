let amigoSorteado = [];
let controladorNomes = 0 ;

function validarEntrada () {

    let textoValido = document.getElementById("amigo").value;
    console.log(`Texto Inserido: ${textoValido}`);

    if (textoValido == "" || textoValido.charAt(0)== " ") {
        alert("Por favor, digite um nome");
    } else {
        console.log(`Entrei na funçao adicionarAmigos\n O texto valido é: ${textoValido} ` );
        adicionarAmigo (textoValido);
    }
}

function adicionarAmigo(nomeValido) {
    console.log("Entrei no adicionarAmigos ()");
    
    while(controladorNomes >= 0 ){
                    
        console.log("Entrei no controladorNomes");
        amigoSorteado[controladorNomes]=nomeValido;
        controladorNomes++;
        console.log(`Nomes Armazenados: ${amigoSorteado} `);
        break;               
    }

    visualizarLista ();
            
}
     
function visualizarLista () {
    console.log(`Lista atual: ${amigoSorteado}\n Numero de participantes: ${controladorNomes}`);
    document.getElementById("listaAmigos").innerHTML = amigoSorteado;
}
    

