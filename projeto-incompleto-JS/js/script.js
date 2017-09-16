
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('[data-toggle="popover"]').popover();
});

// ---------------------------------------------------------------------------------------------------------------------

console.log('1. ********************************************************************')

// Exibir o botão com o id infoIlhaGrande

// var botaoInfoIlhaGrande = document.getElementById("infoIlhaGrande");
var botaoInfoIlhaGrande = document.querySelector("#infoIlhaGrande");
console.log(botaoInfoIlhaGrande);
botaoInfoIlhaGrande.style.border = "3px solid red";


// ---------------------------------------------------------------------------------------------------------------------

console.log('2. ********************************************************************')

// Exibir as 4 primeiras âncoras na página
// var ancoras = document.getElementsByTagName("a");
var ancoras = document.querySelectorAll("a");
for(var i = 0; i < ancoras.length; i++) {
    console.log (ancoras[i]);
    ancoras[i].style.cssText = "border: 3px dotted blue";
    if (i == 3)
        break;
}


// ---------------------------------------------------------------------------------------------------------------------

console.log('3. ********************************************************************')

// Exibir os elementos que possuem as classes glyphicon e glyphicon-globe
// var elementos = document.getElementsByClassName("glyphicon glyphicon-globe");
var elementos = document.querySelectorAll(".glyphicon.glyphicon-globe");
for(var i = 0; i < elementos.length; i++) {
    console.log (elementos[i]);
    elementos[i].style.cssText = "border: 3px dotted red";
}

// ---------------------------------------------------------------------------------------------------------------------

console.log('4. ********************************************************************')

// Exibir todos os elementos <h3> dentro de um elemento que possua a classe
// caption e que esteja dentro de um elemento que possua a classe thumbnail.
// E se quiser retornar apenas o primeiro? Resp: document.querySelector
var h3s = document.querySelectorAll(".thumbnail .caption h3")
for(var i = 0; i < h3s.length; i++) {
    console.log (h3s[i]);
    h3s[i].style.cssText = "border: 3px dashed green";
}

// ---------------------------------------------------------------------------------------------------------------------

console.log('5. ********************************************************************')

// Exibir o primeiro link que aponte para mailto:popo@pb.dum.br que esteja dentro
// de um elemento que possua a classe list-unstyled.
// Exemplo: input[name*='endereco'] ==> Seleciona todos os elementos <input> com um
// atributo name que contém a palavra "endereco". Não precisa ser a palavra toda.
// Com [name~='endereco'] pode ser qq elemento que contenha a palavra endereco
// inteira dentro de uma lista como "aaaa endereco bbbb".

var link = document.querySelector("a[href*='mailto:popo@pb.dum.br']");
console.log(link);
link.style.border = "3px solid white";

// ---------------------------------------------------------------------------------------------------------------------

console.log('6. ********************************************************************')

// Exibir as classes do botão cujo id é infoIlhaGrande
var botaoInfoIlhaGrande2 = document.querySelector("#infoIlhaGrande");
console.log(botaoInfoIlhaGrande2.className);

// ---------------------------------------------------------------------------------------------------------------------

console.log('7. ********************************************************************')

// Exibir as classes da âncora cujo id é infoIlhaGrande (no formato de array)
var botaoInfoIlhaGrande2 = document.querySelector("#infoIlhaGrande");
console.log(botaoInfoIlhaGrande2.classList);
console.log(botaoInfoIlhaGrande2.classList[1]);


// ---------------------------------------------------------------------------------------------------------------------

console.log('8. ********************************************************************')

// Alterar o label do botão cujo id é infoIlhaGrande de Mais Informações para *** Mais Informações ***
var botaoInfoIlhaGrande3 = document.querySelector("#infoIlhaGrande");
botaoInfoIlhaGrande3.innerHTML = "<b>*** Mais Informações ***</b>";
console.log(botaoInfoIlhaGrande3);

// ---------------------------------------------------------------------------------------------------------------------

console.log('9. ********************************************************************')

// Exibir o HTML do botão cujo id é infoIlhaGrande
var botaoInfoIlhaGrande4 = document.querySelector("#infoIlhaGrande");
console.log(botaoInfoIlhaGrande4.outerHTML);


// ---------------------------------------------------------------------------------------------------------------------

console.log('10. *******************************************************************')

// Remover a classe btn-default e adicionar a classe btn-danger ao botão cujo id é infoIlhaGrande
var botaoInfoIlhaGrande5 = document.querySelector("#infoIlhaGrande");
botaoInfoIlhaGrande5.classList.remove("btn-default");
botaoInfoIlhaGrande5.classList.add("btn-danger");
console.log(botaoInfoIlhaGrande5);


// ---------------------------------------------------------------------------------------------------------------------

console.log('11. *******************************************************************')

// Ao se clicar no botão infoIlhaGrande tornar visível o conteúdo da div maisInfo e
// ao se clicar novamente, tornar este conteúdo invisível.

// Alterar o arquivo index.html e criar a função no arquivo .js

function alternaMaisInfo() {
    var divMaisInfo = document.querySelector("#maisInfo");
    var altura = document.querySelector("#altura");

    divMaisInfo.classList.toggle("hide");
    altura.classList.toggle("altura-da-linha");

    // if (divMaisInfo.classList.contains("hide")) {
    //     divMaisInfo.classList.remove("hide");
    //     altura.classList.remove("altura-da-linha");
    // }
    // else {
    //     divMaisInfo.classList.add("hide");
    //     altura.classList.add("altura-da-linha");
    // }
}

// ---------------------------------------------------------------------------------------------------------------------

console.log('12. *******************************************************************')

// Ao se clicar no botão contratarIlhaGrande, verificar se a div maisInfo possui a classe hide

var contratarIlhaGrande = document.querySelector("#contratarIlhaGrande");

// O uso de um segundo event handler para um mesmo botão em relação a um mesmo evento,
// mata o event handler anterior. Esta forma de definição de um event handler é antiga
// e não deve ser utilizada. Em substituição iremos utilizar event listeners.

// contratarIlhaGrande.onclick = verificaFunction;
// contratarIlhaGrande.onclick = function() { console.log("O botão contratarIlhaGrande foi clicado"); };

// É preciso definir event listeners em vez de event handlers.
// Event Listener é uma abordagem mais moderna para escutar eventos do browser.

contratarIlhaGrande.addEventListener("click", function(e) { verificaFunction(e) }, false);
contratarIlhaGrande.addEventListener("click", function() { console.log("O botão contratarIlhaGrande foi clicado.") }, false);

function verificaFunction(e) {

    e.preventDefault();

    var maisInfo = document.querySelector("#maisInfo");
    console.log(maisInfo.classList.contains("hide"));
}


// https://stackoverflow.com/questions/5657292/why-is-false-used-after-this-simple-addeventlistener-function

// ENTENDENDO O VALOR FALSE NA DEFINIÇÃO DO LISTENER
// =================================================
// Se definirmos um painel e dentro deste painel se definirmos um botão, então se clicarmos no botão estaremos
// clicando ao mesmo tempo no painel e no botão. Se o painel e o botão tiverem listeners configurados para
// click, qual listener será executado primeiro? O do painel ou o do botão?

//     1|   |4
// -----|---|-----  Painel
//      |   |
//    --|---|----   Botão
//     2|   |3

// Usando false em ambos os listeners, primeiro será executado o listener do botão (3) e depois o
// listener do painel (4). Se ambos os listeners estiverem usando true, primeiro será executado o
// listener do painel (1) e depois o listener do botão (2). Se o listener do painel for false e o
// listener do botão for true, primeiro será executado o listener do botão (2) e depois o do
// painel (4). Então esse parâmetro boleano só faz sentido se tivermos dois elementos, um dentro
// do outro, para os quais existem listeners configurados. Este parâmetro irá configurar a ordem
// de execução dos listeners.

// ---------------------------------------------------------------------------------------------------------------------

console.log('13. *******************************************************************')

// Adicionar o atributo target com o valor _blank à primeira âncora existente dentro
// de um elemento com a classe festa.

document.querySelector(".festa a").setAttribute("target", "_blank");


// ---------------------------------------------------------------------------------------------------------------------

console.log('14. *******************************************************************')

// Ler o valor do atributo alt de uma imagem e utilizá-lo como corpo de um elemento h3 que
// deve ser armazenado como o primeiro filho de uma div.


var divImagem = document.querySelector(".div-imagem");
var img = divImagem.querySelector("img");
var valorOut = img.getAttribute("alt");
var caption = divImagem.querySelector(".caption");
var h3 = document.createElement("h3");
var textNode = document.createTextNode(valorOut);
h3.appendChild(textNode);
caption.insertBefore(h3, caption.firstChild);
img.setAttribute("alt","");
                                                       // Encontra a div que possui a classe div-imagem
                                                       // Encontra o elemento img dentro da div que tem a classe div-imagem
                                                       // Recupera o valor do atributo alt do tag img
                                                       // Encontra a div com a classe caption dentro da div com a classe div-imagem
                                                       // Cria um elemento h3
                                                       // Cria um text node contendo o texto do atributo alt do tag img
                                                       // Adiciona o text node ao elemento h3
                                                       // Insere o h3 antes do primeiro filho da div com a classe caption
                                                       // Limpa o valor do atributo alt que agora está sendo exibido na página
                                                       // assim evitamos que screen readers leiam isso duas vezes.


// ---------------------------------------------------------------------------------------------------------------------

console.log('15. *******************************************************************')

// E se quisermos alternar o label do botão contratarIlhaGrande quando ele for clicado?
// Os labels alternados são 'Contratar' e 'Contratar Agora!'.
contratarIlhaGrande.addEventListener("click", function(e){
    e.preventDefault();
    this.innerHTML = this.innerHTML == "Contratar" ? "Contratar agora!" : "Contratar";
},false);



// ---------------------------------------------------------------------------------------------------------------------






