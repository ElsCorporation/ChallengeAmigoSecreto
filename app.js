let listaDeAmigos = [];
let controladorNomes = 0 ;

function validarEntrada () {

    let textoInserido = document.getElementById("amigo").value;
    let checagemString = textoInserido.trim();
    console.log(`Texto Inserido: ${textoInserido}\n ChecagemString: ${checagemString}`);

    if (checagemString == "") {
        alert("Por favor, digite um nome");
    } else {
        console.log(`Entrei na funçao adicionarAmigos\n O texto valido é: ${checagemString}` );
        adicionarAmigo (checagemString);
        document.getElementById("amigo").value ="";
    }
}

function adicionarAmigo(nomeValido) {
    console.log("Entrei no adicionarAmigos ()");
    
    while(controladorNomes >= 0 ){
                    
        console.log("Entrei no controladorNomes");
        listaDeAmigos[controladorNomes]=nomeValido;
        controladorNomes++;
        console.log(`Nomes Armazenados: ${listaDeAmigos} `);
        break;               
    }

    visualizarLista ();
            
}
     
function visualizarLista () {
    console.log(`Lista atual: ${listaDeAmigos}\n Numero de participantes: ${controladorNomes}`);
    document.getElementById("listaAmigos").innerHTML = listaDeAmigos;
}
    
function sortearAmigo() {

    let numeroSorteado = parseInt(Math.random() *listaDeAmigos.length);
    console.log(`Nome Sorteado: ${listaDeAmigos[numeroSorteado]}`);
    alert(`O seu amigo secreto é: ${listaDeAmigos[numeroSorteado]}`);

}
