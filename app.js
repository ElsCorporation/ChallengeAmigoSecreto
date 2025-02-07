let listaDeAmigos = [];
let controladorNomes = 0;

function validarEntrada() {

    let textoInserido = document.getElementById("amigo").value;

    let stringValidada = textoInserido.trim();
    console.log(`Texto Inserido: ${textoInserido}\n ChecagemString: ${stringValidada}`);

    if (stringValidada == "") {
        alert("Por favor, digite um nome válido.");
    } else {
        console.log(`Entrei na funçao adicionarAmigos\n O texto valido é: ${stringValidada}`);
        adicionarAmigo(stringValidada);
        document.getElementById("amigo").value = "";
    }
}

function adicionarAmigo(nomeValido) {
    console.log("Entrei no adicionarAmigos ()");

    listaDeAmigos[controladorNomes] = nomeValido;
    controladorNomes++;
    console.log(`Nomes Armazenados: ${listaDeAmigos} `);

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
    }

    else {

        let numeroSorteado = parseInt(Math.random() * listaDeAmigos.length);
        console.log(`Nome Sorteado: ${listaDeAmigos[numeroSorteado]}`);

        alert(`O seu amigo secreto é: ${listaDeAmigos[numeroSorteado]}`);
        listaDeAmigos.splice(numeroSorteado, 1);

        console.log(`Lista de amigos: ${listaDeAmigos} \nQuantidade: ${listaDeAmigos.length}`);

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