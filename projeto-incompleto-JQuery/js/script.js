
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('[data-toggle="popover"]').popover();
});

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************

// Vamos configurar um event listener para disparar quando o DOM da página estiver carregado. E dentro do event handler,
// usaremos o jQuery para inserir algum conteúdo na página.

// O parágrafo com os botões é inserido na div 'aqui'.

$("document").ready(function() {
    $("#aqui").append(
        "<p>" +
        "<button id='btn-1' type='button' class='btn btn-primary btn-lg'>Botão Large</button>&nbsp;&nbsp;&nbsp;" +
        "<button id='btn-2' type='button' class='btn btn-primary'>Botão Default</button>&nbsp;&nbsp;&nbsp;" +
        "<button id='btn-3' type='button' class='btn btn-primary btn-sm'>Botão Small</button>&nbsp;&nbsp;&nbsp;" +
        "<button id='btn-4' type='button' class='btn btn-primary btn-xs'>Botão Extra small</button>&nbsp;&nbsp;&nbsp;" +
        "<button id='btn-5' type='button' class='btn btn-primary btn-xs'>Adicionar</button>&nbsp;&nbsp;&nbsp;" +
        "<button id='btn-6' type='button' class='btn btn-primary btn-xs'>Rodar</button>" +
        "</p>"
    );
});

//  --------------------------------------------------------------------------------------------------------------------
// Inserindo conteúdo usando javascript
// window.addEventListener("DOMContentLoaded", function(evt) {
//     var elem = document.getElementById("aqui");
//     var paragrafo = document.createElement("p");
//     var botao = document.createElement("button");
//     var label = document.createTextNode("Botão Large");
//     botao.appendChild(label);
//     botao.classList.add("btn");
//     botao.classList.add("btn-primary");
//     botao.classList.add("btn-lg");
//     paragrafo.appendChild(botao);
//     // botao.style.cssText = "btn btn-primary btn-lg"
//     elem.appendChild(paragrafo);
// });

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************

// Exercício 1

// Recuperar todos os parágrafos e envolvê-los com uma borda vermelha de 3px
// $("p").css("border", "3px solid red");

// Recuperar todos os elementos que possuam a classe caption e envolvê-los com uma borda verde
// $(".caption").css("border", "3px solid green");

// Recuperar o elemento com o id = aqui e envolvê-lo com uma borda azul
// $("#aqui").css("border", "3px solid blue");

// Recuperar todos os elementos img com a classe media-object e envolvê-los com uma borda preta
// $("img.media-object").css("border", "3px solid black");

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 2
//
// $("*")	                    Seleciona todos os elementos
// $(this)	                    Seleciona o elemento HTML corrente
// $("p.intro")	                Seleciona todos elementos <p> com a class="intro"
// $("p:first")	                Seleciona o primeiro elemento <p>
// $("ul li:first")	            Seleciona o primeiro elemento <li> do primeiro <ul>
// $("ul li:first-child")	    Seleciona o primeiro elemento <li> de todos elementos <ul>
// $("[href]")	                Seleciona todos os elementos com o atributo href
// $("a[target='_blank']")	    Seleciona todos os elementos <a> com o valor do atributo target igual a "_blank"
// $("a[target!='_blank']")	    Seleciona todos os elementos <a> com o valor do atributo target diferente de "_blank"
// $(":button")	                Seleciona todos os elementos <button> e <input> que possuem type="button"
// $("tr:even")	                Seleciona todos os elementos <tr> pares
// $("tr:odd")	                Seleciona todos os elementos <tr> ímpares

// Recuperar o primeiro elemento na página com a classe caption que esteja dentro de um elemento com a classe
// row (azul)  Resp: Ciclovias da Cidade
$(".row.caption:first").css("border", "3px solid blue");

// Recuperar o último elemento li na página que esteja dentro de um elemento com a classe row (black)
/*// Resp: popo@pb.dum.br
$("li:last").css("border", "3px solid black");

// Recuperar o último elemento na página com a classe caption que esteja dentro do primeiro elemento com a classe row
// (orange) Resp: Pão de Açucar
$(".row:first .caption:last").css("border", "3px solid orange");

// Recuperar o último elemento h3 na página que esteja dentro do segundo elemento com a classe row (navy)
// (o primeiro é o zero) Resp: Lopes Mendes
$(".row:eq(1) h3:last").css("border", "3px solid navy");

// Recuperar o terceiro elemento h3 na página que esteja dentro do segundo elemento com a classe row (red)
// (o primeiro é o zero) Resp: Praia do Aventureiro
$(".row:eq(1) h3:eq(2)").css("border", "3px solid red");*/

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 3

// // Recuperar os parágrafos que são filhos imediatos do elemento blockquote (black)
// // Adicionei uma div logo abaixo do primeiro blockquote para que a parágrafo dentro da div não seja selecionado.
// $("blockquote > p").css("border", "3px solid black");
//
// // Recuperar todos os parágrafos que são filhos imediatos ou não do elemento blockquote (cinza claro)
// // .css("background-color", "#f8f8ff");
// $("blockquote p").css("background-color", "#f8f8ff");
//
// // Recuperar o elemento <p> se ele for precedido imediatamente pelo elemento h3 (red)
// $("h3 + p").css("border", "3px solid red");

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 4
//
// Recuperar as âncoras que tenham o atributo class com qq valor (red)
// Rio de Janeiro, Cultura e os 2 botões da Ilha Grande
// $("a[class]").css("border", "3px solid red");
//
// // Recuperar elementos h3 cujas classes começam com cabe. (cabecalho) (green) Resp: Os 4 h3 da Ilha Grande
// $("h3[class^='cabe']").css("border", "3px solid green");
//
// // Recuperar elementos img que tenham o atributo class contedo o string object (media-object) e que o valor do
// // atributo alt comece com o string Praia (black)  Resp: Foto da Praia do Aventureiro
// $("img[class*='object'][class^='Praia']").css("border", "3px solid black");

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 5
//
// // Recuperar parágrafos que contenham o termo 'Ilha Grande' (red)
// $("p:contains('Ilha Grande')").css("border", "3px solid red");
// //
// // // Recupera todos os elementos h2 que sejam o primeiro filho (imediato ou não) de uma div (orange)
// // // Diferente de recuperar o elemento h2 que seja o primeiro filho de uma div (retorna apenas um)
// // $("div h2:first-child").css("border", "3px solid orange");                               // São iguais - Primeiro de cada grupo.
// $("div h2:first-of-type").css("border", "3px solid orange");                               // São iguais - Primeiro de cada grupo.
// // // $("div h2:first").css("border", "3px solid pink");                  // Primeiro <p> dentro da primeira div.
// //
// // // Recuperar os parágrafos que sejam o terceiro (começando com 1 - nth-child) filho (o primeiro filho pode ser
// // // outro elemento, como um h4, por exemplo - ver paraty) de uma div (imediato ou não) mas todos os filhos devem
// // // estar em um mesmo nível (yellow)
// $("div p:nth-child(3)").css("border", "3px solid yellow");                               // com ou sem ul

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 6
//
$("document").ready(function() {
    // Localizar o parágrafo cujo id é parte2 e atribuir este elemento a uma variável denominada elem.
    // Trata-se do segundo parágrafo do segundo depoimento. (background yellow)
    // var elem = $("#parte2").css("background","yellow");
    // elem.prev().css("background","green");
    // elem.next().css("background","blue");
    // Acessar o elemento (um parágrafo) que vem antes (prev), no mesmo nível, de elemento referenciado
    // pela variável elem (background green)


    // Acessar o elemento (um parágrafo) que vem após (next), no mesmo nível, de elemento referenciado
    // pela variável elem (background blue)


    // Vamos utilizar a função each para iterar sobre um conjunto de elementos p para tornar sua borda cada vez
    // mais grossa.
    // Vamos utilizar um selector para retornar todos parágrafos que se encontram dentro da div depoimentos, e
    // então vamos chamar each() que define uma função callback que será chamada para cada elemento no conjunto.
    // A função callback recebe dois parâmetros: o índice do elemento corrente e uma referência para o elemento.
    // Dentro da função each() recuperamos uma versão jquery ($(element)) de cada um destes parágrafos e aplicamos um
    // estilo a cada um deles. A borda vai ficar cada vez mais grossa.
    var borda = 3;
    $("#depoimentos p").each(function (id, elem) {
        $(elem).css("border", borda + "px solid red");
        borda += 3;
    });

});

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 7
//

// $("document").ready(function() {
//
//     $("#btn-1").html('Criar Conteúdo');  // Para <input type="button" ...> usar .prop('value', 'Label') ==> Antes da versão 1.6 era .attr
//                                          // Para <button type="button" ...> usar .html('Label')
//     $("#btn-2").html('Modificar Conteúdo');
//     $("#btn-3").html('Modificar Todo Conteúdo');
//     $("#btn-4").html("Acrescentar Conteúdo a um Item");
//     $("#btn-5").html("Acrescentar Item");
//     $("#btn-6").html("Rodar");
//
//     $("#conteudo").removeClass("hide");
//
//     var id = 4;
//
//     // document.getElementById("btn-1").addEventListener("click", function (evt) {
//     //     ...
//     // });
//
//     // Substituir o conteúdo do elemento cujo id é conteudo por este parágrafo:
//     // <p>Os três parágrafos foram substituídos por esse conteúdo.</p>
//     $("#btn-1").click(function(evt) {

//     });
//
//     // Substituir o conteúdo do segundo parágrafo (#paragrafo2) por este:
//     // Este é o novo conteúdo do segundo parágrafo.
//     $("#btn-2").click(function(evt) {
//         // O texto de um único parágrafo está sendo modificado.

//     });
//
//     // Alterar o conteúdo de todos os parágrafos existentes dentro do elemento cujo id é conteudo por este:
//     // Este é o novo conteúdo de todos os parágrafos existentes na div conteudo.
//     $("#btn-3").click(function(evt) {
//         // Como estou Recuperarndo todos os parágrafos, todos eles serão modificados.

//     });
//
//     // Acrescentar a frase ' E esse é o conteúdo que foi adicionado.' após o texto do último parágrafo.
//     $("#btn-4").click(function(evt) {
//         // var ultimo = $("#conteudo p:last");  // Implementa o .append na mão
//         // var conteudo = $(elemento).text();
//         // $(ultimo).html(conteudo + ' E esse é o conteúdo que foi adicionado.');

//     });
//
//     // Acrescentar o parágrafo <p id="paragrafox">*** Conteúdo adicionado após o último parágrafo ***</p>
//     // após o último parágrafo do elemento conteudo.
//     $("#btn-5").click(function(evt) {

//         //                                      também existe                                     .insertBefore
//     });
//
//     // Mover para após o último parágrafo do elemento conteúdo, o primeiro parágrafo do elemento conteúdo.
//     $("#btn-6").click(function(evt) {

//         // também existe     .before
//     });
// });

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 8
//
//
// $("document").ready(function() {
//
//     $("#conteudo").removeClass("hide");
//     $("#btn-1").html('Limpar conteúdo');  // Para <input type="button" ...> usar .prop('value', 'Label') ==> Antes da versão 1.6 era .attr
//                                           // Para <button type="button" ...> usar .html('Label')
//     $("#btn-2").html("Remover parágrafos com classes 'a' ou 'b'");
//     $("#btn-3").html('Substituir todos parágrafos');
//     $("#btn-4").html('Substituir parágrafos com "Aliquip ex"');
//     $("#btn-5").addClass("hide");
//     $("#btn-6").addClass("hide");
//
//     $("#paragrafo1").addClass("a")
//     $("#paragrafo2").addClass("b")
//     $("#paragrafo3").addClass("c")
//     $("#paragrafo4").addClass("d")
//
//     // Envolver cada um dos parágrafos existentes dentro da div conteudo, em uma div cujo estilo na cor vermelha.
//     // Este estilo será herdado pelos parágrafos. Vai ficar assim:
//
//     // <div style='color:red'>
//     //     <p id="paragrafo1">Lorem ipsum dolor sit amet, ut labore.</p>
//     // </div>
//     $("#conteudo p").wrap("<div style='color:red'/>");
//
//     // Envolver todos as divs de uma só vez. Isto é, aqui temos apenas uma div envolvendo todas as divs
//     // que envolvem os parágrafos. Esta div deve definir uma borda na cor azul.
//     $("#conteudo div").wrapAll("<div style='border:3px solid blue'/>");
//
//     // Limpar o conteúdo da div conteudo. Como os parágrafos serão removidos e a borda azul foi aplicada a eles
//     // a div inteira deixa de ser exibida.
//     $("#btn-1").click(function(evt) {

//     });
//
//     // Remover os parágrafos existentes na div conteudo que possuem as classes 'a' ou 'b'.
//     $("#btn-2").click(function(evt) {
//         // Para 'a' e 'b'  $("#conteudo p.a.b")

//     });
//
//     // Substituir (replace) todos os parágrafos da div conteudo por uma div com o seguinte conteúdo:
//     // <div>Parágrafo substituído por div</div>
//     $("#btn-3").click(function(evt) {

//     });
//
//     // Substituir todos os parágrafos da div conteudo que possuam o texto 'Aliquip ex' no parágrafo por
//     // "<p>Este é o parágrafo número " + indice + "</p>"
//     $("#btn-4").click(function(evt) {

//     });
// });
//
//
//
//
//
//
//
//
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 9
//
// $("document").ready(function() {
//
//     // - Para lidar com atributos há duas funções: attr() e removeAttr().
//     // A função attr() é usada para operar em atributos. Ela é utilizada para trocar o valor de um atributo ou
//     // para recuperar o seu valor. Se o atributo não estiver presente no elemento mencionado então o resultado
//     // é undefined. Quando a função é chamada com um attr() e um valor, esse valor é designado ao elemento.
//
//     $("#btn-1").html('Gerar Lista de Imagens');
//     $("#btn-2").addClass("hide");
//     $("#btn-3").addClass("hide");
//     $("#btn-4").addClass("hide");
//     $("#btn-5").addClass("hide");
//     $("#btn-6").addClass("hide");
//
//
//     $("#btn-1").click(function(evt) {
//
//         // Após o elemento, cujo id é conteudo, criar um elemento h3 contendo 'Lista de Imagens'. Após este
//         // elemento, criar um  elemento ul  com id='imagens'.  E para  cada  imagem  existente  na  página,
//         // acrescentar  dentro do elemento ul, um elemento li contendo o valor do atributo alt da imagem.
//
//
//
//
//
//         // Alterar o valor de todos os atributos src e title para "images/mapa-turistico-770.jpg" e "Mapa da
//         // cidade" respectivamente.
//
//         // $("img").attr('src', 'images/mapa-turistico-770.jpg');    // Para trocar o valor de 1 atributo
//         $("img").attr({ src: "images/mapa-turistico-770.jpg", title: "Mapa da cidade" });
//
//         // Como cada tag img está envolvido por um tag anchor onde o atributo href está configurado para
//         // os endereços das imagens, ao clicarmos em uma imagem ela é exibida nesta mesma página em um
//         // tamanho maior.
//         // 1. Fazer com que ao clicarmos em uma imagem, a imagem seja exibida em uma nova aba.
//         // 2. Remover o atributo href da última âncora dentro de um elemento com a classe media-list.
//
//         // 1. Ao clicarmos em uma imagem (tag img) que esteja dentro de um elemento 'a', esta imagem deve
//         // ser exibida em uma nova aba.
//         // Duas soluções:
//         // a. Recuperar os elementos img que são filhos imediatos de uma âncora.
//         // b. Recuperar as âncoras que possuem o atributo href contendo "images/".
//
//         $("a > img").each(function() {
//             $(this).parent().attr("target", "_blank");
//         })
//
//         // $("a[href*='images/']").attr("target", "_blank");
//
//         // 2. Remover o atributo href da última âncora dentro de um elemento com a classe media-list.
//         $(".media-list a:last").removeAttr("href");
//     });                                               // last-of-type - último dentro de cada tag
// });                                                   // last - último dentro de um elemento específico
//                                                       // a:last não funciona

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 10
//
// $("document").ready(function() {
//
//     $("#btn-1").html('Acrescentar CSS 1');
//     $("#btn-2").html('Acrescentar CSS 2');
//     $("#btn-3").html('Acrescenta Hide');
//     $("#btn-4").html('Remove Hide');
//     $("#btn-5").html('Toogle Hide');
//     $("#btn-6").addClass("hide");
//
//     $("#conteudo").removeClass("hide");
//
//     // Acrescentar o atributo text-decoration com o valor line-through e aumentar o font-size em 1px
//     $("#btn-1").click(function(evt) {
//         $("#conteudo p").css("text-decoration", "line-through").css("font-size", "+=1pt");
//         // A notação +=1pt acrescenta um ponto ao font-size
//     });
//
//     // Acrescentar font-weight: bold, color: red e text-decoration: underline aos parágrafos do elemento conteudo.
//     $("#btn-2").click(function(evt) {
//         $("#conteudo p").css({
//             "font-weight" : "bold",
//             "color" : "red",
//             "text-decoration" : "underline"
//         });
//     });
//
//     // Adicionar a classe hide aos parágrafos em conteudo
//     $("#btn-3").click(function(evt) {
//
//     });
//
//     // Remover a classe hide dos parágrafos em conteudo
//     $("#btn-4").click(function(evt) {
//
//     });
//
//     // Alternar a classe hide nos parágrafos em conteudo
//     $("#btn-5").click(function(evt) {
//
//     });
// });

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 11
//
// Usado quando se deseja associar dados a um elemento de uma página.
//
// $("document").ready(function() {
//
//     $("#btn-1").html('Armazenar');
//     $("#btn-2").html('Exibir');
//     $("#btn-3").html('Remover');
//     $("#btn-4").addClass("hide");
//     $("#btn-5").addClass("hide");
//     $("#btn-6").addClass("hide");
//
//     $("#conteudo").data("chave1", 1000);
//
//     // Ao se clicar no botão btn-1 adicionar os seguintes dois pares de chave ao elemento conteudo:
//     // - chave2 / 2000
//     // - chave3 / UFF
//
//     // Adicionar dois pares de chave/valor ao elemento conteudo: chave2/2000 e chave3/UFF.
//     $("#btn-1").click(function(evt) {
//
//
//         // jQuery pode associar dados arbitrários a elementos da página.
//     });
//
//     // Ao se clicar no botão btn-2 recuperar e exibir na console os pares de chave armazenados em conteudo.
//     // Acrescentei um par de chaves diretamente no elemento html conteudo: data-chave4 / Computação.
//     // O atributo se chama data-chave1 mas a parte real do nome do atributo é chave1.
//     $("#btn-2").click(function(evt) {
//         // .data() retorna { chave1: 1000, chave4: Computação }
//
//
//
//     });
//
//     // Ao se clicar no botão btn-3 remover os dados armazenados no elemento cujo id é conteudo.
//     $("#btn-3").click(function(evt) {
//         // $("#conteudo").removeData("chave2");
//
//     });
// });

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 12
//
// Aqui estamos acessando a jquery function, uma forma mais simples de declarar uma função que deve ser executada
// quando o evento ready ocorre. Basta passar uma função manipuladora diretamente para o jquery object.

// $(function() {
//     $("#btn-1").html('Highlight');
//     $("#btn-2").addClass("hide");
//     $("#btn-3").addClass("hide");
//     $("#btn-4").addClass("hide");
//     $("#btn-5").addClass("hide");
//     $("#btn-6").addClass("hide");
//
//     $("#hr").removeClass("hide");
//     $("#conteudo").removeClass("hide");
//     $("#caixaDeTexto").removeClass("hide");
//
//     // Versões mais antigas do jQuery usavam as funções "bind" e "unbind" para definir event handlers.
//     // Exemplo: $("#evtTarget").bind("mouseover mouseleave", highlight);
//
//     // A partir da versão 1.7 do jQuery passam a ser utilizadas as funções "on" e "off".
//
//     // Como atachar e remover event handlers de elementos: através das funções on() e off()
//
//     // Vamos começar utilizando a função on() para atachar event listeners ao elemento button que possui o
//     // id="btn-1". Vamos atachar os eventos mouseover e mouseleave para mudar a cor da div conteudo quando
//     // o usuário passar o mouse sobre o botão Highlight.
//
//     $("#btn-1").on("mouseover mouseleave", highlight); // highlight é o nome de uma event handler function
//                                                        // que teremos que escrever.
//
//     // Utilizando os métodos mouseover(), mouseleave(), etc.
//     // Definindo event listeners desta forma, não teremos como desligá-los.
//     //
//     // $("#btn-1").mouseover(function(evt) {
//     //     highlight(evt);
//     // });
//     //
//     // $("#btn-1").mouseleave(function(evt) {
//     //     highlight(evt);
//     // });
//
//     // Criar um event handler para tratar o evento click usando uma função anônima.
//
//     $("#btn-1").on("click", function(evt) {
//
//         // Remover o highlight event handler para mouseover e mouseleave, utilizando a função off().
//
//
//         // Substituir o label do botão informando que o efeito hover foi desligado.
//
//
//         // Remover a classe highlight se ela estiver lá.
//
//
//     });
//
//     $("#btn-1").on("dblclick", function(evt) {
//
//         // Adicionar o highlight event handler para mouseover e mouseleave, utilizando a função off().
//
//
//         // Substituir o label do botão informando 'Highlight'
//
//
//         // Adicionar a classe highlight
//
//     });
//
//     // caixaDeTexto é o id de uma caixa de texto. Ao pressionar uma tecla ocorre o evento keypress.
//     // Exibir no elemento span cujo id é 'teclaPressionada', o caracter digitado.
//     $("#caixaDeTexto").on("keypress", function(evt) {
//         // teclaPressionada é o id do elemento span logo abaixo da caixa de texto.
//         $("#teclaPressionada").append(String.fromCharCode(evt.charCode));
//     });
// });
//
//     // A função highlight deve efetuar alternância da classe highlight no elemento cujo id é conteudo.
//     // Caso a classe highlight tenha sido adicionada, devemos aumentar o font-size dos parágrafos
//     // existentes na div conteudo em 3pt e caso ela tenha sido removida, o font-size desses parágrafos
//     // deverá ser reduzido em 3pt.
//
// function highlight(evt) {
//
//
//
//
// }
//
// Exercício 13
//
// Exibir, esconder e alternar com animação.
//
// $(function() {
//     $("#btn-1").html('Exibir com Animação');
//     $("#btn-2").html('Esconder com Animação');
//     $("#btn-3").html('Alternar com Animação');
//     $("#btn-4").addClass("hide");
//     $("#btn-5").addClass("hide");
//     $("#btn-6").addClass("hide");
//
//     $("#conteudo").removeClass("hide");    // Para funcionar é preciso remover o atributo hide e executar o método
//     $("#conteudo").hide();                 // hide() sem animação para esconder rapidamente.
//
//     // Ao ser clicado o botão btn-1 o conteúdo da div cujo id é conteudo deve ser exibido em 700
//     // milissegundos, de forma linear. Sem animação seria: $("#conteudo").show();
//     // fast   - 200 milissegundos
//     // normal - 400 milissegundos
//     // slow   - 600 milissegundos
//     $("#btn-1").click(function() {
//
//     });
//
//     // Ao ser clicado o botão btn-2 o conteúdo da div cujo id é conteudo deve ser escondido em 700
//     // milissegundos, de forma linear. Sem animação seria: $("#conteudo").hide();
//     $("#btn-2").click(function() {
//
//     });
//
//     // Ao ser clicado o botão btn-3 o conteúdo da div cujo id é conteudo deve ser exibido e escondido
//     // alternativamente. Devem ser passados 3 parâmetros para a função toggle:
//     // - o tempo de duração da animação
//     // - se a animação será realizada de forma linear ou swing
//     // - o nome da função que deverá ser executada ao terminar a animação.
//     // Sem animação seria: $("#conteudo").toggle("hide");
//     $("#btn-3").click(function() {
//
//     });
// });
//
// // Esta função deve ser executada quando o execução do evento terminar.
// // Ela deverá logar na console a informação de que a animação terminou.
// function finalizar() {
//     console.log("A Animação Terminou!");
// }

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 14
//
// $(function() {
//     $("#btn-1").html('FadeIn em 1s');
//     $("#btn-2").html('FadeOut em 2s');
//     $("#btn-3").html('FadeTo Slow com Opacidade 0.3');
//     $("#btn-4").html('FadeTo Slow com Opacidade 1 e com Finalizacao');
//     $("#btn-5").html('Pulsar Fast com Opacidade entre 1 e 0.3');
//     $("#btn-6").addClass("hide");
//
//     $("#conteudo").removeClass("hide");    // Para funcionar é preciso remover o atributo hide e executar o método
//     $("#conteudo").hide();                 // hide() sem animação para esconder rapidamente.
//
//     // Obter uma referência para a div conteudo e executar o método fadeIn() na velocidade de 1000 milissegundos
//     // Velocidades: "slow", "normal" ou "fast" ou um número de milissegundos
//
//     // Obter uma referência para a div conteudo e executar o método fadeIn() na velocidade de 1000
//     // milissegundos. Sem animação seria: $("#conteudo").show();
//     $("#btn-1").click(function() {
//                                           // efetua o fadeIn para 100% ou 1.0
//     });
//
//     // Obter uma referência para a div conteudo e executar o método fadeOut() na velocidade de 2000
//     // milissegundos.
//     $("#btn-2").click(function() {
//                                           // Efetua o fadeOut para 0% ou 0.0
//     });
//
//     // Obter uma referência para a div conteudo e executar o método fadeTo() na velocidade slow e até
//     // o nível de opacidade 0.3
//     $("#btn-3").click(function() {
//
//     });
//
//     // Obter uma referência para a div conteudo e executar o método fadeTo() na velocidade slow é até o nível de
//     // opacidade 1. E definir uma função que deve ser executada quando a animação terminar.
//     $("#btn-4").click(function() {
//
//     });
//
//     // Obter uma referência para a div conteudo e simular o efeito de pulsar executando várias vezes o método
//     // fadeTo() sempre na velocidade fast, mas alternando o nível de opacidade entre 0.3 e 1.0
//     $("#btn-5").click(function() {
//         $("#conteudo").fadeTo("fast", 0.3)
//
//
//
//
//                                              // Poderíamos ter especificado uma função onComplete() aqui!
//     });
// });
//
// Essa é a função que deve ser executada quando a animação termina.
//
// function finalizacao() {
//     console.log("Efeito de Fading concluído.");
// }
//
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 15
//
// $(function() {
//
//     $("#btn-1").html('SlideUp em 1s');
//     $("#btn-2").html('SlideDown em 2s');
//     $("#btn-3").html('SlideToggle');
//     $("#btn-4").addClass("hide");
//     $("#btn-5").addClass("hide");
//     $("#btn-6").addClass("hide");
//
//     $("#conteudo").removeClass("hide");
//
//     // Obter uma referência para a div conteudo e executar o método slideUp() na velocidade de 1000
//     // milissegundos.
//     $("#btn-1").click(function() {
//
//     });
//
//     // Obter uma referência para a div conteudo e executar o método slideDown() na velocidade de 2000
//     // milissegundos.
//     $("#btn-2").click(function() {
//
//     });
//
//     // Obter uma referência para a div conteudo e executar o slideToggle() na velocidade slow.
//     $("#btn-3").click(function() {
//
//     });
// });
//
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 16
//
// $(function() {
//
//     $("#btn-1").html('Animate 1');
//     $("#btn-2").html('Animate 2');
//     $("#btn-3").html('Animate 3');
//     $("#btn-4").html('Animate 4');
//     $("#btn-5").addClass("hide");
//     $("#btn-6").addClass("hide");
//
//     $("#conteudo").removeClass("hide");
//     $("#conteudo").css("border", "3px solid red");
//
//     // Efetuar uma animação (.animate) sobre a div conteudo, reduzindo sua largura em 100px, aumentando
//     // sua altura em 100px e estabelecendo o fontSize em 10pt. Deve ser passado para o método animate um
//     // objeto com as propriedades da animação e um número que representa a duração de 1000 milissegundos.
//     $("#btn-1").click(function() {
//
//     });
//
//     // Efetuar uma animação sobre a div conteudo, aumentando a largura em 100px, reduzindo a altura em 100px
//     // e estabelecendo o fontSize em 10pt. Deve ser passado para o método animate um objeto com as propriedades
//     // da animação e um número que representa a duração de 1000 milissegundos.
//     $("#btn-2").click(function() {
//
//     });
//
//     // Efetuar uma animação sobre a div conteudo, estabelecendo o fontSize em 12pt. Deve ser passado para o
//     // método animate um objeto com as propriedades da animação e um número que representa a duração de
//     // 1000 milissegundos.
//     $("#btn-3").click(function() {
//
//     });
//
//     // Efetuar uma animação sobre a div conteudo, estabelecendo a altura em 150px, a largura em 70%, a
//     // opacidade em 0.4, a margem a esquerda (marginLeft) deve ser aumentada em 80px, o tamanho da letra
//     // (fontSize)deve ser fixado em 11pt e a largura da borda (borderWidth) deve ser fixada em 5px. A animação
//     // deve ocorrer em 1500 milissegundos.
//     $("#btn-4").click(function(evt) {
//         $("#conteudo").animate({ height: "150px",
//                                  width: "70%",
//                                  opacity: 0.4,
//                                  marginLeft: "+=80px",
//                                  fontSize: "11pt",
//                                  borderWidth: "5px"
//                                }, 1500 );
//     });
// });

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 17
//
// $("document").ready(function() {
//     $("#btn-1").html('Recuperar informação através de requisição ajax');
//     $("#btn-2").addClass("hide");
//     $("#btn-3").addClass("hide");
//     $("#btn-4").addClass("hide");
//     $("#btn-5").addClass("hide");
//     $("#btn-6").addClass("hide");
//
//     $("#conteudo").removeClass("hide");
//
//     // Efetuar uma requisição ajax solicitando o conteúdo do arquivo denominado arquivo.txt e armazenar o
//     // conteúdo deste arquivo, retornado pela requisição ajax, dentro do elemento cujo id é conteudo.
//     $("#btn-1").click(function() {
//         recuperarInformacao();
//     });
// });
//
// function recuperarInformacao() {
//
//     // A função ajax do jQuery recebe como parâmetro um objeto com um conjunto de propriedades:
//     // - o url desejado (no nosso caso, apenas arquivo.txt pois este arquivo encontra-se na mesma pasta do servidor
//     //   onde se encontra a página index.html),
//     // - o tipo do método utilizado para enviar a requisição http,
//     // - o tipo de informação que esperamos receber de volta. No nosso caso, 'text' que é o conteúdo do arquivo
//     //   arquivo.txt,
//     // - o nome da função callback que deve ser executada quando a requisição é bem sucedida (sucesso),
//     // - o nome da função callback que deve ser executada quando a requisição falha (erro)
//     // - e a função que é executada quando a requisição é completada (com sucesso ou não). Essa função
//     //   anônima recebe dois parâmetros: xhr e status. Nenhum dos dois serão utilizados.
//
//     $.ajax({
//         // O URL para a requisição
//         url:             ,
//
//         // o tipo da requisição
//         type:            ,
//
//         // o tipo de dado que esperamos receber de volta (text)
//         dataType :         ,
//
//         // a funcão a ser chamada no caso de sucesso
//         success:           ,
//
//         // a funcão a ser chamada no caso de falha
//         error:      ,
//
//         // o código a ser executado independentemente de sucesso ou falha. Essa função é executada sempre!
//         complete: function( xhr, status ) {
//             console.log("xhr: ", xhr);
//             console.log("status: ", status);
//             console.log("A requisição foi concluída!");
//         }
//     });
// }
// // No caso de sucesso nós localizamos o parágrafo cujo id é conteudo e colocamos o resultado da busca
// // dentro desta div. O resultado recebido por essa função é o conteúdo do arquivo arquivo.txt que é
// // recuperado através da requisição ajax.
//
// function sucesso(resultado) {
//     $("#conteudo").html(resultado);
// }
//
// function erro(xhr, status, strErr) {
//     console.log("Ocorreu um erro!");
//     console.log("xhr = ", xhr);
//     console.log("status = ", status);
//     console.log("strErr = ", strErr);
// }

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 18
//
// Agora vamos ver alguns outros métodos do jquery:
//
// - get() - recupera dados do servidor através de uma requisição HTTP do tipo GET.
// - post() - recupera dados do servidor através de uma requisição HTTP do tipo POST.
// - getJSON() - recupera dados (JSON-encoded) do servidor através de uma requisição HTTP do tipo GET.
// - getScript() - recupera um arquivo javascript do servidor e o executa.
// - load() - recupera conteúdo do servidor e o coloca dentro de uma página.

// Esses métodos permitem a execução de diversas tarefas através de um código bastante simplificado.

// $("document").ready(function() {
//     $("#btn-1").html('Recuperar informação através de requisição ajax');
//     $("#btn-2").addClass("hide");
//     $("#btn-3").addClass("hide");
//     $("#btn-4").addClass("hide");
//     $("#btn-5").addClass("hide");
//     $("#btn-6").addClass("hide");
//
//     $("#conteudo").removeClass("hide");
//
//     $("#btn-1").click(function() {
//
//         // Efetuar uma requisição ajax solicitando o conteúdo do arquivo denominado arquivo.txt e armazenar o
//         // conteúdo deste arquivo, retornado pela requisição ajax, dentro do elemento cujo id é conteudo.
//         recuperarInformacao();
//     });
// });
//
// function recuperarInformacao() {
//
//     // A função get é chamada em cima do jquery object da mesma forma que a função ajax de mais baixo nível.
//     // Passamos no URL o dado que desejamos recuperar (e como arquivo.txt encontra-se na mesma pasta desta
//     // página html, não precisamos passar nenhuma outra informação) e em seguida vem a função de sucesso.
//
//     // ====> Recuperar dados através de uma requisição do tipo GET para o arquivo denominado arquivo.txt
//     // e definir uma função callback denominada sucesso que será executada no caso de sucesso da requisição
//     // ajax.
//
//     // ==>
//
//     // Como recuperar dados de um servidor para ser exibido em uma página html é uma tarefa muito comum,
//     // alternativamente, é possível executar o método load() que executa as tarefas de recuperação de conteúdo
//     // HTML e insere o conteúdo retornado no elemento especificado.
//
//     // ==>
//
//     // Segue o conteúdo da página arquivo.html:
//
//     // <p id="p1">Este é o conteúdo HTML retornado pelo servidor que se encontra</p>
//     // <p id="p2">organizado em 3 parágrafos para ilustrar como carregar parte do</p>
//     // <p id="p3">conteúdo retornado pelo servidor.</p>
//
//     // E agora, vamos supor que desejamos recuperar apenas o parágrafo cujo id é 'p2', para que ele seja carregado
//     // na div conteudo da página index.html. Para recuperar apenas esse parágrafo, basta especificar, após o nome
//     // do arquivo html que será recuperado, o id do parágrafo que desejamos localizar na resposta, para que ele
//     // possa ser colocado na div conteudo. Qualquer selector do jquery pode ser utilizado e não apenas para o id,
//     // como vem abaixo:
//
//     // ====> Recuperar, através de uma requisição utilizando o método load, o código html que deverá ser armazenado
//     // na div conteudo da página index.html. O servidor irá retornar para o cliente (browser), o conteúdo completo
//     // do arquivo denominado arquivo.html, mas apenas o parágrafo com o id='p2' deverá ser armazenado na div
//     // conteudo.
//
//     // ==>
// }
//
// // O parâmetro recebido pela função de sucesso é o dado recuperado do servidor (o conteúdo do arquivo denominado
// // arquivo.txt). Na função sucesso() deve ser utilizado um selector do jquery para localizar a div conteudo,
// // onde o resultado retornado pelo servidor deve ser carregado.
//
// function sucesso(resultado) {
//     $("#conteudo").html(resultado);
// }


// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 19
//
// $("document").ready(function() {
//     $("#btn-1").html('Recuperar informação através de requisição ajax');
//     $("#btn-2").addClass("hide");
//     $("#btn-3").addClass("hide");
//     $("#btn-4").addClass("hide");
//     $("#btn-5").addClass("hide");
//     $("#btn-6").addClass("hide");
//
//     $("#conteudo").removeClass("hide");
//
//     $("#btn-1").click(function() {
//         getXMLData();
//         // getJSONData();
//     });
// });
//
// // A função abaixo emite uma requisição do tipo get para recuperar o conteúdo do arquivo denominado
// // arquivo.xml. E a função callback anônima é executada quando a requisição é concluída.
// //
// // A variável resultado irá conter o conteúdo do arquivo denominado arquivo.xml. Dentro da função
// // callback utilizamos os métodos para acesso ao dom xml para extrair dados desse documento.
// //
// // Esse é o conteúdo do arquivo denominado arquivo.xml:
// //
// // <data>
// //     <universidade>UFF</universidade>
// //     <departamento>Departamento de Ciência da Computação</departamento>
// // </data>
// //
//
// function getXMLData() {
//
//     $.get("arquivo.xml", function(resultado) {
//         // Logo, podemos escrever coisas como:
//         var universidade = resultado.getElementsByTagName("universidade")[0];
//         var departamento = resultado.getElementsByTagName("departamento")[0];
//         var frase = departamento.firstChild.nodeValue + " da " + universidade.firstChild.nodeValue;
//         $("#conteudo").html(frase);
//     });
// }
//
// // Esse é o conteúdo do arquivo denominado arquivo.json:
// //
// // {
// //      "info":
// //      {   "universidade": "UFF",
// //          "departamento": "Departamento de Ciência da Computação"
// //      }
// // }
// //
//
// function getJSONData() {
//
//     $.get("arquivo.json", function(resultado) {
//         var obj = jQuery.parseJSON(JSON.stringify(resultado));
//         var frase = obj.info.departamento + " da " + obj.info.universidade;
//         $("#conteudo").html(frase);
//     });
// }
