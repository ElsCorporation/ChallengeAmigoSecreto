let amigoSorteado = [];
let controladorNomes = 1 ;

function adicionarAmigo() {
    console.log("Entrei no controladorNomes");
    
        if (document.HTMLInputElement == null){
            console.log(document.HTMLInputElement);
            alert("Por favor, digite um nome!");

        } else {
                amigoSorteado[controladorNomes]=document.querySelector("text").value;
                controladorNomes++;
                console.log(`Nomes Armazenados: ${amigoSorteado}`);
        }
        
    
}
