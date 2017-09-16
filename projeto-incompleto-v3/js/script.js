$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('[data-toggle="popover"]').popover();
});

var divImagem = document.querySelector(".div-imagem");
var img = divImagem.querySelector("img");
var valorOut = img.getAttribute("alt");
var caption = divImagem.querySelector(".caption");
var h3 = document.createElement("h3");
var textNode = document.createTextNode(valorOut);
h3.appendChild(textNode);
caption.insertBefore(h3, caption.firstChild);
img.setAttribute("alt","");

var contratar = document.querySelector(".contratar")
contratar.addEventListener("click", function(e){
    e.preventDefault();
    this.innerHTML = this.innerHTML == "Contratar" ? "Contratar agora!" : "Contratar";
},false);