let listaDeAmigos = [];
let controladorNomes = 0;

function validarEntrada() {
    
    let textoInserido = document.getElementById("amigo").value;
    let stringValidada = textoInserido.trim();

    if (stringValidada == "") {
        
        alert("Por favor, digite um nome válido.");
        
    } else {
        
        adicionarAmigo(stringValidada);
        document.getElementById("amigo").value = "";
    
    }
}

function adicionarAmigo(nomeValido) { 

    listaDeAmigos[controladorNomes] = nomeValido;
    controladorNomes++;
    visualizarLista();

}

function visualizarLista() {

    limparListaHTML();
    reescreverListaHTML();

}

function sortearAmigo() {

    limparListaHTML();

    if (listaDeAmigos.length == 0) {

        alert(`Não foram adicionados amigos ao sorteio.\nPor favor, digite um nome e clique em "Adicionar".`);
        
    } else {

        let numeroSorteado = parseInt(Math.random() * listaDeAmigos.length);
        alert(`O seu amigo secreto é: ${listaDeAmigos[numeroSorteado]}!`);
        listaDeAmigos.splice(numeroSorteado, 1);
        reescreverListaHTML();

    }

}

function limparListaHTML() {

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

}

function reescreverListaHTML() {

    for (let posicaoArray = 0; posicaoArray < listaDeAmigos.length; posicaoArray++) {

        let mostrarListaNoHTML = document.createElement('li');
        mostrarListaNoHTML.textContent = listaDeAmigos[posicaoArray];
        let lista = document.getElementById("listaAmigos");
        lista.appendChild(mostrarListaNoHTML);

    }
}