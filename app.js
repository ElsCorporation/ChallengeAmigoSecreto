let amigoSorteado = [];
let controladorNomes = 0 ;

function adicionarAmigo() {
    console.log("Entrei no controladorNomes");
    let textoValido = document.getElementById("amigo").value;

        if (textoValido == "") {

            alert("Por favor, digite um nome!");

        } else {

                console.log("O texto é válido");

                while(controladorNomes >= 0 ){
                    
                    console.log("Entrei no controladorNomes");
                    amigoSorteado[controladorNomes]=textoValido;
                    controladorNomes++;
                    console.log(`Nomes Armazenados: ${amigoSorteado} `);
                    break;
                
                }
            
        }
        
    
}
