let listaDeAmigos = [];
//Variável global que irá armazenar os nomes em um array.
let controladorNomes = 0;
//Variável global que irá controlar a posição do array onde os nomes seráo armazenados.

function validarEntrada() {
    //Função que é acionada quando o usuário interage com o botão "Adicionar" na página web.

    let textoInserido = document.getElementById("amigo").value;
    //Armazena a entrada da caixa de texto na variável "textoInserido".

    let stringValidada = textoInserido.trim();
    //Método do array .trim() sem nenhum parâmetro que retira todos os espaços antes e depois da string, evitando que o usuário insira apenas um caractere vazio.
    console.log(`Texto Inserido: ${textoInserido}\n ChecagemString: ${stringValidada}`);

    if (stringValidada == "") {
        //Condição que evita armazenar uma string vazia, fazendo o usuário digitar um novo nome que seja válido.
        alert("Por favor, digite um nome válido.");
        //Exibe um alerta com a mensagem "Por favor, digite um nome válido."
        
    } else {
        //Situação que tenha um nome válido.
        console.log(`Entrei na funçao adicionarAmigos\n O texto valido é: ${stringValidada}`);
        adicionarAmigo(stringValidada);
        //Envia o nome validado para uma nova função.
        
        document.getElementById("amigo").value = "";
        //Limpa a caixa de texto no HTML, evitando que o usuário tenha que apagar o nome manualmente.
    }
}

function adicionarAmigo(nomeValido) { 
    //Função que é acionada dentro da função validarEntrada().
    console.log("Entrei no adicionarAmigos ()");

    listaDeAmigos[controladorNomes] = nomeValido;
    //Armazena o nome do usuário na posição do array que a variável "controladorNomes" foi definida.
    controladorNomes++;
    //Adiciona +1 na variável "contadorNomes", para controlar o armazenamento dos nomes, evitando que novos nomes sejam armazenados nas mesmas posições do array.
    console.log(`Nomes Armazenados: ${listaDeAmigos} `);

    visualizarLista();
    //Chama Função visualizarLista();

}

function visualizarLista() {

    limparListaHTML();
    //Função que limpa a lista atual no HTML.
    reescreverListaHTML();
    //Função que reescreve a lista nova no HTML com os nomes atualizados.

}

function sortearAmigo() {
    //Função que é acionada quando o usuário interage com o botão "Sortear Amigo", na página web.

    limparListaHTML();
    //Função que limpa lista atual no HTML

    if (listaDeAmigos.length == 0) {
        //Condição que evitar sortear amigos caso o array listaDeAmigos esteja vazia.
        alert(`Não foram adicionados amigos ao sorteio.\nPor favor, digite um nome e clique em "Adicionar".`);
        //Exibe um alerta com a mensagem "Não foram adicionados amigos ao sorteio. Por favor, digite um nome e clique em "Adicionar". "

    } else {

        let numeroSorteado = parseInt(Math.random() * listaDeAmigos.length);
        //Armazena um número inteiro e aleatório de zero até o tamanho do array da listaDeAmigos na variável numeroSorteado.
        console.log(`Nome Sorteado: ${listaDeAmigos[numeroSorteado]}`);

        alert(`O seu amigo secreto é: ${listaDeAmigos[numeroSorteado]}!`);
        //Mostra uma mensagem com o amigo sorteado da listaDeAmigos, usando como referência o "numeroSorteado" para acessar a posição do array da lista. 
        listaDeAmigos.splice(numeroSorteado, 1);
        //Remove do array listaDeAmigos o nome sorteado, usando como referência "numeroSorteado", e o numero "1" para remover apenas aquele elemento. Além de diminuir o tamanho do array.

        console.log(`Lista de amigos: ${listaDeAmigos} \nQuantidade: ${listaDeAmigos.length}`);

        reescreverListaHTML();
        //Função que reescreve a lista atualizada.
    }

}

function limparListaHTML() {

    let lista = document.getElementById("listaAmigos");
    //Busca no HTML através da ID, a área onde é mostrada a lista atual de amigos 
    lista.innerHTML = "";
    //Preenche a lista com caractere vazio, limpando a lista.

}

function reescreverListaHTML() {

    for (let posicaoArray = 0; posicaoArray < listaDeAmigos.length; posicaoArray++) {

        let mostrarListaNoHTML = document.createElement('li');
        //Cria um novo elemento no HTML <li> que é uma lista.
        mostrarListaNoHTML.textContent = listaDeAmigos[posicaoArray];
        //Define o conteúdo do texto no HTML, usando o listaDeAmigos[posicaoArray] para cada elemento especifico da lista.
        let lista = document.getElementById("listaAmigos");
        //Busca o elemento do HTML "listaAmigos", no caso, a área da página onde irá mostrar a lista armazenada.
        lista.appendChild(mostrarListaNoHTML);
        //Adiciona o novo item da lista como filho da lista anterior "mostrarListaNoHTML", mostrando-o no HTML.

    }
}